$(function() {

	var flow = new RedditFlow('r/WritingPrompts');

	flow.older(function(response) {
		var posts = response.data.children.map(function(post) {
				return post.data;
			}),
			html = posts.map(Tmpl.prompt).join('');

		$('.prompts').html(html);
	});


	function onPromptClick() {
		if ($(document.body).is('.viewing-stories'))
			return;

		var $this = $(this),
			url = $this.attr('data-link').substr(1),
			flow = new RedditFlow(url);

		$this.addClass('selected');
		$(document.body).addClass('viewing-stories')

		flow.older(function(response) {
			var comments = response[1].data.children.map(function(comment) {
					var data = comment.data;
					console.debug('data', data);
					data.permalink = url + data.id;
					return data;
				});
			console.debug('comments', comments);
			var html = comments.map(Tmpl.story).join('');
			
			$('.stories').html(html);
		});
	}


	$('body')
		.on('click', '.prompt', onPromptClick)
		.on('click', '.back-to-prompts', function(e) {
			console.debug($('body').removeClass('viewing-stories'));
			e.stopPropagation();
		});

});
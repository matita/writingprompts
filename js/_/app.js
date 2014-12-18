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
		var $this = $(this),
			url = $this.attr('data-link').substr(1),
			flow = new RedditFlow(url);

		$this.addClass('selected');
		$(document.body).addClass('viewing-stories');

		window.location = '#';

		$('.stories').text('loading stories...');

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
			$('body').removeClass('viewing-stories');
			$('.prompt.selected').removeClass('selected');
			e.stopPropagation();
		});

});
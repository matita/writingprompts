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

		flow.older(function(response) {
			var comments = response[1].data.children.map(function(comment) {
					return comment.data;
				}),
				html = comments.map(Tmpl.comment).join('');
			
			$this.find('.prompt-comments').html(html);
		});
	}


	$('body')
		.on('click', '.prompt', onPromptClick);

});
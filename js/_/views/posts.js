function Posts(path) {
	var flow = new RedditFlow(path);

	$(document.body)
		.scrollTop(0)
		.removeClass('viewing-stories');

	$('.prompts').html('Loading posts...');

	flow.older(function(response) {
		var posts = response.data.children.map(function(post) {
				return post.data;
			}),
			html = posts.map(Tmpl.prompt).join('');

		$('.prompts').html(html);
	});
}
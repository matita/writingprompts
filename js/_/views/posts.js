function Posts(path) {
	var flow = new RedditFlow(path),
		$root = $('.prompts'),
		$loader = $('<div class="loader">Loading...</div>'),
		$more = $('<button class="more">More</button>');

	$(document.body)
		.scrollTop(0)
		.removeClass('viewing-stories');

	$root.html('');
	more();

	function more() {
		$root.append($loader);
		$more.remove();

		flow.older(function(response) {
			$loader.remove();

			var posts = response.data.children.map(function(post) {
					return post.data;
				}),
				html = posts.map(Tmpl.prompt).join('');

			$root.append(html);

			if (flow.after())
				$root.append($more.click(more));
		});
	}
}
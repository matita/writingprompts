plugin('recursePosts', function(post) {
	var bodies = [];
	getBody(post, post.author);
	return bodies.join('\n');


	function getBody(comment, author) {
		if (comment.author == author) {
			bodies.push(comment.body_html || comment.selftext_html);

			if (comment.replies && comment.replies.data && comment.replies.data.children)
				comment.replies.data.children.forEach(function(c) {
					getBody(c.data, comment.author);
				});
		}
	}
});
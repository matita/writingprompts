plugin('recursePosts', function(post) {
	var bodies = [];
	getBody(post, post.author);
	return bodies.join('\n');



	function getBody(comment, author, lastId) {
		if (comment.author == author) {
			bodies.push(comment.body_html || comment.selftext_html);

			if (comment.replies && comment.replies.data && comment.replies.data.children) {
				comment.replies.data.children.forEach(function(c, i, replies) {
					if (c.kind == 'more' && c.data.children && (c.data.children.length == 1 || replies.length == 1)) {
						var continueId = c.data.id,
							continueUrl = post.url.replace(/\w+$/, continueId);
						bodies.push('&lt;p class="continue-thread"&gt;&lt;a href="' + continueUrl + '"&gt;Continue thread &#8594;&lt;/a&gt;&lt;/p&gt;');
					} else {
						getBody(c.data, comment.author, comment.id);
					}
				});
			}
		}
	}
});
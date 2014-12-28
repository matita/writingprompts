function Comments(path) {
	var flow = new RedditFlow(path);

	$(document.body)
		.scrollTop(0)
		.addClass('viewing-stories');

	$('.prompts').html('Loading stories...');

	

	flow.older(function(response) {
		var post = response[0].data.children[0].data,
			comments = response[1].data.children.map(function(comment) {
				var data = comment.data;
				
				data.url = post.url + data.id;
				data.body_html = getBody(data);
				return data;
			});
			
		var html = Tmpl.prompt(post) + 
			comments.map(Tmpl.story).join('');
		
		$('.prompts').html(html);
	});



	function getBody(comment, author, bodies) {
		bodies = bodies || [];
		if (!author || comment.author == author) {
			bodies.push(comment.body_html);

			if (comment.replies.data && comment.replies.data.children)
				comment.replies.data.children.forEach(function(c) {
					getBody(c.data, comment.author, bodies);
				});
		}

		if (!author)
			return bodies.join('\n');
	}
}
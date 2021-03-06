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
				
				applyPlugins(data, Read.commentPlugins);
				data.rendered_text = $('<div>').html(data.rendered_html).text();

				return data;
			});

		applyPlugins(post, Read.commentPlugins);
			
		var html = Tmpl.prompt(post) + 
			comments.map(Tmpl.story).join('');
		
		$('.prompts').html(html);
	});
}
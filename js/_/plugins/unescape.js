plugin('unescape', function(post) {
	return $('<div>').html(post.rendered_html).text();
});
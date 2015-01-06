plugin('reachParent', function(post) {
	var prefix = '',
		m, parentUrl;

	if (post.parent_id && (m = post.parent_id.match(/^t1_(\w+)/)) !== null) {
		parentUrl = post.url.replace(/\w+$\/?/, m[1]);
		prefix = '<p class="reach-parent"><a href="' + parentUrl + '">&#8592; View context</a></p>';
	}

	return prefix + post.rendered_html;
});
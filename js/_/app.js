$(function() {

	$('body')
		.on('click', 'a', function() {
			var href = $(this).attr('href');
			if (!href.match(/^http/)) {
				history.pushState(null, '', href);
				route();
				return false;
			}
		});


	function route() {
		var path = location.search.substr(1) || 'r/WritingPrompts';

		if (path.match(/\/comments\//))
			Comments(path);
		else
			Posts(path);
	}

	$(window).on('popstate', route);

	route();

});
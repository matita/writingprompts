$(function() {

	$('body')
		.on('click', 'a:not(.external-link)', function() {
			var href = $(this).attr('href').replace(/^https?:\/\/(www\.)?reddit\.com\//, '?');
			if (!href.match(/^http/)) {
				if (!href.match(/^\?/))
					href = '?' + href;
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
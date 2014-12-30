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
		})
		.on('change', '.posts-sort', function() {
			var val = $(this).val();
		});


	function route() {
		if (!location.search.substr(1))
			history.replaceState(null, '', '?r/WritingPrompts');
		var path = location.search.substr(1);

		if (path.match(/\/comments\//))
			Comments(path);
		else
			Posts(path);

		
		if (path.match(/^\/?r\/\w+(\/(hot|new|rising|controversial|top))?(\?|$)/))
			$('.posts-sort').show();
		else
			$('.posts-sort').hide();
	}

	$(window).on('popstate', route);

	route();

});
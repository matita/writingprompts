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
			var sets = settings(),
				sort = ''+$(this).val();
			sets.postsSort = sort;
			settings(sets);

			route();
		});

	$(window).on('popstate', route);

	init();




	function init() {
		var sets = settings();

		if (sets.postsSort)
			$('.posts-sort').val(sets.postsSort);
		
		route();
	}


	function route() {
		if (!location.search.substr(1))
			history.replaceState(null, '', '?r/WritingPrompts');
		
		var sets = settings(),
			sort = sets.postsSort,
			path = location.search.substr(1);

		if (sort)
			path = path.replace(/\/?r\/(\w+)(\/?(hot|new|rising|controversial|top|gilded)?)$/, '/r/$1/'+sort);
		
		if (path.match(/\/comments\//))
			Comments(path);
		else
			Posts(path, sort);

		
		if (path.match(/^\/?r\/\w+(\/(hot|new|rising|controversial|top))?(\?|$)/))
			$('.sorting').show();
		else
			$('.sorting').hide();
	}


	function settings(obj) {
		if (!obj)
			return JSON.parse(localStorage.getItem('r_settings') || '{}');
		localStorage.setItem('r_settings', JSON.stringify(obj || {}));
	}

});
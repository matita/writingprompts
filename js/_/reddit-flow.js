function RedditFlow(sub) {
	var me = this,
		url = 'https://reddit.com/' + sub.split('?').map(function(part, i, parts) {
			if (i === 0)
				return part + '.json' + (parts.length == 1 ? '?jsonp=?' : '');
			if (i == 1)
				return 'jsonp=?&' + part;
			return part;
		}).join('?'),
		loading = false,
		before, after;

	
	me.older = function(callback) {
		if (loading)
			return;

		loading = true;
		$.getJSON(
			url,
			{ after: after },
			function(response) {
				loading = false;

				if (response.data)
					after = response.data.after;

				callback(response);
			}
		);
	}
}
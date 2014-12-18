function RedditFlow(sub) {
	var me = this,
		url = 'https://reddit.com/' + sub + '.json?jsonp=?',
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
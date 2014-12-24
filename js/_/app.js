$(function() {

	

	function onPromptClick() {
		var $this = $(this),
			url = $this.attr('data-link').substr(1),
			flow = new RedditFlow(url);

		$this.addClass('selected');
		$(document.body).addClass('viewing-stories');

		window.location = '#';

		$('.stories').text('loading stories...');

		flow.older(function(response) {
			var comments = response[1].data.children.map(function(comment) {
					var data = comment.data;
					console.debug('data', data);
					data.permalink = url + data.id;
					return data;
				});
			console.debug('comments', comments);
			var html = comments.map(Tmpl.story).join('');
			
			$('.stories').html(html);
		});
	}


	$('body')
		.on('click', 'a', function() {
			var href = $(this).attr('href');
			if (!href.match(/^http/)) {
				history.pushState(null, '', href);
				route();
				return false;
			}
		})
		/*.on('click', '.prompt', onPromptClick)
		.on('click', '.back-to-prompts', function(e) {
			$('body').removeClass('viewing-stories');
			$('.prompt.selected').removeClass('selected');
			e.stopPropagation();
		});*/


	function route() {
		var path = location.search.substr(1) || 'r/WritingPrompts';

		if (path.match(/^\/?[^\/]+\/[^\/]+\/?$/))
			Posts(path);
		else if (path.match(/\/comments\//))
			Comments(path);
	}

	$(window).on('popstate', route);

	route();

});
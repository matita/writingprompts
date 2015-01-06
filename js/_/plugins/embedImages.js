plugin('embedImages', function(post) {
	return $('<div>')
		.html(post.rendered_html)
		.find('a').each(function() {
			var $this = $(this),
				href = $this.attr('href'),
				m = href.match(/https?:\/\/(i\.)?imgur\.com\/(\w+)(\.(jpe?g|png|gifv?))?/);

			if (m) {
				console.debug('^ this is img');
				$this
					.attr('title', $this.text())
					.html('<figure><img src="//i.imgur.com/' + m[2] + 'l.jpg"><figcaption>' + $this.text() + '</figcaption></figure>');
			}
		})
		.end().html();
});
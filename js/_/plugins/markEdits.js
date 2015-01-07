plugin('markEdits', function(post) {
	return $('<div>')
		.html(post.rendered_html)
		.find('p').each(function() {
			var $this = $(this),
				text = $this.text();

			if (text.match(/^edit(ed)?(\d+)?\b/i))
				$this.addClass('edit-note');
		})
		.end().html();
});
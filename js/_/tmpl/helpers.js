Handlebars.registerHelper('unescape', function(text) {
	return $('<p>').html(text).text();
});


Handlebars.registerHelper('readspeed', function(text) {
	var words = Math.round(text.length / 5),
		wpm = 250;
	return Math.ceil(words / wpm) + ' minutes';
});
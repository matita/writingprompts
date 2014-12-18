Handlebars.registerHelper('unescape', function(text) {
	return $('<p>').html(text).text();
});


Handlebars.registerHelper('readspeed', function(text) {
	var words = text && Math.round(text.length / 5) || 0,
		wpm = 250;
	return moment.duration(words / wpm, 'minutes').humanize();
});


Handlebars.registerHelper('fromNow', function(post) {
	var time = post.created_utc + moment().zone();
	return moment(time*1000).fromNow();
})


Handlebars.registerHelper('dateFormat', function(post) {
	var time = post.created_utc + moment().zone();
	return moment(time*1000).format();
})
this["Tmpl"] = this["Tmpl"] || {};

this["Tmpl"]["comment"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<article class=\"story\">\r\n	<header>\r\n		<h2 class=\"story-author\">\r\n			<span class=\"h2-span\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n		<span class=\"story-score\">"
    + escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"score","hash":{},"data":data}) : helper)))
    + " points</span>\r\n		<span class=\"story-reading-time\">"
    + escapeExpression(((helpers.readspeed || (depth0 && depth0.readspeed) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"readspeed","hash":{},"data":data})))
    + "</span>\r\n	</header>\r\n	\r\n	";
  stack1 = ((helpers.unescape || (depth0 && depth0.unescape) || helperMissing).call(depth0, (depth0 != null ? depth0.body_html : depth0), {"name":"unescape","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n\r\n	<footer>\r\n		<a href=\"http://reddit.com/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n			"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.replies : depth0)) != null ? stack1.data : stack1)) != null ? stack1.children : stack1)) != null ? stack1.length : stack1), depth0))
    + " replies\r\n		</a>\r\n	</footer>\r\n</article>";
},"useData":true});



this["Tmpl"]["prompt"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<section class=\"prompt\" data-link=\""
    + escapeExpression(((helper = (helper = helpers.permalink || (depth0 != null ? depth0.permalink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"permalink","hash":{},"data":data}) : helper)))
    + "\">\r\n	<div class=\"main\">\r\n		<span class=\"prompt-title\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\r\n\r\n		<div class=\"prompt-comments\"></div>\r\n	</div>\r\n</section>";
},"useData":true});
this["Tmpl"] = this["Tmpl"] || {};

this["Tmpl"]["prompt"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<article class=\"prompt\" data-link=\""
    + escapeExpression(((helper = (helper = helpers.permalink || (depth0 != null ? depth0.permalink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"permalink","hash":{},"data":data}) : helper)))
    + "\" id=\"prompt-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n	<a href=\"?r/"
    + escapeExpression(((helper = (helper = helpers.subreddit || (depth0 != null ? depth0.subreddit : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subreddit","hash":{},"data":data}) : helper)))
    + "\" class=\"back-to-prompts\">&#8592; back to prompts</a>\r\n\r\n	<h3 class=\"prompt-title\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h3>\r\n\r\n	<a href=\"?r/"
    + escapeExpression(((helper = (helper = helpers.subreddit || (depth0 != null ? depth0.subreddit : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subreddit","hash":{},"data":data}) : helper)))
    + "/comments/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"read-comments\">Read stories</a>\r\n\r\n	<a href=\"http://reddit.com/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"read-on-reddit\">Read on Reddit</a>\r\n</article>";
},"useData":true});



this["Tmpl"]["story"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<article class=\"story\">\r\n	<header>\r\n		<h2 class=\"story-author\">\r\n			<span class=\"h2-span\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n		<span class=\"story-score\">"
    + escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"score","hash":{},"data":data}) : helper)))
    + " points</span>\r\n		<span class=\"story-reading-time\">"
    + escapeExpression(((helpers.readspeed || (depth0 && depth0.readspeed) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"readspeed","hash":{},"data":data})))
    + "</span>\r\n	</header>\r\n	\r\n	";
  stack1 = ((helpers.unescape || (depth0 && depth0.unescape) || helperMissing).call(depth0, (depth0 != null ? depth0.body_html : depth0), {"name":"unescape","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n</article>";
},"useData":true});
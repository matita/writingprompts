this["Tmpl"] = this["Tmpl"] || {};

this["Tmpl"]["prompt"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.readspeed || (depth0 && depth0.readspeed) || helperMissing).call(depth0, (depth0 != null ? depth0.selftext : depth0), {"name":"readspeed","hash":{},"data":data})));
  },"3":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers.readspeed || (depth0 && depth0.readspeed) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"readspeed","hash":{},"data":data})));
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<a href=\"?r/"
    + escapeExpression(((helper = (helper = helpers.subreddit || (depth0 != null ? depth0.subreddit : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subreddit","hash":{},"data":data}) : helper)))
    + "/comments/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n		<h3 class=\"prompt-title\" title=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h3>\r\n	</a>\r\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<a href=\""
    + escapeExpression(((helper = (helper = helpers.link_url || (depth0 != null ? depth0.link_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link_url","hash":{},"data":data}) : helper)))
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n		<h3 class=\"prompt-title\" title=\"";
  stack1 = ((helper = (helper = helpers.link_title || (depth0 != null ? depth0.link_title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link_title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.link_title || (depth0 != null ? depth0.link_title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link_title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h3>\r\n	</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<article class=\"prompt\" data-link=\""
    + escapeExpression(((helper = (helper = helpers.permalink || (depth0 != null ? depth0.permalink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"permalink","hash":{},"data":data}) : helper)))
    + "\" id=\"prompt-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n	<a href=\"?r/"
    + escapeExpression(((helper = (helper = helpers.subreddit || (depth0 != null ? depth0.subreddit : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subreddit","hash":{},"data":data}) : helper)))
    + "\" class=\"back-to-prompts\">&#8592; back to prompts</a>\r\n\r\n	<header class=\"prompt-header\">\r\n		<h2 class=\"story-author\">\r\n			<span class=\"h2-span\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n		<span class=\"story-score\">"
    + escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"score","hash":{},"data":data}) : helper)))
    + " points</span>\r\n		<span class=\"story-reading-time\">\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n			";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n			read\r\n		</span>\r\n	</header>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.link_title : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n	<div class=\"post-body\">\r\n		";
  stack1 = ((helpers.unescape || (depth0 && depth0.unescape) || helperMissing).call(depth0, (depth0 != null ? depth0.selftext_html : depth0), {"name":"unescape","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n		";
  stack1 = ((helpers.unescape || (depth0 && depth0.unescape) || helperMissing).call(depth0, (depth0 != null ? depth0.body_html : depth0), {"name":"unescape","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n	</div>\r\n\r\n	<footer class=\"prompt-footer\">\r\n		<a href=\"http://reddit.com/r/"
    + escapeExpression(((helper = (helper = helpers.subreddit || (depth0 != null ? depth0.subreddit : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"subreddit","hash":{},"data":data}) : helper)))
    + "/comments/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"read-on-reddit external-link just-viewing\">Read on Reddit</a>\r\n		<span class=\"just-viewing\">&middot;</span>\r\n		<span class=\"post-comments\">"
    + escapeExpression(((helper = (helper = helpers.num_comments || (depth0 != null ? depth0.num_comments : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"num_comments","hash":{},"data":data}) : helper)))
    + " comments</span>\r\n		&middot;\r\n		"
    + escapeExpression(((helpers.fromNow || (depth0 && depth0.fromNow) || helperMissing).call(depth0, depth0, {"name":"fromNow","hash":{},"data":data})))
    + "\r\n	</footer>\r\n</article>";
},"useData":true});



this["Tmpl"]["story"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<article class=\"story\">\r\n	<header>\r\n		<h2 class=\"story-author\">\r\n			<span class=\"h2-span\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</h2>\r\n		<span class=\"story-score\">"
    + escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"score","hash":{},"data":data}) : helper)))
    + " points</span>\r\n		<span class=\"story-reading-time\">"
    + escapeExpression(((helpers.readspeed || (depth0 && depth0.readspeed) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"readspeed","hash":{},"data":data})))
    + " read</span>\r\n	</header>\r\n	\r\n	";
  stack1 = ((helpers.unescape || (depth0 && depth0.unescape) || helperMissing).call(depth0, (depth0 != null ? depth0.body_html : depth0), {"name":"unescape","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n\r\n	<footer>\r\n		<a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"external-link\">\r\n			"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.replies : depth0)) != null ? stack1.data : stack1)) != null ? stack1.children : stack1)) != null ? stack1.length : stack1), depth0))
    + " replies\r\n		</a>\r\n		&middot;\r\n		"
    + escapeExpression(((helpers.fromNow || (depth0 && depth0.fromNow) || helperMissing).call(depth0, depth0, {"name":"fromNow","hash":{},"data":data})))
    + "\r\n	</footer>\r\n</article>";
},"useData":true});
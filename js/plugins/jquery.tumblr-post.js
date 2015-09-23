/*
 * GitHubRepos 0.1
 * Copyright (c) 2012 Flynn Jiang http://jiangfeng.org
 * Date: 2012-6-24
 * Get repos list by user name, base on GitHub API v3.
 *
 * Usage: 
 * 		$('#ooxx').GitHubRepos({
 * 			username : xxx,
 * 			callback : function(data){...};
 *		});	
 */
(function($) {
	$.fn.TumblrPost = function(options) {

		var target = this;
		
		var defaults = {username : 'test'};
		var options = $.extend(defaults, options);
		
		
		var __init = function(options) {
		};
		
		var __get_data = function(start, num, type, id, filter, tagged, search, cb){
			
			var url_str = 'http://' + options.username + '.tumblr.com/api/read/json?1=1'
						+ (undefined == start ? "" : "&start=" + start)
						+ (undefined == num ? "" : "&num=" + num)
						+ (undefined == type ? "" : "&type=" + type)
						+ (undefined == id ? "" : "&id=" + id)
						+ (undefined == filter ? "" : "&filter=" + filter)
						+ (undefined == tagged ? "" : "&tagged=" + tagged)
						+ (undefined == search ? "" : "&search=" + search);
			
			$.ajax({
				url: url_str,
				dataType: 'script',
				timeout: 30*1000,
				success: function() {
					cb(tumblr_api_read);
				},
				error: function (xhr, statusTxt, errorTxt) {
					/* do nothing */
				}
			});
		};

		this.get_recent_posts = function(num, cb){
			__get_data(0, num, undefined, undefined, undefined, undefined, undefined, cb);
		};
		
		
		this.get_post = function(id, cb){
			__get_data(undefined, undefined, undefined, id, undefined, undefined, undefined, cb);
		};
		
		__init();

		return this;
	};
	
	TumblrPost = function(ops){
		return $.fn.TumblrPost(ops);
	};

})(jQuery);

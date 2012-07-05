(function($) {
	$.fn.blogger = function(options) {
		
		var resp_callback = function(result) {
			
			target.html("努力加载中。。。");
			
			$(result.items).each(function() {
				target.append('<a href="'+ this.url + '">' + this.title + '</a><span>' + this.published + '</span>');
			});

			
			if ($result.prevPageToken) {
				target.append(
					'<a href="javascript:void(0)" onclick="$("#' + target_id + '").blogger({'
					+ 'id: ' + options.id +','
					+ 'key: ' + options.key + ','
					+ 'page: ' + result.prevPageToken + 
					+ '})">Prev</a>');
			}
			
			if ($result.nextPageToken) {
				target.append(
					'<a href="javascript:void(0)" onclick="$("#' + target_id + '").blogger({'
					+ 'id: ' + options.id +','
					+ 'key: ' + options.key + ','
					+ 'page: ' + result.nextPageToken + 
					+ '})">Next</a>');
			}
			
		};

		var defaults = {
			'id' : "5568048636599513853",
			'key' : "AIzaSyD9TfhepQP6C50axzubBBPHMHoPFnDdcJw",
			'page' : "",
			'callback' : resp_callback
		};

		
		var options = $.extend(defaults, options);
		var target = this;
		var target_id = target.attr("id");

		$.getJSON(
			'https://www.googleapis.com/blogger/v3/blogs/' + options.id + '/posts'
			+ '?'
			+ 'fields=items(published,title,updated,url),nextPageToken,prevPageToken'
			+ (options.page ? ('&pageToken=' + option.page) : "")
			+ '&key=' + options.key,
			options.callback);

	};
})(jQuery);
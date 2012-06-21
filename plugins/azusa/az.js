
function azusa() {
	var has_init = 0;
	
	var action_array = new Array();
	var curr_index = 0;

	var main_div;
	var main_img;
	var dailog_div;

	function action(text, img_url) {
		this.words = text;
		this.img_url = img_url;
	};
	
	this.init = function() {
		if (0 != has_init)
			return;

		this.add_action("我是梓喵～", "/plugins/azusa/az_5.png");
		this.add_action("YUI前辈她们都在干什么呢？", "/plugins/azusa/az_2.png");
		this.add_action("大学里的生活应该很有趣吧。。。", "/plugins/azusa/az_2.png");
		this.add_action("会不会有时候也想起阿梓呢？", "/plugins/azusa/az_2.png");
		this.add_action("喵～", "/plugins/azusa/az_3.png");
		this.add_action("～喵～ 喵～", "/plugins/azusa/az_3.png");
		this.add_action("hen tai!", "/plugins/azusa/az_4.png");
		this.add_action("前辈再这样的话，会被阿梓讨厌的哦～", "/plugins/azusa/az_1.png");
		
		main_div = document.createElement('div');
		main_div.style.position = "fixed";
		//main_div.style.width = "100px";
		//main_div.style.height = "100px";
		main_div.style.bottom = " 10px";
		main_div.style.right = "10px";
		//main_div.style.backgroundColor = "blue";
		//main_div.innerText = "<p>main</p>";

		dailog_div = document.createElement('div');
		dailog_div.style.position = "absolute";
		dailog_div.style.width = "100px";
		//dailog_div.style.maxHeight = "100px";
		dailog_div.style.right = "120px";
		dailog_div.style.border="1px solid #ccc";
		dailog_div.style.borderRadius = "8px";
		dailog_div.style.bottom = "100px";
		//dailog_div.style.backgroundColor = "red";
		dailog_div.style.padding = "5px";
		dailog_div.style.fontSize = "12px";
		dailog_div.innerText = action_array[0].words;
		
		main_img = document.createElement('img');
		main_img.src = action_array[0].img_url;
		main_img.style.cursor = "pointer";
		main_img.onclick = this.click_cb;
		
		main_div.appendChild(dailog_div);
		main_div.appendChild(main_img);
		document.getElementsByTagName('body')[0].appendChild(main_div);
		
		curr_index++;
		
		has_init = 1;
	};

	this.add_action = function(text, img_url) {
		var new_act = new action(text, img_url);
		action_array.push(new_act);
		new_act = null;
	};

	this.show = function() {
		this.init();
	};
	
	this.click_cb = function () {
		if (curr_index >= action_array.length)
			curr_index = 0;

		main_img.src = action_array[curr_index].img_url;
		dailog_div.innerText = action_array[curr_index].words;

		curr_index++;
	};
};

var az = new azusa();
az.show();
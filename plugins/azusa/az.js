
function azusa() {
	var has_init = 0;
	
	var action_array = new Array();
	var curr_index = 0;

	var main_div;
	var dailog_div;
	var main_img;
	var preload_img;

	function action(text, img_url) {
		this.words = text;
		this.img_url = img_url;
	};
	
	this.init = function() {
		if (0 != has_init)
			return;
		
		has_init = 1;
		curr_index = 0;

		this.add_action("稠鱼烧 Daisuki!!", "/plugins/azusa/az_6.gif");
		
		this.add_action("大家好！那个……", "/plugins/azusa/az_5.png");
		this.add_action("我是一年二班的中野梓，", "/plugins/azusa/az_5.png");
		this.add_action("位置的话，吉他稍微会一点……", "/plugins/azusa/az_5.png");
		this.add_action("和唯前辈一样呢～", "/plugins/azusa/az_5.png");
		
		this.add_action("前辈们现在在做些什么呢？", "/plugins/azusa/az_2.png");
		this.add_action("大学里的生活应该很有趣吧。。。", "/plugins/azusa/az_2.png");
		this.add_action("会不会也有轻音部？", "/plugins/azusa/az_2.png");
		this.add_action("会不会有时候也想起阿梓呢？", "/plugins/azusa/az_2.png");
		this.add_action("果然还是想和前辈们在一起啊。。。", "/plugins/azusa/az_2.png");
		
		this.add_action("喵～", "/plugins/azusa/az_3.png");
		this.add_action("～喵～ 喵～", "/plugins/azusa/az_3.png");
		this.add_action("Hentai!", "/plugins/azusa/az_4.png");
		this.add_action("前辈再这样的话，", "/plugins/azusa/az_4.png");
		this.add_action("会被阿梓讨厌的哦～", "/plugins/azusa/az_4.png");
		this.add_action("喂！主人，", "/plugins/azusa/az_1.png");
		this.add_action("不要让我说些奇怪的话啦！！", "/plugins/azusa/az_1.png");

		/* Main containter */
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
		dailog_div.innerText = action_array[curr_index].words;
		
		main_img = document.createElement('img');
		main_img.src = action_array[curr_index].img_url;
		main_img.style.cursor = "pointer";
		main_img.onclick = this.click_cb;
		
		preload_img = document.createElement('img');
		preload_img.src = action_array[curr_index + 1].img_url;
		preload_img.style.display = "none";

		main_div.appendChild(dailog_div);
		main_div.appendChild(main_img);
		main_div.appendChild(preload_img);
		document.getElementsByTagName('body')[0].appendChild(main_div);
		
		curr_index++;
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
		var next_index;
		if (0 == action_array.length)
			return -1;

		curr_index = curr_index % action_array.length;
		main_img.src = action_array[curr_index].img_url;
		dailog_div.innerText = action_array[curr_index].words;
		
		/* Pre load image */
		if (preload_img.src == main_img.src)
		{
			for (next_index = curr_index + 1; next_index < action_array.length; next_index++)
			{
				if (action_array[next_index].img_url != action_array[curr_index].img_url) {
					preload_img.src = action_array[next_index].img_url;
					break;
				}
			}
		}

		curr_index++;
	};
};

var az = new azusa();
az.show();
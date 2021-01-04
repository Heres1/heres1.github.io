class Swiper {
	constructor() {
		this.w = $('.swiper-item').width();
		this.num = 0;
		this.len = $('.swiper .swiper-item').length - 1;
		this.timer = null;
	}
	init() {
		this.setTime();
		this.hover();
		this.pointClick();
		this.lrClick();
	}
	setTime() {
		this.timer = setInterval(() => {
			this.num++;
			if (this.num > this.len) {
				this.num = 0;
			}
			let cssTrx = -this.num * this.w;
			$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
			$('.swiper').css({
				transform: `translateX(${cssTrx}px)`
			})
		}, 3000)
	}
	hover() {
		$('.swiper-contione').hover(() => {
			clearInterval(this.timer)
		}, () => {
			this.setTime();
		});
	}
	pointClick() {
		let that = this;
		$('.swiper-point-item .point').click(function() {
			that.num = $(this).index();
			let cssTrx = -that.num * that.w;
			$(this).addClass('active').siblings().removeClass('active');
			$('.swiper').css({
				transform: `translateX(${cssTrx}px)`
			})
		})
	}
	lrClick() {
		$('.swiper-left img').click(() => {
			this.num--;
			if (this.num < 0) {
				this.num = this.len;
			};
			console.log(this.num)
			let cssTrx = -this.num * this.w;
			$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
			$('.swiper').css({
				transform: `translateX(${cssTrx}px)`
			})
		});

		$('.swiper-right img').click(() => {
			this.num++;
			if (this.num > this.len) {
				this.num = 0;
			}
			let cssTrx = -this.num * this.w;
			$('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
			$('.swiper').css({
				transform: `translateX(${cssTrx}px)`
			})
		})
	}
}
let sw = new Swiper();
sw.init();

function validateForm() {
	var x = prompt("昵称为:", "");
	if (x == null) {
		alert("未输入昵称")
	} else {
		document.getElementById("nicheng").innerHTML = "昵称：" + x;
		document.getElementById("按钮").style.display = "none";
	}
}
var ipt = document.getElementById("ipt");
var txt = document.getElementById('txt');
var textarea = document.getElementById("text");
ipt.onclick = function() {
	var textValue = textarea.value.LTrim();
	textarea.value = "";
	if (textValue.length > 0) {
		var divs = document.createElement("div");
		var imgs = document.createElement("img");
		var ps = document.createElement("p");
		var inputs = document.createElement("input");
		divs.setAttribute("class", "creatediv");
		imgs.setAttribute('class', "createimg");
		ps.setAttribute("class", "createdivs");
		inputs.setAttribute("class", "createinput");
		imgs.src = "img/头像.png";
		inputs.type = "button";
		inputs.value = "删除";
		ps.innerHTML = "zcx:" + textValue;
		divs.appendChild(imgs);
		divs.appendChild(ps);
		divs.appendChild(inputs);
		if (txt.children.length == 0) {
			txt.appendChild(divs);
		} else {
			txt.insertBefore(divs, get_firstChild(txt))
		}
		inputs.onclick = function() {
			this.parentNode.parentNode.removeChild(this.parentNode)
		}
	}
}
var myVar = setInterval(function() {
	myTimer()
}, 1000);

function myTimer() {
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("time").innerHTML = t;
}

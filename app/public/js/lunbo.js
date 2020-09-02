let index = 0;

function lunbo(){
	let img = document.querySelectorAll(".lunbo img");
	let li = document.querySelectorAll(".point li");
	for(let i = 0;i < img.length;i++){
		img[i].style.display = "none";
		li[i].style.backgroundColor = "#fff";
	}
	index %= img.length;
	img[index].style.display = "block";
	li[index].style.backgroundColor = "#f00";
}

function pointlunbo(){
	let li = document.querySelectorAll(".point li");
	for(let i = 0;i < li.length;i++){
		li[i].onclick = function(){
			index = i;
			lunbo();
		}
	}
}

function cutover(){
	let left = document.querySelector(".left");
	let right = document.querySelector(".right");
	let img = document.querySelectorAll(".lunbo img");
	left.onclick = function(){
		if(index <= 0){
			index = img.length - 1;
		}else{
			index--;
		}
		lunbo();
	}
	right.onclick = function(){
		index++;
		lunbo();
	}
}

setInterval(() => {
	index++;
	lunbo();
	pointlunbo();
	cutover();
},3000);

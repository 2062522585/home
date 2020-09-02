function getValue(key){
		let name = key + "=";
		let array = document.cookie.split(";");
		for(let i = 0;i < array.length;i++){
			let str = array[i].trim();
			if(str.indexOf(name) == 0){
				return str.substring(name.length,str.length);
			}
		}
		return null;
}

function home(){
	let home = document.querySelector(".body");
	let person = document.querySelector(".person");
	person.style.display = "none";
	home.style.display = "flex";
}

function person(){
	let username = getValue("username");
	if(username){
		let home = document.querySelector(".body");
		let person = document.querySelector(".person");
		let pu = document.querySelector(".p-username");
		let ppwd = document.querySelector(".p-pwd");
		let newImg = document.getElementById("avatar-img");
		home.style.display = "none";
		person.style.display = "block";
		pu.innerHTML = getValue("username");
		ppwd.innerHTML = getValue("pwd");
		axios.post('/selectimg',{
			username:getValue("username")
		}).then(res => {
			newImg.setAttribute('src',res.data[0].avatar);
		}).catch(e => {
			console.log(e);
		})
	}else{
		showlogin();
	}
}

function updateshow(){
	let modify = document.querySelector(".modify");
	modify.style.display = "block";
}

function update(){
	let pu = document.querySelector(".p-username");
	let ppwd = document.querySelector(".p-pwd");
	let modify = document.querySelector(".modify");
	let newImg = document.getElementById("avatar-img");
	let file = document.getElementById("choose").files[0];
	let newusername = document.getElementById("newusername").value;
	let newpwd = document.getElementById("newpwd").value;
	let username = getValue("username");
	let formData = new FormData();
	formData.append("newusername",newusername);
	formData.append("newpwd",newpwd);
	formData.append("username",username);
	formData.append("uploadFile",file,file.name);
	const config = {
		headers:{
			"Content-Type":"multipart/form-data;boundary=" + new Date().getTime()
		}
	};
	axios.post('/upload',formData,config).then(res => {
		document.cookie = `username=${newusername}`;
		document.cookie = `pwd=${newpwd}`;
		newImg.setAttribute('src',res.data);
		pu.innerHTML = newusername;
		ppwd.innerHTML = newpwd;
		alert("修改成功");
		modify.style.display = "none";
	}).catch(e => {
		console.log(e);
	})
}


function cancel(){
	let modify = document.querySelector(".modify");
	modify.style.display = "none";
}

function showlogin(){
	let login = document.querySelector(".login");
	let register = document.querySelector(".register");
	register.style.display = "none";
	login.style.display = "block";
}

function showregister(){
	let login = document.querySelector(".login");
	let register = document.querySelector(".register");
	login.style.display = "none";
	register.style.display = "block";
}

function introduce(){
	let participate = document.querySelector(".participate");
	let lunbo = document.querySelector(".lunbo");
	let show = document.querySelector(".show");
	participate.style.display = "none";
	show.style.display = "none";
	lunbo.style.display = "block";
}

function join(){
	let username = getValue("username");
	if(username){
		let participate = document.querySelector(".participate");
		let lunbo = document.querySelector(".lunbo");
		let show = document.querySelector(".show");
		participate.style.display = "block";
		show.style.display = "none";
		lunbo.style.display = "none";
	}else{
		showlogin();
	}
}

function help(){
	let username = getValue("username");
	if(username){
		let show = document.querySelector(".show");
		let participate = document.querySelector(".participate");
		let lunbo = document.querySelector(".lunbo");
		let shower = document.querySelector(".shower");
		shower.innerHTML = "";
		participate.style.display = "none";
		lunbo.style.display = "none";
		show.style.display = "block";
		
		axios.post('/select',{}).then(res => {
			for(let i = 0;i < res.data.length;i++){
				let div1 = document.createElement("div");
				let div2 = document.createElement("div");
				let img = document.createElement("img");
				let div3 = document.createElement("div");
				let span1 = document.createElement("span");
				let span2 = document.createElement("span");
				let span3 = document.createElement("span");
				let p = document.createElement("p");
				let good = document.createElement("img");
				img.setAttribute('src',res.data[i].url);
				img.style.width = "200px";
				img.style.height = "200px";
				div1.style.width = "200px";
				div1.style.height = "200px";
				div2.appendChild(img);
				div1.appendChild(div2);
				span1.innerHTML = res.data[i].name;
				span2.innerHTML = res.data[i].sex;
				span3.innerHTML = res.data[i].age + "岁";
				p.innerHTML = "获赞" + res.data[i].count;
				good.setAttribute('src',"http://localhost:7001/public/img/good.jpg");
				good.style.width = "20px";
				good.style.height = "20px";
				good.style.marginLeft = "10px";
				good.style.marginTop = "10px";
				p.appendChild(good);
				div3.appendChild(span1);
				div3.appendChild(span2);
				div3.appendChild(span3);
				div3.appendChild(p);
				div1.appendChild(div3);
				shower.appendChild(div1);
				good.addEventListener("click",function(){
					axios.post('/like',{
						count:res.data[i].count,
						name:res.data[i].name
					}).then(res => {
						shower.innerHTML = "";
						help();
					}).catch(e => {
						console.log(e);
					})
				})
			}
		}).catch(e => {
			console.log(e);
		})
	}else{
		showlogin();
	}
}

function submit(){
	let file = document.getElementById("pick").files[0];
	let name = document.getElementById("name").value;
	let sex = document.querySelector("input[name = 'sex']:checked").value;
	let age = document.getElementById("age").value;
	let formData = new FormData();
	formData.append("name",name);
	formData.append("sex",sex);
	formData.append("age",age);
	formData.append("uploadFile",file,file.name);
	const config = {
		headers:{
			"Content-Type":"multipart/form-data;boundary=" + new Date().getTime()
		}
	};
	axios.post('/uploadinfo',formData,config).then(res => {
		if(res.data == 1){
			alert("报名成功");
		}else{
			alert("报名失败");
		}
	}).catch(e => {
		console.log(e);
	})
}

function login(){
	let login = document.querySelector(".login");
	let login1 = document.getElementById("login");
	let register = document.getElementById("register");
	let head_img = document.getElementById("head-img");
	let username = document.getElementById("username").value;
	let pwd = document.getElementById("pwd").value;
	
	axios.post('/login',{
		username:username,
		pwd:pwd
	}).then(res => {
		if(res.data.length == 1){
			document.cookie = `username=${res.data[0].username}`;
			document.cookie = `pwd=${res.data[0].pwd}`;
			alert("登录成功");
			login.style.display = "none";
			login1.style.display = "none";
			register.style.display = "none";
			head_img.style.display = "block";
		}else{
			alert("用户名或密码错误");
		}
	}).catch(e => {
		console.log(e);
	})
}

function register(){
	let register = document.querySelector(".register");
	let username = document.getElementById("rusername").value;
	let pwd = document.getElementById("rpwd").value; 
	
	axios.post('/userselect',{
		username:username
	}).then(res => {
		if(res.data.length == 0){
			add();
		}else{
			alert("用户名已存在")
		}
	}).catch(e => {
		console.log(e);
	})
	
	function add(){
		axios.post('/register',{
			username:username,
			pwd:pwd
		}).then(res => {
			if(res.data == 1){
				alert("注册成功");
				register.style.display = "none";
				
			}else{
				alert("注册失败");
			}
		}).catch(e => {
			console.log(e);
		})
	}
}

function close1(){
	let login = document.querySelector(".login");
	login.style.display = "none";
}

function close2(){
	let register = document.querySelector(".register");
	register.style.display = "none";
}


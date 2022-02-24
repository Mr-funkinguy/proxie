var r = document.documentElement;
if(localStorage.s_thm=="light"){
	r.style.setProperty("--title-root-shadow", "hsla(230,40%,50%,1)");
	r.style.setProperty("--accent-1", "#E8E8E8");
	r.style.setProperty("--accent-2", "#454545");
	r.style.setProperty("--accent-3", "gray");
	r.style.setProperty("--wk-top-gradient", "-webkit-linear-gradient(top, #B0B0B0 0%,#EBEBEB 30%,#EBEBEB 100%)");
	r.style.setProperty("--top-gradient", "linear-gradient(to bottom, #B0B0B0 0%,#EBEBEB 30%,#EBEBEB 100%)");
	r.style.setProperty("--accent-4", "#F7F7F7");
	r.style.setProperty("--accent-5", "rgb(30, 30, 30)");
	r.style.setProperty("--accent-6", "rgb(79, 102, 166)");
	r.style.setProperty("--accent-7", "rgb(0, 140, 255)");
	r.style.setProperty("--black", "#FFF");
	r.style.setProperty("--accent-8", "rgb(168, 168, 168)");
	r.style.setProperty("--accent-9", "rgb(100,100,100)");
	r.style.setProperty("--accent-10", "rgb(50,50,50)");
	r.style.setProperty("--accent-11", "#C10000");
} else {
	r.style.setProperty("--title-root-shadow", "hsla(230,40%,50%,1)");
	r.style.setProperty("--accent-1", "#111111");
	r.style.setProperty("--accent-2", "#454545");
	r.style.setProperty("--accent-3", "gray");
	r.style.setProperty("--wk-top-gradient", "-webkit-linear-gradient(top, #3d3d3d 0%,#181818 30%,#181818 100%)");
	r.style.setProperty("--top-gradient", "linear-gradient(to bottom, #3d3d3d 0%,#181818 30%,#181818 100%)");
	r.style.setProperty("--accent-4", "#000");
	r.style.setProperty("--accent-5", "rgb(228, 228, 228)");
	r.style.setProperty("--accent-6", "rgb(79, 102, 166)");
	r.style.setProperty("--accent-7", "rgb(0, 140, 255)");
	r.style.setProperty("--black", "#000");
	r.style.setProperty("--accent-8", "rgb(43, 43, 43)");
	r.style.setProperty("--accent-9", "rgb(100,100,100)");
	r.style.setProperty("--accent-10", "rgb(50,50,50)");
	r.style.setProperty("--accent-11", "#C10000");
}
/*
	--title-root-shadow: hsla(230,40%,50%,1);
	--accent-1: #111111;
	--accent-2: #454545;
	--accent-3: gray;
	--wk-top-gradient: -webkit-linear-gradient(top, #3d3d3d 0%,#181818 30%,#181818 100%);
	--top-gradient: linear-gradient(to bottom, #3d3d3d 0%,#181818 30%,#181818 100%);
	--accent-4: #000;
	--accent-5: rgb(228, 228, 228);
	--accent-6: rgb(79, 102, 166);
	--accent-7: rgb(0, 140, 255);
	--black: #000;
	--accent-8: rgb(43, 43, 43);
	--accent-9: rgb(100,100,100);
	--accent-10: rgb(50,50,50);
	--accent-11: #C10000;
*/
/*
generate by this snippet (written by me):
var st = `--title-root-shadow: hsla(230,40%,50%,1);
	--accent-1: #111111;
	--accent-2: #454545;
	--accent-3: gray;
	--wk-top-gradient: -webkit-linear-gradient(top, #3d3d3d 0%,#181818 30%,#181818 100%);
	--top-gradient: linear-gradient(to bottom, #3d3d3d 0%,#181818 30%,#181818 100%);
	--accent-4: #000;
	--accent-5: rgb(228, 228, 228);
	--accent-6: rgb(79, 102, 166);
	--accent-7: rgb(0, 140, 255);
	--black: #000;
	--accent-8: rgb(43, 43, 43);
	--accent-9: rgb(100,100,100);
	--accent-10: rgb(50,50,50);
	--accent-11: #C10000;`;
var b = st.split("\n");
var m = "";
for(var i in b){
  var k = b[i].split(": ")[0];
  k=k.replaceAll("	", "");
  var v = b[i].split(": ")[1];
  m=m+(`r.style.setProperty("${k}", "${v}");`)+"\n";
}
console.log(m)
*/
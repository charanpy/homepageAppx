document.querySelector("#ham").addEventListener("click",function(){
	console.log("hi");
	document.querySelector(".navbar").classList.add("new");
	console.log(document.querySelector(".nav_link"))
document.querySelector(".Appx-feauture").classList.toggle("none");
})

document.querySelector("#close").addEventListener("click",function(){
	console.log("hi");
	document.querySelector(".navbar").classList.remove("new");
})

// // 
$(document).ready(function() {
  $("#burger").on("click", function(){
  	$(this).toggleClass("active");
  	$("#navigation").toggleClass("active");
  });
});

// var burgerIcon = document.getElementById("burger");
// var burgerIcon = document.getElementById("navigation");

// burgerIcon.addEventListener("click", function(){
// 	console.log("click");
// 	burgerIcon.classList.toggle("active")
// 	navigation.classList.toggle("active")

// });

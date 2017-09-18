$(document).ready(function(){
$(".loginInput").hide();
$(".beginnerOrPro").hide();
$(".loginButton").on("click", function(event){
   	$(".newUserButton").hide();
   	$(".loginInput").show();
   	$(".newUserOrLogin").addClass("login");
   	$(".login").removeClass("newUserOrLogin");
   	$(".loginButton").addClass("newLoginButton");
   	$(".newLoginButton").removeClass("loginButton");
   	handleFormSubmit(event);
});


var username = $(".username");
var newLoginButton = $(".newLoginButton");
// $(newLoginButton).on("submit", handleFormSubmit);



function handleFormSubmit(event){

	event.preventDefault();

	if(!username.val().trim()){
		alert("Please fill out all the fields!");
		return;
	}
	var returningUser = {
		username: username.val().trim()
	}

	console.log(returningUser);
	submitPost(returningUser);
}

function submitPost(post){
		var expertRadio = document.getElementById("expert");
		var rookieRadio = document.getElementById("rookie");
		if (rookieRadio.checked) {
			console.log("rookie radio checked!");
			window.location.href = "/rookie-schedule?rookie_id=" + post.username;
		}
		if (expertRadio.checked) {
			console.log("expert radio checked!");
			window.location.href = "/expert-schedule?expert_id=" + post.username;
		}
		if (!expertRadio.checked && !rookieRadio.checked) {
			alert("Please select Rookie or Expert.")
		}

  }
})


// function newClickEvent(){
// 	$(".newLoginButton").on("click", function(event) {
// 		var username = $(".username").val();
// 		localStorage.setItem('username', username);
// 		var expertRadio = document.getElementById("expert");
// 		var rookieRadio = document.getElementById("rookie");
// 		if (rookieRadio.checked) {
// 			console.log("rookie radio checked!");
// 			$(".newLoginButton").attr("href", "rookie-schedule.html");
// 		}
// 		if (expertRadio.checked) {
// 			console.log("expert radio checked!");
// 			$(".newLoginButton").attr("href", "/expert-schedule.html?expert_id=username");
// 		}
// 		if (!expertRadio.checked && !rookieRadio.checked) {
// 			alert("Please select Rookie or Expert.")
// 		}
// 	});	
// };
$(".newUserButton").on("click", function(event){
	event.preventDefault();
   	$(".newUserButton").hide();
   	$(".loginButton").hide();
   	$(".beginnerOrPro").show();
});

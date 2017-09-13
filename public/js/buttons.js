$(".loginInput").hide();
$(".beginnerOrPro").hide();
$(".loginButton").on("click", function(event){
   	$(".newUserButton").hide();
   	$(".loginInput").show();
   	$(".newUserOrLogin").addClass("login");
   	$(".login").removeClass("newUserOrLogin");
   	$(".loginButton").addClass("newLoginButton");
   	var expertRadio = document.getElementById("expert");
	var rookieRadio = document.getElementById("rookie");
		
	if (rookieRadio.checked) {
		console.log("rookie radio checked!");
		$(".loginButton").attr("href", "user.html");
	}
	if (expertRadio.checked) {
		console.log("expert radio checked!");
		$(".loginButton").attr("href", "pro.html");
	}
});
$(".newUserButton").on("click", function(event){
	event.preventDefault();
   	$(".newUserButton").hide();
   	$(".loginButton").hide();
   	$(".beginnerOrPro").show();
});
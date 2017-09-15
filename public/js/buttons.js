$(".loginInput").hide();
$(".beginnerOrPro").hide();
$(".loginButton").on("click", function(event){
   	$(".newUserButton").hide();
   	$(".loginInput").show();
   	$(".newUserOrLogin").addClass("login");
   	$(".login").removeClass("newUserOrLogin");
   	$(".loginButton").addClass("newLoginButton");
   	$(".newLoginButton").removeClass("loginButton");
   	newClickEvent();
});
function newClickEvent(){
	$(".newLoginButton").on("click", function(event) {
		var username = $(".username").val();
		localStorage.setItem('username', username);
		var expertRadio = document.getElementById("expert");
		var rookieRadio = document.getElementById("rookie");
		if (rookieRadio.checked) {
			console.log("rookie radio checked!");
			$(".newLoginButton").attr("href", "rookie-schedule.html");
		}
		if (expertRadio.checked) {
			console.log("expert radio checked!");
			$(".newLoginButton").attr("href", "expert-schedule.html");
		}
		if (!expertRadio.checked && !rookieRadio.checked) {
			alert("Please select Rookie or Expert.")
		}
	});	
};
$(".newUserButton").on("click", function(event){
	event.preventDefault();
   	$(".newUserButton").hide();
   	$(".loginButton").hide();
   	$(".beginnerOrPro").show();
});

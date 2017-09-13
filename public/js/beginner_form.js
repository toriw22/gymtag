$("#submit").on("click", function(event){
    event.preventDefault();
    var newRookie =  {
      firstName: $(".firstNameField").val().trim(), 
      lastName: $(".lastNameField").val().trim(),
      userName: $(".userNameField").val().trim(),
      photo: $(".photoField").val().trim(),
      userType: "Rookie"
    };
      
    console.log(newRookie);
    
    $.post("/rookie", newRookie)

     .done(function(data) {
        console.log(data);

    });
      // $(".firstNameField").val("");
      // $(".lastNameField").val("");
      // $(".userNameField").val("");
      // $(".photoField").val("");
  });

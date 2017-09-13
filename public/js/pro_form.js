$("#submit").on("click", function(event){
    event.preventDefault();
    var newExpert =  {
      firstName: $(".firstNameField").val().trim(), 
      lastName: $(".lastNameField").val().trim(),
      userName: $(".userNameField").val().trim(),
      photo: $(".photoField").val().trim(),
      userType: "expert"
    };
      
    console.log(newExpert);
    
    $.post("/newUser", newExpert)

     .done(function(data) {
        console.log(data);

    });
      $(".firstNameField").val("");
      $(".lastNameField").val("");
      $(".userNameField").val("");
      $(".photoField").val("");
  });

$("#submit").on("click", function(event){
    event.preventDefault();
    var newExpert =  {
      firstName: $(".firstNameField").val().trim(), 
      lastName: $(".lastNameField").val().trim(),
      userName: $(".userNameField").val().trim(),
      photo: $(".photoField").val().trim(),
      userType: "Expert"
    };
      
    console.log(newExpert);
    
    $.post("/expert", newExpert)

     .done(function(data) {
        console.log(data);

    });
      $(".firstNameField").val("");
      $(".lastNameField").val("");
      $(".userNameField").val("");
      $(".photoField").val("");
  });
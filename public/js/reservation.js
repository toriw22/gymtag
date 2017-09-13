$("#submit").on("click", function(event){
    event.preventDefault();
    var newReservation =  {
      userName: $(".userNameField"),
      gym: $(".gymField").val().trim(), 
      month: $(".monthField").val().trim(),
      day: $(".dayField").val().trim(),
      am_pm: $(".am_pmField").val().trim(),
      hour: $(".hourField").val().trim()
    };
      
    console.log(newReservation);
    
    $.post("/setappointment", newReservation)

     .done(function(data) {
        console.log(data);

    });
      $(".userNameField").val("");
      $(".gymField").val("");
      $(".monthField").val("");
      $(".dayField").val("");
      $(".am_pmField").val("");
      $(".hourField").val("");
  });


$(document).ready(function() {

    
    var resContainer = $(".reservation-container");

    var reservations;
    
    var url = window.location.search;
    var rookieId;
    if (url.indexOf("?rookie_id=") !== -1) {
      rookieId = url.split("=")[1];
      getReservations(rookieId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      getReservations();
    }

    function getReservations(rookie){
        console.log("rookie:" + rookie);
        rookieId = rookie || "";
        console.log("rookieId:" + rookie);
        if(rookieId){
            rookieId = "/?rookie_id=" + rookieId;
        }
        $.get("/expert" + rookieId, function(data){
            console.log("Reservations", data);
            reservations = data;
            if (!reservations || !reservations.length) {
                displayEmpty(rookie);
            }
            else {
            initializeRows();
            }
        });
    }

    // getReservations();

    // function getReservations(){
    //     $.get("/expert", function(data){
    //         console.log("Reservations", data);
    //         reservations = data;
    //         // if (!reservations || !reservations.length) {
    //         //     displayEmpty(author);
    //         // }
    //         // else {
    //         initializeRows();
    //         // }
    //     })
    // }

    function initializeRows(){
        resContainer.empty();
        var resToAdd = [];
        for(var i = 0; i < reservations.length; i ++){
            resToAdd.push(createNewRow(reservations[i]));
        }
        resContainer.append(resToAdd);
    }

    function createNewRow(reservation){
        var newResPanel = $("<div>");
        newResPanel.addClass("panel panel-default");
        var newResPanelHeading = $("<div>");
        newResPanelHeading.addClass("panel-heading");
        var newResTitle = $("<h2>");
        var newResDate = $("<small>");
        var newResUser = $("<h5>");
        newResUser.text("Train With Expert: " + reservation.firstName + " " + reservation.lastName);
        newResUser.css({
            float: "right",
            color: "blue",
            "margin-top":
            "-10px"
        });

        var newResPanelBody = $("<div>");
        newResPanelBody.addClass("panel-body");
        var newResBody = $("<p>");
        newResTitle.text(reservation.userName + " ");
        newResBody.text(reservation.userType);
        newResDate.text(reservation.gym);
        newResTitle.append(newResDate);

        newResPanelHeading.append(newResTitle);
        newResPanelHeading.append(newResUser);
        newResPanelBody.append(newResBody);
        newResPanel.append(newResPanelHeading);
        newResPanel.append(newResPanelBody);
        newResPanel.data("reservation", reservation);
        return newResPanel;
    }

    // This function displays a messgae when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Rookie #" + id;
    }
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    resContainer.append(messageh2);
  }

})
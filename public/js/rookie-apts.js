$(document).ready(function() {

    var resContainer = $(".reservation-container");
    var appointmentContainer = $(".myRes-container");
    var reservations;
    var appointments;

    getOptions();
    getAppointments();

    function getOptions(){
        $.get("/expert", function(data){
            reservations = data;

            showOptions();

        })
    };

    function showOptions(){
        resContainer.empty();
        var resToAdd = [];
        for(var i = 0; i < reservations.length; i ++){
            resToAdd.push(createNewOption(reservations[i]));
        }
        resContainer.append(resToAdd);
    };

    function createNewOption(reservation){

        var newCardDiv = $("<div class='card text-center' style='width: 20rem;'>");
        var newCardImg = $("<img class='card-img-top' src='https://socialgeek.co/wp-content/uploads/2017/08/21de593bf074d519fba69fe9dcc16b41-300x180.jpg' alt='Card image cap'>");
        var nextNewDiv = $("<div class='card-body'>");
        var cardTitle = $("<h4 class='card-title'>").text(reservation.firstName + " " + reservation.lastName);
        var newResBody = $("<p class='card-text'>").text(reservation.gym + " " + reservation.userType);
        var button = $("<a href='#' class='btn btn-primary'>").text("Reserve");

        $(".reservation-container").append(newCardDiv);
        newCardDiv.append(newCardImg);
        newCardDiv.append(nextNewDiv);
        nextNewDiv.append(cardTitle);
        nextNewDiv.append(newResBody);
        nextNewDiv.append(button);

        return newCardDiv;
    };

    function getAppointments(){
        $.get("/appointments", function(data){
            console.log("appointments", data);
            appointments = data;

            showAppointments();

        })
    };

    function showAppointments(){
        appointmentContainer.empty();
        var resToAdd = [];
        for(var i = 0; i < appointments.length; i ++){
            resToAdd.push(createNewAppointment(appointments[i]));
        }
        appointmentContainer.append(resToAdd);
    };

    function createNewAppointment(appointment){

        var newCardDiv = $("<div class='card text-center' style='width: 20rem;'>");
        var newCardImg = $("<img class='card-img-top' src='https://socialgeek.co/wp-content/uploads/2017/08/21de593bf074d519fba69fe9dcc16b41-300x180.jpg' alt='Card image cap'>");
        var nextNewDiv = $("<div class='card-body'>");
        var cardTitle = $("<h4 class='card-title'>").text(appointment.firstName + " " + appointment.lastName);
        var newResBody = $("<p class='card-text'>").text(appointment.gym + " " + appointment.userType);
        var button = $("<a href='#' class='btn btn-primary'>").text("Delete");

        $(".myRes-container").append(newCardDiv);
        newCardDiv.append(newCardImg);
        newCardDiv.append(nextNewDiv);
        nextNewDiv.append(cardTitle);
        nextNewDiv.append(newResBody);
        nextNewDiv.append(button);

        return newCardDiv;
    };    
});

// $(document).ready(function() {
// var myResContainer = $(".myResContainer");
// var rookieResForm = $(".rookieResForm");

// $(rookieResForm).on("submit", getPersonalReservations);

// var reservations;

// var url = window.location.search;
// var rookieId;
// if (url.indexOf("?rookie_id=") !== -1) {
//   rookieId = url.split("=")[1];
// }

// function getPersonalReservations(rookie){
//     console.log("rookie:" + rookie);
//     rookieId = rookie || "";
//     console.log("rookieId:" + rookie);
//     if(rookieId){
//         rookieId = "/?rookie_id=" + rookieId;
//     }
//     $.get("/setappointment" + rookieId, function(data){
//         console.log("Reservations", data);
//         reservations = data;
//         if (!reservations || !reservations.length) {
//             displayEmpty(rookie);
//         }
//         else {
//         initializeScheduledRows();
//         }
//     });
// }

// function initializeScheduledRows(){
//     myResContainer.empty();
//     var resToAdd = [];
//     for(var i = 0; i < reservations.length; i ++){
//         resToAdd.push(createNewScheduledRow(reservations[i]));
//     }
//     myResContainer.append(resToAdd);
// }

// function createNewScheduledRow(reservation){
//     var newResPanel = $("<div>");
//     newResPanel.addClass("panel panel-default");
//     var newResPanelHeading = $("<div>");
//     newResPanelHeading.addClass("panel-heading");
//     var newResTitle = $("<h2>");
//     var newResDate = $("<small>");
//     var newResUser = $("<h5>");
//     newResUser.text("Train With Expert: " + reservation.firstName + " " + reservation.lastName);
//     newResUser.css({
//         float: "right",
//         color: "blue",
//         "margin-top":
//         "-10px"
//     });

//     var newResPanelBody = $("<div>");
//     newResPanelBody.addClass("panel-body");
//     var newResBody = $("<p>");
//     newResTitle.text(reservation.userName + " ");
//     newResBody.text(reservation.userType);
//     newResDate.text(reservation.gym);
//     newResTitle.append(newResDate);

//     newResPanelHeading.append(newResTitle);
//     newResPanelHeading.append(newResUser);
//     newResPanelBody.append(newResBody);
//     newResPanel.append(newResPanelHeading);
//     newResPanel.append(newResPanelBody);
//     newResPanel.data("reservation", reservation);
//     return newResPanel;
// }

//     // This function displays a messgae when there are no posts
//     function displayEmpty(id) {
//         var query = window.location.search;
//         var partial = "";
//         if (id) {
//           partial = " for Rookie #" + id;
//         }
//         resContainer.empty();
//         var messageh2 = $("<h2>");
//         messageh2.css({ "text-align": "center", "margin-top": "50px" });
//         messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
//         "'>here</a> in order to get started.");
//         resContainer.append(messageh2);
//       }
// })

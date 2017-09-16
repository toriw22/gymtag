$(document).ready(function() {
    
    
    var resContainer = $(".reservation-container");

    var reservations;
    
    var url = window.location.search;
    var expertId;
    if (url.indexOf("?expert_id=") !== -1 && url.indexOf("&gym_id=") !== -1) {
    expertId = url.split("=")[1].split("&")[0];
    gymId = url.split("=")[2];
    console.log(expertId);
    console.log(gymId);
    getReservations(expertId, gymId);

    }
    // If there's no authorId we just get all posts as usual
    else {
    getReservations();
    }

    function getReservations(expert, gym){
        console.log("expert:" + expert);
        console.log("gym:" + gym);
        expertId = expert || "";
        gymId = gym || "";
        console.log("expertId:" + expertId);
        console.log("gymId:" + gymId);
        // if(rookieId && gymId){
        //     rookieId = "?rookie_id=" + rookieId;
        //     gymId = "&gym_id=" + gymId;
        // }
        $.get("/rookie/" + expertId+ "/"+ gymId , function(data){
            console.log("Reservations", data);
            reservations = data;
            if (!reservations || !reservations.length) {
                displayEmpty(expert);
            }
            else {
            initializeRows();
            }
        });
    }

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

        var editBtn = $("<button>");
        editBtn.text("RESERVE");
        editBtn.addClass("edit btn btn-info");

        var newResTitle = $("<h2>");
        var newResDate = $("<small>");
        var newResUser = $("<h5>");
        newResUser.text("Train With Rookie: " + reservation.firstName + " " + reservation.lastName);
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
        newResPanelHeading.append(editBtn);
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
    partial = " for Expert #" + id;
    }
    resContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    resContainer.append(messageh2);
}
    
})
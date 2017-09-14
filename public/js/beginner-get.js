$(document).ready(function() {

    var resContainer = $(".reservation-container");

    var reservations;

    getReservations();

    function getReservations(){
        $.get("/rookie", function(data){
            console.log("Reservations", data);
            reservations = data;
            // if (!reservations || !reservations.length) {
            //     displayEmpty(author);
            // }
            // else {
            initializeRows();
            // }
        })
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
        var newResTitle = $("<h2>");
        var newResDate = $("<small>");
        var newResUser = $("<h5>");
        newResUser.text("Reserved By Rookie: " + reservation.firstName + " " + reservation.lastName);
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

})
$(document).ready(function() {
  // Getting references to the name inout and member container, as well as the table body
  var memberInput = $("#member-fname").val().trim();
  var memberLname = $("#member-lname").val().trim();
  var memberPhoto = $("#member-photo").val().trim();
  var memberList = $("tbody");
  var memberContainer = $(".member-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an member
  $(document).on("submit", "#member-form", handleMemberFormSubmit);

  // Getting the intiial list of members
  getMembers();

  // A function to handle what happens when the form is submitted to create a new members
  function handleMemberFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!memberInput ||!memberLname ||!memeberPhoto) {
      return;
    }
    // Calling the upsertMember function and passing in the value of the name input
    upsertMember({
      firstName: memberInput,
      lastName: memberLname,
      photo: memberPhoto
    });
  }

  // A function for creating an member. Calls getMembers upon completion
  function upsertMember(memberData) {
    $.post("/api/user", memberData)
      .then(getMembers);
  }


  // Function for retrieving members and getting them ready to be rendered to the page
  function getMembers() {
    $.get("/api/member", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createMemberRow(data[i]));
      }
      renderMemberList(rowsToAdd);
      memberInput.val("");
    });
  }

  // A function for rendering the list of members to the page
  function renderMemberList(rows) {
    memberList.children().not(":last").remove();
    memberContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      memberList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no members
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.html("You must create an Member Login before you can create a Post.");
    memberContainer.append(alertDiv);
  }
});

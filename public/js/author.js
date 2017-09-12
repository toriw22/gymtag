$(document).ready(function() {
  // Getting references to the name inout and member container, as well as the table body
  var memberInput = $("#member-name");
  var memberList = $("tbody");
  var memberContainer = $(".member-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an member
  $(document).on("submit", "#member-form", handleMemberFormSubmit);
  $(document).on("click", ".delete-member", handleDeleteButtonPress);

  // Getting the intiial list of members
  getMembers();

  // A function to handle what happens when the form is submitted to create a new members
  function handleMemberFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!memberInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertMember function and passing in the value of the name input
    upsertMember({
      name: memberInput
        .val()
        .trim()
    });
  }

  // A function for creating an member. Calls getMembers upon completion
  function upsertMember(memberData) {
    $.post("/api/member", memberData)
      .then(getMembers);
  }

  // Function for creating a new list row for members
  function createMemberRow(memberData) {
    var newTr = $("<tr>");
    newTr.data("member", memberData);
    newTr.append("<td>" + member.name + "</td>");
    newTr.append("<td> " + memberData.Posts.length + "</td>");
    newTr.append("<td><a href='/blog?member_id=" + memberData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?member_id=" + memberData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-member'>Delete Member</a></td>");
    return newTr;
  }

  // Function for retrieving members and getting them ready to be rendered to the page
  function beginnerWorkout() {
    $.get("/api/beginner", function(data) {
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
      authorList.prepend(rows);
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

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("member");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/member/" + id
    })
    .done(getMembers);
  }
});

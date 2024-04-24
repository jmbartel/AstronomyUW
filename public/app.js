// -------------------------------------------------------- AUTHENTICATION --------------------------------------------------------  //
// global variables

let signinbtn = document.querySelector("#signin"); // good
let signin_modal = document.querySelector("#signinmodal"); //good
let signin_modalbg = document.querySelector("#signinmodal_bg"); //good
const valid_extenstions = [".jpg", "jpeg", ".png"];

function configure_message_bar(message) {
  // show a confirmation message for the user

  // show the message bar for only 2 seconds and then hide it back

  r_e("message_bar").classList.remove("is-hidden");

  r_e("message_bar").innerHTML = `${message}!`;

  // hide the message bar after 2 seconds

  setTimeout(() => {
    r_e("message_bar").classList.add("is-hidden");

    // clear the message bar
    r_e("message_bar").innerHTML = "";
  }, 2000);
}

function configure_nav_bar(user) {
  let signedinlinks = document.querySelectorAll(".signedin");
  let signedoutlinks = document.querySelectorAll(".signedout");

  // check if user already exists

  if (user) {
    // show all elements with the class signedin
    // AND hide all elements with the class signedout

    signedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });

    signedoutlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });
  } else {
    // no user

    // hide all elements with the class signedin
    // AND show all elements with the class signedout

    signedinlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });

    signedoutlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });
  }
}

// sign-in modal link
signinbtn.addEventListener("click", () => {
  signin_modal.classList.add("is-active");
});

signin_modalbg.addEventListener("click", () => {
  signin_modal.classList.remove("is-active");
});

r_e("signin_form").addEventListener("submit", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();

  // get the email/password from the form

  let email = r_e("email_").value;
  let password = r_e("password_").value;

  auth.signInWithEmailAndPassword(email, password).then((user) => {
    // clear the form
    // reset()
    hideModal_signin();
    r_e("signin_form").reset();

    // close the modal
    // remove the is-active class from the modal

    hideModal_signin();
  });
});

// sign out

r_e("signout").addEventListener("click", () => {
  auth.signOut().then(() => {});
});

//newest
let UserEmail = "";
auth.onAuthStateChanged((user) => {
  // check if a user exists
  if (user) {
    // configure the message bar
    UserEmail = user.email;

    // configure nav bar
    configure_nav_bar(user);

    // Displaying add-new-post button
    document.querySelector("#open_photos_modal").classList.remove("is-hidden");

    // Displaying add-resources-button
    document
      .querySelector("#open_resource_modal")
      .classList.remove("is-hidden");
  } else {
    // no user
    UserEmail = "";
    configure_nav_bar();

    // Hiding add-new-post button
    document.querySelector("#open_photos_modal").classList.add("is-hidden");

    // Hiding add-resources-button
    document.querySelector("#open_resource_modal").classList.add("is-hidden");
  }
});

function r_e(id) {
  return document.querySelector(`#${id}`);
}

let loginmodal = r_e("signinmodal");
let usersignin = r_e("signin");
let signinmodal_bg = r_e("signinmodal_bg");

function showmodal_signin() {
  // add the is-active class for the modal
  loginmodal.classList.add("is-active");
}
// show the modal
usersignin.addEventListener("click", showmodal_signin);

// hide the modal
function hideModal_signin() {
  // once a modal background is clicked, remove 'is-active' from the modal
  signinmodal.classList.remove("is-active");
}

// attach a click event on the modal background
signinmodal_bg.addEventListener("click", hideModal_signin);

// Cancel sign in
const cancelsignin = document.getElementById("cancelsignin");
cancelsignin.addEventListener("click", hideModal_signin);

// -------------------------------------------------------- SINGLE-PAGE-APP --------------------------------------------------------  //
// Selecting Home Page
document.querySelector("#home_tab").addEventListener("click", () => {
  document.querySelector("#home_page").classList.remove("is-hidden");
  document.querySelector("#join_page").classList.add("is-hidden");
  document.querySelector("#board_page").classList.add("is-hidden");
  document.querySelector("#history_page").classList.add("is-hidden");
  document.querySelector("#resources_page").classList.add("is-hidden");
  document.querySelector("#events_page").classList.add("is-hidden");
});

// Selecting Join Page
document.querySelector("#join_tab").addEventListener("click", () => {
  document.querySelector("#join_page").classList.remove("is-hidden");
  document.querySelector("#home_page").classList.add("is-hidden");
  document.querySelector("#board_page").classList.add("is-hidden");
  document.querySelector("#history_page").classList.add("is-hidden");
  document.querySelector("#resources_page").classList.add("is-hidden");
  document.querySelector("#events_page").classList.add("is-hidden");
});

// Selecting Board page
document.querySelector("#board_tab").addEventListener("click", () => {
  document.querySelector("#board_page").classList.remove("is-hidden");
  document.querySelector("#home_page").classList.add("is-hidden");
  document.querySelector("#join_page").classList.add("is-hidden");
  document.querySelector("#history_page").classList.add("is-hidden");
  document.querySelector("#resources_page").classList.add("is-hidden");
  document.querySelector("#events_page").classList.add("is-hidden");
});

// Selecting Events Page
document.querySelector("#events_tab").addEventListener("click", () => {
  document.querySelector("#events_page").classList.remove("is-hidden");
  document.querySelector("#home_page").classList.add("is-hidden");
  document.querySelector("#history_page").classList.add("is-hidden");
  document.querySelector("#resources_page").classList.add("is-hidden");
  document.querySelector("#join_page").classList.add("is-hidden");
  document.querySelector("#board_page").classList.add("is-hidden");
});

// Selecting History Page
document.querySelector("#history_tab").addEventListener("click", () => {
  document.querySelector("#history_page").classList.remove("is-hidden");
  document.querySelector("#home_page").classList.add("is-hidden");
  document.querySelector("#events_page").classList.add("is-hidden");
  document.querySelector("#resources_page").classList.add("is-hidden");
  document.querySelector("#join_page").classList.add("is-hidden");
  document.querySelector("#board_page").classList.add("is-hidden");
});

// Selecting Resources Page
document.querySelector("#resources_tab").addEventListener("click", () => {
  document.querySelector("#resources_page").classList.remove("is-hidden");
  document.querySelector("#home_page").classList.add("is-hidden");
  document.querySelector("#events_page").classList.add("is-hidden");
  document.querySelector("#history_page").classList.add("is-hidden");
  document.querySelector("#join_page").classList.add("is-hidden");
  document.querySelector("#board_page").classList.add("is-hidden");
});

// -------------------------------------------------------- OFFICER DATA --------------------------------------------------------  //

// Add officers through add officer button
let officerNameInput = document.getElementById('officer_name');
let officerTitleInput = document.getElementById('officer_title');
let officerYearInput = document.getElementById('officer_year');
let officerMajorInput = document.getElementById('officer_major');
let officerBioInput = document.getElementById('officer_bio');
let officerImageInput = document.getElementById('officer_image');
let addOfficerButton = document.getElementById('addOfficer');

// Function to add officer data to Firestore
function addOfficerToFirestore() {
  let officerName = officerNameInput.value;
  let officerTitle = officerTitleInput.value;
  let officerYear = officerYearInput.value;
  let officerMajor = officerMajorInput.value;
  let officerBio = officerBioInput.value;
  let officerImage = officerImageInput.value;

  // Validate the input fields
  if (officerName.trim() === '' || officerTitle.trim() === '') {
    alert('Please enter the officer name and title.');
    return;
  }

  // Get a reference to the Firestore collection
  let officersCollection = firebase.firestore().collection('Board Members');

  // Add the officer data to Firestore
  officersCollection.add({
    name: officerName,
    title: officerTitle,
    year: officerYear,
    major: officerMajor,
    bio: officerBio,
    image: officerImage,
  })
  .then(function(docRef) {
    console.log('Officer added to Firestore with ID:', docRef.id);
    // Clear the input fields after successfully adding the officer
    officerNameInput.value = '';
    officerTitleInput.value = '';
    officerYearInput.value = '';
    officerMajorInput.value = '';
    officerBioInput.value = '';
    officerImage.value= '';

    alert('Officer added successfully!');

    
    fetchOfficersFromFirestore();
  })
  .catch(function(error) {
    console.error('Error adding officer to Firestore:', error);
  });
}

// Add click event listener to the "Add Officer" button
addOfficerButton.addEventListener('click', addOfficerToFirestore);

// function for rendering cards
function renderOfficerCards(officersArray) {
  let officersContainer = document.getElementById("officers-container");
  officersContainer.innerHTML = '';
  officersArray.forEach((officer) => {
    console.log(officer.image)
    const card = document.createElement("div");
    card.className = "officer-card columns";
    card.innerHTML = `
    <div class="column is-one-third">
    <figure class="image">
      <img class="officer-image" src="${officer.image}" alt="${officer.name}">
    </figure>
  </div>
  <div class="officer-info column">
    <div class="officer-header">
      <h2 class="title is-4 has-text-link-dark is-bold">${officer.name}</h2>
      <h3 class="subtitle is-5 has-text-link">${officer.title}</h3>
    </div>
    <div class="officer-details">
      <p><strong class="has-text-info-dark">Year:</strong> ${officer.year}</p>
      <p><strong class="has-text-info-dark">Major:</strong> ${officer.major}</p>
      <p><strong class="has-text-info-dark">Bio:</strong>${officer.bio}</p>
    </div>
    <div class="officer-actions">
      <button class="button is-info update-officer" id="${officer.id}">Update</button>
      <button class="button is-info delete_button" id="${officer.id}">Delete</button>
    </div>
  </div>
    `;
    officersContainer.appendChild(card);
  });
    // Add event listener to the delete buttons
    let deleteButtons = document.querySelectorAll('.delete_button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', deleteOfficer);
    });

    let updateButtons = document.querySelectorAll('.update-officer');
    updateButtons.forEach((button) => {
    button.addEventListener('click', openUpdateModal);
  });
  }

// Function to fetch officer data from Firestore and convert it to an array
function fetchOfficersFromFirestore() {
  // Get a reference to the Firestore collection where the officer data is stored
  let officersCollection = firebase.firestore().collection('Board Members');

  // Fetch the officer data from Firestore
  officersCollection.get()
    .then(function(querySnapshot) {
      let officersArray = [];

      // Iterate through each document in the collection
      querySnapshot.forEach(function(doc) {
        // Get the officer data from the document
        let officerData = doc.data();

        // Add the officer data to the array
        officersArray.push({
          id: doc.id,
          name: officerData.name,
          title: officerData.title,
          year: officerData.year,
          major: officerData.major,
          bio: officerData.bio,
          image: officerData.image,
        });
      });

      renderOfficerCards(officersArray);
    })
    .catch(function(error) {
      console.error('Error fetching officers from Firestore:', error);
    });
}

// Call the function to fetch officers from Firestore
fetchOfficersFromFirestore();

function deleteOfficer(event) {
  let officerId = event.target.getAttribute('id');

  // Delete the officer from Firestore
  firebase.firestore().collection('Board Members').doc(officerId).delete()
    .then(() => {
      // alert('Officer deleted successfully');
      // Refresh the officer cards after deletion
      fetchOfficersFromFirestore();
    })
    .catch((error) => {
      console.error('Error deleting officer:', error);
    });
}

// UpdateModal function
let currentOfficerId = null;

function openUpdateModal(event) {
  const officerId = event.target.getAttribute('id');

  if (officerId) {
    currentOfficerId = officerId;

    firebase.firestore().collection('Board Members').doc(officerId).get()
      .then((doc) => {
        if (doc.exists) {
          const officer = doc.data();
          document.getElementById('updateOfficerName').value = officer.name;
          document.getElementById('updateOfficerTitle').value = officer.title;
          document.getElementById('updateOfficerYear').value = officer.year;
          document.getElementById('updateOfficerMajor').value = officer.major;
          document.getElementById('updateOfficerBio').value = officer.bio;
          document.getElementById('updateOfficerImage').value = officer.image;

          const modal = document.getElementById('updateOfficerModal');
          modal.classList.add('is-active');
        } else {
          console.log('Officer not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching officer data:', error);
      });
  } else {
    console.error('Officer ID is empty');
  }
}

// save update Officer function
function saveUpdateOfficer() {
  let officerId = currentOfficerId;

  let updatedOfficer = {
    name: document.getElementById('updateOfficerName').value,
    title: document.getElementById('updateOfficerTitle').value,
    year: document.getElementById('updateOfficerYear').value,
    major: document.getElementById('updateOfficerMajor').value,
    bio: document.getElementById('updateOfficerBio').value,
    image: document.getElementById('updateOfficerImage').value
  };

  firebase.firestore().collection('Board Members').doc(officerId).update(updatedOfficer)
    .then(() => {
      console.log('Officer updated successfully');
      closeUpdateModal();
      fetchOfficersFromFirestore();
    })
    .catch((error) => {
      console.error('Error updating officer:', error);
    });
}

// close update modal
function closeUpdateModal() {
  let modal = document.getElementById('updateOfficerModal');
  modal.classList.remove('is-active');
}

// add event listeners for modals
document.getElementById('saveUpdateOfficer').addEventListener('click', saveUpdateOfficer);
document.getElementById('cancelUpdateOfficer').addEventListener('click', closeUpdateModal);
document.getElementById('closeUpdateModal').addEventListener('click', closeUpdateModal);


// -------------------------------------------Calendar Page-------------------------------------------////

// Define an array to store events
let events = [];

//store event input fields and reminder list
let eventDateInput = document.getElementById("eventDate");
let eventTitleInput = document.getElementById("eventName");
let eventDescriptionInput = document.getElementById("eventDescription");
let eventRsvpInput = document.getElementById("rsvpLink");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// Functions to add events
function addEventToFirestore(event) {
  let db = firebase.firestore();
  let eventData = {
    date: event.date,
    title: event.title,
    description: event.description,
    rsvplink: event.rsvplink,
  };

  db.collection("events")
    .add(eventData)
    .then(function (docRef) {
      console.log("Event added with ID: ", docRef.id);
      event.firestoreId = docRef.id;
    })
    .catch(function (error) {
      console.error("error adding event: ", error);
    });
}
function addEvent() {
  let dateInput = eventDateInput.value; // Get the date string from the input field
  let dateParts = dateInput.split("-"); // Split the date string into parts
  // Construct a date object in the local time zone
  let date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  // Extract other event details
  let title = eventTitleInput.value;
  let description = eventDescriptionInput.value;
  let rsvplink = eventRsvpInput.value;
  if (title && date && !isNaN(date.getTime())) {
    let eventId = eventIdCounter++;
    let event = {
      id: eventId,
      date: date,
      title: title,
      description: description,
      rsvplink: rsvplink,
    };
    addEventToFirestore(event);
    events.push(event);

    showCalendar(currentMonth, currentYear);
    eventDateInput.value = "";
    eventTitleInput.value = "";
    eventDescriptionInput.value = "";
    eventRsvpInput.value = "";
    displayReminders();
  } else {
    alert("Please enter a valid date.");
  }
}
//Functions to delete events (locally and from database)
function deleteEventFromFirestore(event) {
  let db = firebase.firestore();

  db.collection("events")
    .doc(event.firestoreId)
    .delete()
    .then(function () {
      console.log("Event deleted from Firestore");
    })
    .catch(function (error) {
      console.error("Error deleting from Firestore: ", error);
    });
}

function deleteEvent(eventId) {
 let db = firebase.firestore();

  db.collection("events")
    .doc(eventId)
    .delete()
    .then(function () {
      console.log("Event deleted from Firestore");
      // Find the index of the event with the given ID
      let eventIndex = events.findIndex((event) => event.id === eventId);

      if (eventIndex !== -1) {
        // Remove the event from the events array
        let deletedEvent = events.splice(eventIndex, 1)[0];
        deleteEventFromFirestore(deletedEvent);

        showCalendar(currentMonth, currentYear);
        displayReminders();
      }
    })
    .catch(function (error) {
      console.error("Error deleting event from Firestore: ", error);
    });
}

// Function to display reminders
function displayReminders() {
  reminderList.innerHTML = "";
  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let eventDate = new Date(event.date);
    // Adjust the month comparison to match the zero-based index
    if (
      eventDate.getMonth() + 1 === currentMonth + 1 && // Adding 1 to currentMonth to match the zero-based index
      eventDate.getFullYear() === currentYear
    ) {
      let listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${event.title}</strong> - 
            ${event.description} on 
            ${eventDate.toLocaleDateString()} <a href="${
        event.rsvplink
      }" target="_blank">RSVP here</a>`;

     // Add a delete button for each reminder item
     let deleteButton = document.createElement("button");
     deleteButton.className = "button is-danger delete-event";
     deleteButton.textContent = "Delete";
     deleteButton.onclick = function () {
       deleteEvent(event.id);
     };

     listItem.appendChild(deleteButton);
     reminderList.appendChild(listItem);
   }
 }
}

// Function to generate a range of
// years for the year select input
function generate_year_range(start, end) {
 let years = "";
 for (let year = start; year <= end; year++) {
   years += "<option value='" + year + "'>" + year + "</option>";
 }
 return years;
}

// Initialize date-related letiables
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

let calendar = document.getElementById("calendar");

let months = [
 "January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December",
];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

$dataHead = "<tr>";
for (dhead in days) {
 $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

// Function to navigate to the next month
function next() {
 currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
 currentMonth = (currentMonth + 1) % 12;
 showCalendar(currentMonth, currentYear);
}

// Function to navigate to the previous month
function previous() {
 currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
 currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
 showCalendar(currentMonth, currentYear);
}

// Adjusted Function to jump to a specific month and year
function jump() {
 currentYear = parseInt(document.getElementById("year").value);
 currentMonth = parseInt(document.getElementById("month").value);
 showCalendar(currentMonth, currentYear);
}
// Adjusted Function to display the calendar
function showCalendar(month, year) {
 let firstDay = new Date(year, month, 1).getDay(); // Adjusted to get the correct first day of the week
 let tbl = document.getElementById("calendar-body");
 tbl.innerHTML = "";
 let monthAndYear = document.getElementById("monthAndYear");
 monthAndYear.innerHTML = months[month] + " " + year;

 let date = 1;
 for (let i = 0; i < 6; i++) {
   let row = document.createElement("tr");
   for (let j = 0; j < 7; j++) {
     if (i === 0 && j < firstDay) {
       let cell = document.createElement("td");
       cell.innerHTML = "";
       row.appendChild(cell);
     } else if (date > daysInMonth(month, year)) {
       break;
     } else {
       let cell = document.createElement("td");
       cell.setAttribute("data-date", date);
       cell.setAttribute("data-month", month + 1);
       cell.setAttribute("data-year", year);
       cell.setAttribute("data-month_name", months[month]);
       cell.className = "date-picker";
       cell.innerHTML = "<span>" + date + "</span>";

       if (
         date === today.getDate() &&
         year === today.getFullYear() &&
         month === today.getMonth()
       ) {
         cell.className = "date-picker selected";
       }

       // Check if there are events on this date
       if (hasEventOnDate(date, month, year)) {
         cell.classList.add("event-marker");
         cell.appendChild(createEventTooltip(date, month, year));
       }

       row.appendChild(cell);
       date++;
     }
   }
   tbl.appendChild(row);
 }

 displayReminders();
}

// Function to create an event tooltip
// event tooltip is on the day (number-1)---> NEED TO FIX
function createEventTooltip(date, month, year) {
 let tooltip = document.createElement("div");
 tooltip.classList.add(
   "box",
   "event-tooltip",
   "has-background-link-light",
   "has-text-black"
 );

 let eventsOnDate = getEventsOnDate(date, month, year);
 for (let i = 0; i < eventsOnDate.length; i++) {
   let event = eventsOnDate[i];
   let eventDate = new Date(event.date);
   let eventText = `<strong>${event.title}</strong> - ${
     event.description
   } on ${eventDate.toLocaleDateString()}`;
   let eventElement = document.createElement("p");
   eventElement.innerHTML = eventText;
   tooltip.appendChild(eventElement);
 }

 return tooltip;
}
// Function to get events on a specific date
function getEventsOnDate(date, month, year) {
 return events.filter(function (event) {
   let eventDate = new Date(event.date);
   return (
     eventDate.getDate() === date &&
     eventDate.getMonth() === month &&
     eventDate.getFullYear() === year
   );
 });
}

// Function to check if there are events on a specific date
function hasEventOnDate(date, month, year) {
 return getEventsOnDate(date, month, year).length > 0;
}

// Function to get the number of days in a month
function daysInMonth(iMonth, iYear) {
 return 32 - new Date(iYear, iMonth, 32).getDate();
}

// Call the showCalendar function initially to display the calendar
showCalendar(2, 2024);

// display events already in firebase
function loadEventsFromFirestore() {
 let db = firebase.firestore();

  db.collection("events")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let event = doc.data();
        event.id = doc.id;
        event.date = event.date.toDate(); // Convert Firestore Timestamp to JavaScript Date
        events.push(event);
      });
      showCalendar(currentMonth, currentYear);
      displayReminders();
    })
    .catch(function (error) {
      console.error("Error loading events from Firestore: ", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadEventsFromFirestore();
});

//admin

// --------------------------------------------------------  HISTORY PAGE --------------------------------------------------------  //
// Displaying and Hiding "Make New Post" Form //
let open_post_modal = document.querySelector("#open_photos_modal");
let post_modal = document.querySelector("#add_post_modal");
let add_post_modal_btn = document.querySelector("#submit_post_btn");
let cancel_post_addition = document.querySelector("#cancel_new_post");
let post_title_field = document.querySelector("#post_title_field");
let photo_description_field = document.querySelector(
  "#photo_description_field"
);
let photo_date_field = document.querySelector("#photo_date_field");
let new_photo = document.querySelector("#photo_image_upload");
let add_post_error_message = document.querySelector(
  "#add_post_form_error_message"
);
let new_post_submit_btn = document.querySelector("#submit_post_btn");

// Resetting all of the fields in the form
function reset_new_post_form() {
  post_title_field.value = "";
  photo_description_field.value = "";
  photo_date_field.value = "";
  new_photo.value = "";
  add_post_error_message.innerHTML = "";
}

// Open form
open_post_modal.addEventListener("click", () => {
  post_modal.classList.add("is-active");
});

// Close form and reset fields
cancel_post_addition.addEventListener("click", () => {
  post_modal.classList.remove("is-active");
  reset_new_post_form();
});

// Checking whether or not information is valid prior to being entered into database //
// If valid --> Enter information into database and update page
// If invalid --> Display error message (They will try again)

new_post_submit_btn.addEventListener("click", () => {
  add_post_error_message.innerHTML = "";
  let new_photo_curr_extension = new_photo.value.substr(
    new_photo.value.length - 4,
    new_photo.value.length
  );

  if (
    post_title_field.value == "" ||
    photo_description_field.value == "" ||
    photo_date_field == "" ||
    valid_extenstions.includes(new_photo_curr_extension) == false
  ) {
    if (
      post_title_field.value == "" ||
      photo_description_field.value == "" ||
      photo_date_field.value == ""
    ) {
      add_post_error_message.innerHTML += `<p class="has-text-danger"> Please complete all fields. </p>`;
    }
    if (valid_extenstions.includes(new_photo_curr_extension) == false) {
      add_post_error_message.innerHTML += `<p class="has-text-danger"> Invalid image format. </p>`;
    }
  } else {
    // Gathering all of the information and adding it to the database!
    let new_photo_file = document.querySelector("#photo_image_upload").files[0];
    let new_image = new_photo_file.name;
    const task = ref.child(new_image).put(new_photo_file);
    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        let new_post = {
          date: photo_date_field.value,
          description: photo_description_field.value,
          image_url: url,
          title: post_title_field.value,
        };

        db.collection("Photo Collection")
          .add(new_post)
          .then(() => {});
      });
  }
});

// Populating div with current posts //
function showPosts() {
  // Still getting errors when trying to insert new information into the Database. Still need to troublesoot with Samer
}

// Editing a Current Post & Deleting Current Posts //
// Cannot really write this code unless the data is successfully entered.

// --------------------------------------------------------  RESOURCES PAGE --------------------------------------------------------  //
// Displaying and Hiding "Add Resources" Form //

let open_resource_modal = document.querySelector("#open_resource_modal");
let resource_modal = document.querySelector("#resource_form_modal");
let resource_modal_exit_btn = document.querySelector(
  "#cancel_resource_addition"
);
let add_resource_btn = document.querySelector("#submit_resource_btn");

function reset_resource_form() {
  document.querySelector("#resource_name_field").value = "";
  document.querySelector("#resource_description_field").value = "";
  document.querySelector("#resource_image_upload").value = "";
  document.querySelector("#resource_link_field").value = "";
  document.querySelector("#resource_form_error_message").innerHTML = "";
}

open_resource_modal.addEventListener("click", () => {
  resource_modal.classList.add("is-active");
});

resource_modal_exit_btn.addEventListener("click", () => {
  resource_modal.classList.remove("is-active");
  reset_resource_form();
});

add_resource_btn.addEventListener("click", () => {
  let resource_name = document.querySelector("#resource_name_field").value;
  let resource_description = document.querySelector(
    "#resource_description_field"
  ).value;
  let resource_link = document.querySelector("#resource_link_field").value;
  let resource_image_path = document.querySelector(
    "#resource_image_upload"
  ).value;
  let curr_extension = resource_image_path.substr(
    resource_image_path.length - 4,
    resource_image_path.length
  );
  let resource_error_message = document.querySelector(
    "#resource_form_error_message"
  );

  // Checking whether or not information is valid prior to being entered into database //
  // If valid --> Enter information into database and update page
  // If invalid --> Display error message (They will try again)
  resource_error_message.innerHTML = "";
  if (
    resource_name == "" ||
    resource_description == "" ||
    resource_link == "" ||
    valid_extenstions.includes(curr_extension) == false
  ) {
    if (
      resource_name == "" ||
      resource_description == "" ||
      resource_link == ""
    ) {
      resource_error_message.innerHTML +=
        '<p class="has-text-danger"> Please complete all fields. </p>';
    }
    if (valid_extenstions.includes(curr_extension) == false) {
      resource_error_message.innerHTML +=
        '<p class="has-text-danger"> Invalid image format. </p>';
    }
  } else {
    // If all of the fields are valid, add the information into the database.
    let file = document.querySelector("#resource_image_upload").files[0];
    let image = new Date() + "_" + file.name;
    const task = ref.child(image).put(file);
    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        let resource = {
          name: resrouce_name,
          link: resource_link,
          image_url: url,
          description: resource_description,
        };

        db.collection("Resources")
          .add(resource)
          .then(() => {});
      });
  }
})

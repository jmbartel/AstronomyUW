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

    // Calling Show Resources to ensure that Edit/Delete buttons are visible //
    showResources(auth.currentUser);

    // Calling Show Posts to ensure that Edit/Delete buttons are visible //
    showPosts(auth.currentUser);
  } else {
    // no user
    UserEmail = "";
    configure_nav_bar();

    // Hiding add-new-post button
    document.querySelector("#open_photos_modal").classList.add("is-hidden");

    // Hiding add-resources-button
    document.querySelector("#open_resource_modal").classList.add("is-hidden");

    // Calling Show Resources to ensure that Edit/Delete buttons are hidden //
    showResources(auth.currentUser);

    // Calling Show Posts to ensure that Edit/Delete buttons are hidden //
    showPosts(auth.currentUser);
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

// Sample officer data (replace with Firestore data)
let officersData = [
  {
    name: "John Doe",
    title: "President",
    year: "Senior",
    major: "Astronomy",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Smith",
    title: "Vice President",
    year: "Junior",
    major: "Physics",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

let officersContainer = document.getElementById("officers-container");
officersData.forEach((officer) => {
  let card = document.createElement("div");
  card.className = "officer-card columns";

  card.innerHTML = `<div class="column is-one-third"><figure class="image"><img class="officer-image" src="placeholder-image.jpg" alt="${officer.name}"></figure></div><div class="officer-info column"><h2 class="title is-4 has-text-danger-dark is-bold">${officer.name}</h2><h3 class="subtitle is-5">${officer.title}</h3><p><strong class="has-text-danger-dark">Year: </strong> ${officer.year}</p><p><strong class="has-text-danger-dark">Major: </strong>${officer.major}</p><p>${officer.bio}</p></div>`;

  officersContainer.appendChild(card);
});

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
      adjustCalendarView();
    })
    .catch(function (error) {
      console.error("Error loading events from Firestore: ", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadEventsFromFirestore();
});

//admin
function generateEventCards(events) {
  console.log("generateEventCards called", events);
  let eventCardsContainer = document.getElementById("eventCards");
  eventCardsContainer.innerHTML = "";

  events.forEach((event) => {
    let eventCard = document.createElement("div");
    eventCard.classList.add(
      "card",
      "has-background-black",
      "has-border-link-light",
      "has-text-white",
      "my-4"
    );
    eventCard.innerHTML = `
    <header class="card-header"> 
    <p class="card-header-title is-size-5 has-text-white">${event.title}</p>
    </header>
    <div class="card-content>
      <div class="content">
      <p>Date: ${event.date.toLocaleDateString()}</p>
      <p>Description: ${event.description}</p>
      <p>RSVP here: <a href="${event.rsvplink}" target="_blank">RSVP</a></p>
      </div>
      </div>
      `;
    eventCardsContainer.appendChild(eventCard);
  });
}
function isAdminLoggedIn() {
  let currentUser = auth.currentUser;
  if (currentUser) {
    return true;
  } else {
    return false;
  }
}

function adjustCalendarView() {
  console.log("adjustcalendarView called");
  if (isAdminLoggedIn()) {
    document.getElementById("adminSection").classList.remove("is-hidden");
    document.getElementById("eventCards").classList.add("is-hidden");
  } else {
    document.getElementById("adminSection").classList.add("is-hidden");
    document.getElementById("eventCards").classList.remove("is-hidden");
    console.log("events", events);
    generateEventCards(events);
  }
}

auth.onAuthStateChanged(adjustCalendarView);
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
  document.querySelector(
    "#post_form_buttons"
  ).innerHTML = `<div class="control">
  <button id = "submit_post_btn" class="button is-link button-font" onclick = "addNewPost()" >Submit</button>
</div>
<div class="control">
  <button id="cancel_new_post" class="button is-link is-light button-font" onclick = "cancel_edit_post()">
    Cancel
  </button>
</div>`;
  document.querySelector("#post_form_heading").innerHTML = `Create New Post`;
  document.querySelector(
    "#upload_photo_post_message"
  ).innerHTML = `<i class = "is-size-6 has-text-grey">Acceptable Image Formats: .jpg, .jpeg, .png</i></span>`;
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

function addNewPost() {
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
          .then(() => {
            alert("New Post Successfully Added!");
            post_modal.classList.remove("is-active");
            reset_new_post_form();
            showPosts(auth.currentUser);
          });
      });
  }
}

// Formatting the date (Stored as 01-01-2024 and want on the webpage as January 1st, 2024)
function getFormattedDate(CurrDate) {
  let date = new Date(CurrDate);

  let monthNames = [
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

  let month = monthNames[date.getMonth()];
  let day = date.getDate() + 1;

  let suffix = "";
  if (day == 1 || day == 21 || day == 31) {
    suffix = "st";
  } else if (day == 2 || day == 22) {
    suffix = "nd";
  } else if (day == 3 || day == 23) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  let formattedDate = `${month} ${day}${suffix}, ${date.getFullYear()}`;
  return formattedDate;
}

// Populating div with current posts //
function showPosts(user) {
  db.collection("Photo Collection")
    .get()
    .then((res) => {
      let data = res.docs;
      let html = ``;

      data.forEach((doc) => {
        let formattedDate = getFormattedDate(doc.data().date);
        html += `<div id = "${doc.id}" class = "card has-background-black">
        <div class = "card-image">
          <figure class = "image is-1by1" >
            <img src="${doc.data().image_url}" alt="Descriptive Alt Text"/>
        </figure>
      </div>
      <div class = "card-content has-text-white">
        <div class = "content">
          <time> <strong class="has-text-link-light is-bold"> ${formattedDate} 
          </strong></time>
          <h3 class = "has-text-white"> ${doc.data().title} </h3>
          <p> ${doc.data().description}</p>
          <br>
          <br>`;
        if (user) {
          html += `<span id = "edit_post" class="is-clickable has-text-link" onclick = "editPost(${doc.id})"> Edit </span> &nbsp; &nbsp; 
          <span id = "delete_post" class = "is-clickable has-text-link" onclick = "deletePost(${doc.id})" > Delete </span>            
            </div>
          </div>
        </div>`;
        } else {
          html += `</div>
            </div>
          </div>`;
        }
      });

      document.querySelector("#all_history_posts").innerHTML = html;
    });
}

// Editing posts
function editPost(CurrDoc) {
  // Altering the buttons/fields on the new-post-form
  document.querySelector(
    "#post_form_buttons"
  ).innerHTML = `<div class="control">
  <button id = "save_post_btn" class="button is-link button-font" onclick = "updatePhotoDatabase(${CurrDoc.id})"> Save </button>
  </div>
  <div class="control">
  <button id="cancel_new_post" class="button is-link is-light button-font" onclick = "cancel_edit_post()">
    Cancel
  </button> </div>`;
  document.querySelector("#post_form_heading").innerHTML = `Edit Post`;
  document.querySelector(
    "#upload_photo_post_message"
  ).innerHTML = `<i class = "is-size-6 has-text-grey">Acceptable Image Formats: .jpg, .jpeg, .png</i>
  <br> <i class = "is-size-6 has-text-danger-dark"> If not updating image, please leave blank. </i>`;

  db.collection("Photo Collection")
    .get()
    .then((res) => {
      let data = res.docs;
      data.forEach((doc) => {
        if (CurrDoc.id == doc.id) {
          document.querySelector("#post_title_field").value = doc.data().title;
          document.querySelector("#photo_description_field").value =
            doc.data().description;
          document.querySelector("#photo_date_field").value = doc.data().date;
          // Not populating the "Upload Image" field because it would be grabbing the reference to the image
          // in storage which would not make sense to the admin. (Placed an alert under the field stating
          // that if the admin doesn't want to update the photo, leave the field blank.)
        }
      });
    });

  post_modal.classList.add("is-active");
}

function updatePhotoDatabase(CurrDoc) {
  let post_image = document.querySelector("#photo_image_upload").value;
  // If the field is blank, that means that the admin doesn't want to update the photo. (If they
  // don't, just update all of the other fields )
  if (post_image == "") {
    db.collection("Photo Collection")
      .doc(CurrDoc.id)
      .update({
        date: photo_date_field.value,
        description: photo_description_field.value,
        title: post_title_field.value,
      })
      .then(() => {
        alert("Post Successfully Updated!");
        post_modal.classList.remove("is-active");
        reset_new_post_form();
        showPosts(auth.currentUser);
      });
  } else {
    let new_photo_curr_extension = new_photo.value.substr(
      new_photo.value.length - 4,
      new_photo.value.length
    );
    if (valid_extenstions.includes(new_photo_curr_extension) == false) {
      document.querySelector(
        "#add_post_form_error_message"
      ).innerHTML += `<p class = "has-text-danger"> Invalid image format. </p>`;
    } else {
      document.querySelector("#add_post_form_error_message").innerHTML = "";
      let new_photo_file = document.querySelector("#photo_image_upload")
        .files[0];
      let new_image = new_photo_file.name;
      const task = ref.child(new_image).put(new_photo_file);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          db.collection("Photo Collection")
            .doc(CurrDoc.id)
            .update({
              date: photo_date_field.value,
              description: photo_description_field.value,
              title: post_title_field.value,
              image_url: url,
            })
            .then(() => {
              alert("Post Successfully Updated!");
              post_modal.classList.remove("is-active");
              reset_new_post_form();
              showPosts(auth.currentUser);
            });
        });
    }
  }
}

function deletePost(CurrDoc) {
  db.collection("Photo Collection")
    .doc(CurrDoc.id)
    .delete()
    .then(() => {
      alert("Post Successfully Deleted!");
      showPosts(auth.currentUser);
    });
}

function cancel_edit_post() {
  post_modal.classList.remove("is-active");
  reset_new_post_form();
}

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

function cancel_addition() {
  resource_modal.classList.remove("is-active");
  reset_resource_form();
}

function showResources(user) {
  db.collection("Resources")
    .get()
    .then((res) => {
      let data = res.docs;
      let html = ``;

      data.forEach((doc) => {
        html += `<div id = "${doc.id}" class = "container">
        <div class = "box has-background-black">
          <h2 class = "is-size-4"> <strong class = "has-text-white"> ${
            doc.data().name
          } </strong></h2>
          <article class = "media m-2">
            <div class = "media-left" style = "width: 300">
              <figure class = "image is-3by2">
                <img class = "resource-image" src="${
                  doc.data().image_url
                }" alt="">
              </figure>
            </div>
            <div class = "media-content m-2">
              <div class = "content">
               <p class = "has-text-info has-text-left"> <b> Description: </b></p>
               <p class = "has-text-left has-text-white"> ${
                 doc.data().description
               } </p>`;

        if (doc.data().link != "N/A") {
          html += `<p class = "has-text-left">
               <b class = "has-text-info"> Link: </b> <a class = "has-text-info" href="${
                 doc.data().link
               }">${doc.data().name}</a>
               <br>`;
        } else {
          html += `<p class = "has-text-left">
              <br>`;
        }

        if (user) {
          html += `<span id = "edit_resource" class="is-clickable has-text-link" onclick = "update_resources(${doc.id})"> Edit </span> 
          &nbsp; &nbsp; <span id = "delete_resource" class = "is-clickable has-text-link" onclick = "deleteResource(${doc.id})" > Delete </span>
                      </p> </div> </div> </article> </div> </div> <br>`;
        } else {
          html += `</p> </div> </div> </article> </div> </div> <br>`;
        }
      });

      document.querySelector("#all_resources").innerHTML = html;
    });
}

// Opening the Resource Form and Changing the buttons so they're correspond with adding a resource //
open_resource_modal.addEventListener("click", () => {
  document.querySelector("#resource_buttons").innerHTML = `<div class="control">
  <button id = "submit_resource_btn" class="button is-link button-font" onclick = "addResource()" >Submit</button>
    </div>
    <div class="control">
      <button id="cancel_resource_addition" class="button is-link is-light button-font" onclick = "cancel_addition()" >
        Cancel
      </button>
    </div>`;
  document.querySelector("#resource_form_heading").innerHTML = `Add Resource`;
  document.querySelector(
    "#resource_upload_message"
  ).innerHTML = `<i class = "is-size-6 has-text-grey">Acceptable Image Formats: .jpg, .jpeg, .png</i>`;
  resource_modal.classList.add("is-active");
});

// Adding the resource to the database //
function addResource() {
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
  // If valid --> Enter information into database and update page //
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
          name: resource_name,
          link: resource_link,
          image_url: url,
          description: resource_description,
        };

        db.collection("Resources")
          .add(resource)
          .then(() => {
            resource_modal.classList.remove("is-active");
            reset_resource_form();
            alert("Resource Successfully Added!");
            showResources(auth.currentUser);
          });
      });
  }
}

// Editing a Resource --> Specifically altering buttons and populating the text fields //
function update_resources(CurrDoc) {
  document.querySelector("#resource_buttons").innerHTML = `<div class="control">
    <button id = "update_resource_btn" class="button is-link button-font" onclick = "updateResourceDatabase(${CurrDoc.id})">Save</button>
  </div>
  <div class="control">
    <button id="cancel_resource_update" onclick = "cancel_resource_edit()" class="button is-link is-light button-font">
      Cancel
    </button>
  </div>`;
  document.querySelector("#resource_form_heading").innerHTML = `Edit Resource`;
  document.querySelector(
    "#resource_upload_message"
  ).innerHTML = `<i class = "is-size-6 has-text-grey">Acceptable Image Formats: .jpg, .jpeg, .png</i>
  <br> <i class = "is-size-6 has-text-danger-dark"> If not updating image, please leave blank. </i>`;

  db.collection("Resources")
    .get()
    .then((res) => {
      let data = res.docs;
      data.forEach((doc) => {
        if (CurrDoc.id == doc.id) {
          document.querySelector("#resource_name_field").value =
            doc.data().name;
          resource_description = document.querySelector(
            "#resource_description_field"
          ).value = doc.data().description;
          document.querySelector("#resource_link_field").value =
            doc.data().link;
          // Not populating the "Upload Image" field because it would be grabbing the reference to the image
          // in storage which would not make sense to the admin. (Placed an alert under the field stating
          // that if the admin doesn't want to update the photo, leave the field blank.)
        }
      });
    });

  resource_modal.classList.add("is-active");
}

// Editing a resource in the backend database //
function updateResourceDatabase(CurrDoc) {
  let resource_image = document.querySelector("#resource_image_upload").value;
  // If the field is blank, that means that the admin doesn't want to update the photo. (If they
  // don't, just update all of the other fields )
  if (resource_image == "") {
    db.collection("Resources")
      .doc(CurrDoc.id)
      .update({
        name: document.querySelector("#resource_name_field").value,
        link: document.querySelector("#resource_link_field").value,
        description: document.querySelector("#resource_description_field")
          .value,
      })
      .then(() => {
        alert("Resource Information Successfully Updated!");
        resource_modal.classList.remove("is-active");
        reset_resource_form();
        showResources(auth.currentUser);
      });
  } else {
    // In this situation, they do want to update the photo
    // First Check that the image has proper extensions, if so, update in the database
    let curr_extension = resource_image.substr(
      resource_image.length - 4,
      resource_image.length
    );
    if (valid_extenstions.includes(curr_extension) == false) {
      document.querySelector(
        "#resource_form_error_message"
      ).innerHTML += `<p class="has-text-danger"> Invalid image format. </p>`;
    } else {
      document.querySelector("#resource_form_error_message").innerHTML = "";
      let file = document.querySelector("#resource_image_upload").files[0];
      let image = new Date() + "_" + file.name;
      const task = ref.child(image).put(file);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          db.collection("Resources")
            .doc(CurrDoc.id)
            .update({
              name: document.querySelector("#resource_name_field").value,
              link: document.querySelector("#resource_link_field").value,
              description: document.querySelector("#resource_description_field")
                .value,
              image_url: url,
            })
            .then(() => {
              alert("Resource Information Successfully Updated!");
              resource_modal.classList.remove("is-active");
              reset_resource_form();
              showResources(auth.currentUser);
            });
        });
    }
  }
}

// If an admin no longer wants to edit a resource //
function cancel_resource_edit() {
  resource_modal.classList.remove("is-active");
  reset_resource_form();
}

// Deleting a given resource from the backend database //
function deleteResource(CurrDoc) {
  db.collection("Resources")
    .doc(CurrDoc.id)
    .delete()
    .then(() => {
      alert("Resource Successfully Deleted!");
      showResources(auth.currentUser);
    });
}

showResources(auth.currentUser);

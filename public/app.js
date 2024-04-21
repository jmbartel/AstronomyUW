// -------------------------------------------------------- AUTHENTICATION --------------------------------------------------------  //
// global variables

let signinbtn = document.querySelector("#signin"); // good
let signin_modal = document.querySelector("#signinmodal"); //good
let signin_modalbg = document.querySelector("#signinmodal_bg"); //good

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
  } else {
    // no user
    UserEmail = "";
    configure_nav_bar();
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
  
  db.collection("events").add(event)
  .then(function(docRef){
    console.log("Event added with ID: ", docRef.id);
    event.firestoreId = docRef.id;
  })
  .catch(function(error) {
    console.error('error adding event: ', error);
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
// function deleteEventFromFirestore(event){
//   let db = firebase.firestore();

//   db.collection("events").doc(event.firestoreId).delete()
//   .then(function() {
//     console.log("Event deleted from Firestore");
//   })
//   .catch(function(error) {
//     console.error("Error deleting from Firestore: ", error)
//   });
// }

function deleteEvent(eventId) {
  let db = firebase.firestore();

  db.collection("events").doc(eventId).delete()
    .then(function() {
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
}).catch(function(error) {
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
            ${eventDate.toLocaleDateString()} <a href="${event.rsvplink}" target="_blank">RSVP here</a>`;

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

  db.collection("events").get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let event = doc.data();
        event.id = doc.id;
        event.date = event.date.toDate(); // Convert Firestore Timestamp to JavaScript Date
        events.push(event);
      });
      showCalendar(currentMonth, currentYear);
      displayReminders();
    })
    .catch(function(error) {
      console.error("Error loading events from Firestore: ", error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  loadEventsFromFirestore();
});

//admin 



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
  const valid_extenstions = [".jpg", "jpeg", ".png"];
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
});

// global variables

// let signinbtn = document.querySelector("#signin"); // good
// let signin_modal = document.querySelector("#signinmodal"); //good
// let signin_modalbg = document.querySelector("#signinmodal_bg"); //good

// function configure_message_bar(message) {
//   // show a confirmation message for the user

//   // show the message bar for only 2 seconds and then hide it back

//   r_e("message_bar").classList.remove("is-hidden");

//   r_e("message_bar").innerHTML = `${message}!`;

//   // hide the message bar after 2 seconds

//   setTimeout(() => {
//     r_e("message_bar").classList.add("is-hidden");

//     // clear the message bar
//     r_e("message_bar").innerHTML = "";
//   }, 2000);
// }

// function configure_nav_bar(user) {
//   let signedinlinks = document.querySelectorAll(".signedin");
//   let signedoutlinks = document.querySelectorAll(".signedout");

//   // check if user already exists

//   if (user) {
//     // show all elements with the class signedin
//     // AND hide all elements with the class signedout

//     signedinlinks.forEach((link) => {
//       link.classList.remove("is-hidden");
//     });

//     signedoutlinks.forEach((link) => {
//       link.classList.add("is-hidden");
//     });
//   } else {
//     // no user

//     // hide all elements with the class signedin
//     // AND show all elements with the class signedout

//     signedinlinks.forEach((link) => {
//       link.classList.add("is-hidden");
//     });

//     signedoutlinks.forEach((link) => {
//       link.classList.remove("is-hidden");
//     });
//   }
// }

// // sign-in modal link
// signinbtn.addEventListener("click", () => {
//   signin_modal.classList.add("is-active");
// });

// signin_modalbg.addEventListener("click", () => {
//   signin_modal.classList.remove("is-active");
// });

// r_e("signin_form").addEventListener("submit", (e) => {
//   // prevent the page from auto-refresh
//   e.preventDefault();

//   // get the email/password from the form

//   let email = r_e("email_").value;
//   let password = r_e("password_").value;

//   auth.signInWithEmailAndPassword(email, password).then((user) => {
//     // clear the form
//     // reset()
//     hideModal_signin();
//     r_e("signin_form").reset();

//     // close the modal
//     // remove the is-active class from the modal

//     hideModal_signin();
//   });
// });

// // sign out

// r_e("signout").addEventListener("click", () => {
//   auth.signOut().then(() => {});
// });

// //newest
// let UserEmail = "";
// auth.onAuthStateChanged((user) => {
//   // check if a user exists
//   if (user) {
//     // configure the message bar
//     UserEmail = user.email;

//     // configure nav bar
//     configure_nav_bar(user);
//   } else {
//     // no user
//     UserEmail = "";
//     configure_nav_bar();
//   }
// });

// function r_e(id) {
//   return document.querySelector(`#${id}`);
// }

// let loginmodal = r_e("signinmodal");
// let usersignin = r_e("signin");
// let signinmodal_bg = r_e("signinmodal_bg");

// function showmodal_signin() {
//   // add the is-active class for the modal
//   loginmodal.classList.add("is-active");
// }
// // show the modal
// usersignin.addEventListener("click", showmodal_signin);

// // hide the modal
// function hideModal_signin() {
//   // once a modal background is clicked, remove 'is-active' from the modal
//   signinmodal.classList.remove("is-active");
// }

// // attach a click event on the modal background
// signinmodal_bg.addEventListener("click", hideModal_signin);

// // Cancel sign in
// const cancelsignin = document.getElementById("cancelsignin");
// cancelsignin.addEventListener("click", hideModal_signin);

// // Sample officer data (replace with Firestore data)
// let officersData = [
//   {
//     name: "John Doe",
//     title: "President",
//     year: "Senior",
//     major: "Astronomy",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   },
//   {
//     name: "Jane Smith",
//     title: "Vice President",
//     year: "Junior",
//     major: "Physics",
//     bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
//   },
// ];

// let officersContainer = document.getElementById("officers-container");
// officersData.forEach((officer) => {
//   let card = document.createElement("div");
//   card.className = "officer-card columns";

//   card.innerHTML = `<div class="column is-one-third"><figure class="image"><img class="officer-image" src="placeholder-image.jpg" alt="${officer.name}"></figure></div><div class="officer-info column"><h2 class="title is-4 has-text-danger-dark is-bold">${officer.name}</h2><h3 class="subtitle is-5">${officer.title}</h3><p><strong class="has-text-danger-dark">Year: </strong> ${officer.year}</p><p><strong class="has-text-danger-dark">Major: </strong>${officer.major}</p><p>${officer.bio}</p></div>`;

//   officersContainer.appendChild(card);
// });

// RESOURCES PAGE //
// Displaying and Hiding Add Resources Form
let open_resource_modal = document.querySelector("#open_resource_modal");
let resource_modal = document.querySelector("#resource_form_modal");
let resource_modal_exit_btn = document.querySelector(
  "#cancel_resource_addition"
);
let add_resource_btn = document.querySelector("#submit_resource_btn");

open_resource_modal.addEventListener("click", () => {
  resource_modal.classList.add("is-active");
});

resource_modal_exit_btn.addEventListener("click", () => {
  resource_modal.classList.remove("is-active");
});

add_resource_btn.addEventListener("click", () => {
  console.log("Just Checking that the button works!");
});

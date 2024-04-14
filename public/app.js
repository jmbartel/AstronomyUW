// -------------------------------------------------------- AUTHENTICATION --------------------------------------------------------  //
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

// -------------------------------------------------------- OFFICER DATA --------------------------------------------------------  //

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

// global variables

let signupbtn = document.querySelector("#signup"); // good
let signup_modal = document.querySelector("#signupmodal"); //think good
let signup_modalbg = document.querySelector("#signupmodal_bg"); //think good

let signinbtn = document.querySelector("#signin"); // good
let signin_modal = document.querySelector("#signinmodal"); //good
let signin_modalbg = document.querySelector("#signinmodal_bg"); //good

// let postRecipeBtn = document.querySelector("#postRecipeBtn");

// let hidden_form = document.querySelector("#hidden_form");
// let content = document.querySelector("#content");

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

  // console.log(signedinlinks, signedoutlinks);

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

// sign-up modal link
signupbtn.addEventListener("click", () => {
  signup_modal.classList.add("is-active");
});

signup_modalbg.addEventListener("click", () => {
  signup_modal.classList.remove("is-active");
});

// sign-in modal link
signinbtn.addEventListener("click", () => {
  signin_modal.classList.add("is-active");
});

signin_modalbg.addEventListener("click", () => {
  signin_modal.classList.remove("is-active");
});

r_e("signup_form").addEventListener("submit", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();

  // get the email/password from the form

  let email = r_e("email").value;
  let password = r_e("password").value;

  // console.log(email, password);

  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    console.log(user.user.email + " is signed up!");

    // clear the form
    // reset()

    r_e("signup_form").reset();

    // close the modal
    // remove the is-active class from the modal

    r_e("signupmodal").classList.remove("is-active");

    // configure the message bar
  });
});

r_e("signin_form").addEventListener("submit", (e) => {
  // prevent the page from auto-refresh
  e.preventDefault();

  // get the email/password from the form

  let email = r_e("email_").value;
  let password = r_e("password_").value;

  // console.log(email, password);

  auth.signInWithEmailAndPassword(email, password).then((user) => {
    // console.log(user.user.email + " is signed up!");

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
    // configure_message_bar("Welcome back " + user.email);

    // add user's email address to the nav bar

    // r_e("currentuser").innerHTML = auth.currentUser.email;

    // configure nav bar

    configure_nav_bar(user);

    // show all comments

    // show_recipes(auth.currentUser.email);
  } else {
    // no user
    UserEmail = "";
    // configure_message_bar("You are now signed out");
    // r_e("currentuser").innerHTML;

    // clear the user's email address from the nav bar

    // r_e("currentuser").innerHTML = "";

    // configure nav bar

    configure_nav_bar();

    // call the show_recipes() with no arugment to hide all recipes
    // show_recipes();
  }
});

function r_e(id) {
  return document.querySelector(`#${id}`);
}

let signupmodal = document.querySelector("#signupmodal");
let usersignup = document.querySelector("#signup");
// 1. adding a reference to the modal background
let signupmodal_bg = document.querySelector("#signupmodal_bg");
// console.log(signupmodal_bg);
// console.log(signupmodal);
// console.log(usersignup);
// signupmodal.classList.add("is-active");

function showmodal_signup() {
  // alert("hello");
  // add the is-active class for the modal
  signupmodal.classList.add("is-active");
}
// show the modal
usersignup.addEventListener("click", showmodal_signup);

// hide the modal
function hideModal_signup() {
  // alert("hello");
  // 3. once a modal background is clicked, remove 'is-active' from the modal
  signupmodal.classList.remove("is-active");
}

// 2. attach a click event on the modal background
signupmodal_bg.addEventListener("click", hideModal_signup);

let loginmodal = r_e("signinmodal");
let usersignin = r_e("signin");
let signinmodal_bg = r_e("signinmodal_bg");

function showmodal_signin() {
  // alert("hello");
  // add the is-active class for the modal
  loginmodal.classList.add("is-active");
}
// show the modal
usersignin.addEventListener("click", showmodal_signin);

// hide the modal
function hideModal_signin() {
  // alert("hello");
  // 3. once a modal background is clicked, remove 'is-active' from the modal
  signinmodal.classList.remove("is-active");
}

// 2. attach a click event on the modal background
signinmodal_bg.addEventListener("click", hideModal_signin);

// Leave modal when cancel is clicked
// const signInButton = document.getElementById("signin");
// const modal = document.getElementById("signinmodal");

// signInButton.addEventListener("click", () => {
//   // Show the modal
//   modal.style.display = "block";
// });

// Cancel sign in
const cancelsignin = document.getElementById("cancelsignin");
cancelsignin.addEventListener("click", hideModal_signin);

// Cancel sign up
const cancelsignup = document.getElementById("cancelsignup");
cancelsignup.addEventListener("click", hideModal_signup);

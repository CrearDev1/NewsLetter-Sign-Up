let suscribe = document
  .querySelector(".suscribe")
  .addEventListener("click", changeHidden);

let email = document.querySelector("#email-input");
let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

email.addEventListener("blur", invalidFunction);

function invalidFunction() {
  if (validEmail.test(email.value)) {
    let invalid = (document.querySelector(".invalid").style.opacity = 0);
  } else {
    let invalid = (document.querySelector(".invalid").style.opacity = 1);
  }
}

let invalid = document.querySelector(".invalid");
function changeHidden() {
  if (validEmail.test(email.value)) {
    let main = (document.querySelector("main").className = "hidden");
    let header = (document.querySelector("header").className = "hidden");
    let higherContainer = (document.querySelector(".higher-container").className =
      "hidden");
    let message = (document.querySelector(".message").style.display = "block");
  } else {
    invalid.style.opacity = 1;
  }
}

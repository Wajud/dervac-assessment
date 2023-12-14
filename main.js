const submitBtn = document.getElementById("submitEmail");
const email = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");
// const emailEntry = document.querySelector("p > span#emailEntry");
// console.log(emailEntry);

const regEx = /^(\w+)@([a-z\d]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})*$/;

submitBtn.addEventListener("click", () => {
  let emailAddress = email.value;
  console.log(emailAddress);
  if (regEx.test(emailAddress)) {
    errorMessage.classList.add("hidden");
    //  emailEntry.innerHTML = "Here now";
    window.location.href = "success.html";
  } else {
    errorMessage.classList.remove("hidden");
    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 4000);
  }
});

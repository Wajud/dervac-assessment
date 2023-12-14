const submitBtn = document.getElementById("submitEmail");
const email = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");

const regEx = /^(\w+)@([a-z\d]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})*$/;

submitBtn.addEventListener("click", () => {
  let emailAddress = email.value;

  if (regEx.test(emailAddress)) {
    errorMessage.classList.add("hidden");
    localStorage.setItem("emailSubmitted", email.value);
    window.location.href = "success.html";
  } else {
    errorMessage.classList.remove("hidden");
    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 3000);
  }
});

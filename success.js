const emailAddress = localStorage.getItem("emailSubmitted");

const emailEntry = document.getElementById("email-entry");

emailEntry.innerHTML = emailAddress;

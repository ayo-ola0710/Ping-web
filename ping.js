const  button = document.querySelector("button")

function validateEmail() {
    const email = document.getElementById("input").value;
    const message = document.getElementById("message");
    
    // Regular Expression for validating email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (email.match(emailPattern)) {
      message.textContent = "Valid email address!";
      message.style.color = "green";  // Success message color
    } else {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";    // Error message color
    }
  }

button.addEventListener("click", validateEmail)
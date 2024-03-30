document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const form = document.querySelector("#form_container");
  const outputBox = document.querySelector("#output_2");
  const errorBox = document.querySelector("#output_1");

  emailInput.addEventListener("change", validateEmail);
  passwordInput.addEventListener("change", validatePassword);
  form.addEventListener("submit", submitForm);

  function validateEmail(event) {
      let value = event.target.value;
      if (value.length < 3 || !value.includes("@") || !value.includes(".")) {
          errorBox.textContent = "Make sure email is more than 3 characters and contains '@' and '.'.";
          errorBox.style.color = "red";
      } else {
          errorBox.textContent = "";
          outputBox.textContent = "All good to go!";
          outputBox.style.color = "green";
      }
  }

  function validatePassword(event) {
      let passwordValue = event.target.value;
      if (passwordValue.length < 8) {
          outputBox.textContent = "Make sure password is more than 8 characters.";
          outputBox.style.color = "red";
      } else {
          outputBox.textContent = "All good to go!";
          outputBox.style.color = "green";
      }
  }

  function submitForm(event) {
      event.preventDefault();
      let confirmation = confirm("Are you sure you want to sign up?");
      if (confirmation) {
          alert("Successful signup!");
          window.location.href = "index.html"; // Assuming "index.html" is the correct page to redirect to
      } else {
          emailInput.value = "";
          passwordInput.value = "";
          errorBox.textContent = "";
          outputBox.textContent = "";
      }
  }
});
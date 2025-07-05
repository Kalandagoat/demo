// Optional: alert on form submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function () {
    alert("Thank you! Your message has been sent.");
  });
});

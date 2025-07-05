// Optional: Thank you message after form submission (client-side only)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function () {
    alert("Thank you for your message! We'll get back to you soon.");
  });
});

/* jshint esversion: 6 */
const form = document.getElementById("contact-form");

const fields = [
  {
    id: "name",
    pattern: /^[A-Za-z\s]{2,}$/,
    error: "Name must be at least 2 letters",
  },
  {
    id: "email",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: "Valid email is required",
  },
  {
    id: "message",
    pattern: /^[A-Za-z0-9\s.,!?'"()-]{10,}$/,
    error: "Message must be at least 10 characters",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const errorText = document.getElementById(field.id + "-error");

    if (field.pattern.test(input.value.trim())) {
      errorText.textContent = "";
    } else {
      errorText.textContent = field.error;
      isValid = false;
    }
  });

  if (isValid) {
    form.submit();
  }
});

const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.showModal();
});

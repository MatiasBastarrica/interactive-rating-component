const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const radioInputs = document.querySelectorAll("input[type='radio']");
const ratingSelection = dialog.querySelector(".rating-selection");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ratingSelected;
  radioInputs.forEach((radioInput) => {
    if (radioInput.checked) {
      ratingSelected = radioInput.value;
    }
  });
  dialog.showModal();
  ratingSelection.textContent = `${ratingSelected}`;
});

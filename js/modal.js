const modal = document.querySelector(".search-model");
const closeModalButton = modal.querySelector(".icon_close");
const searchInput = modal.querySelector("#search-input");

const openModalButton = document.querySelector(".icon_search");

openModalButton.addEventListener("click", () => {
  clearInput();
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  clearInput();
  modal.style.display = "none";
});

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const clearInput = () => {
  searchInput.value = "";
};

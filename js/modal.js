const modal = () => {
  const model = document.querySelector(".search-model");
  const closeModalButton = model.querySelector(".icon_close");
  const searchInput = model.querySelector("#search-input");

  const openModalButton = document.querySelector(".icon_search");

  openModalButton.addEventListener("click", () => {
    clearInput();
    model.style.display = "block";
  });

  closeModalButton.addEventListener("click", () => {
    clearInput();
    model.style.display = "none";
  });

  searchInput.addEventListener("input", (e) => {
    console.log(e.target.value);
  });

  const clearInput = () => {
    searchInput.value = "";
  };
};

modal();

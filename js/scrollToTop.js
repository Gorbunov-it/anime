const scrollToTop = () => {
  const topButton = document.querySelector("#scrollToTopButton");

  topButton.addEventListener("click", (e) => {
    e.preventDefault();
    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};

scrollToTop();

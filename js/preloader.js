const preloader = () => {
  const preloder = document.querySelector(".preloder");
  preloder.classList.add("active");

  setTimeout(() => {
    preloder.classList.remove("active");
  }, 2000);
};

preloader();

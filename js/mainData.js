const mainData = () => {
  fetch("https://anime-f5d62-default-rtdb.firebaseio.com/anime.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

mainData();

var mode = document.getElementById("mode");

mode.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty("--secondary-color", "white");
  }
  if (e.target.checked === false) {
    document.documentElement.style.setProperty("--main-color", "#634806");
    document.documentElement.style.setProperty("--secondary-color", "#03adea");
  }
});

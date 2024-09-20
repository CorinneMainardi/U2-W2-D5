document.getElementById("searchIcon").addEventListener("click", (e) => {
  e.preventDefault();

  let searchButton = document.querySelector(".searchButton");

  if (!searchButton.classList.contains("show")) {
    searchButton.classList.add("show");
    searchButton.focus();
  } else {
    searchButton.classList.remove("show");
  }
});

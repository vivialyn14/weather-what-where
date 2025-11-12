function newCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  console.log(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm.value);
//searchForm.addEventListener("submit", newCity);

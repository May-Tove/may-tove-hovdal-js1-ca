const detailContainer = document.querySelector(".detail-results");
function displayError(message = "Unknown error") {
  return `<div class="fetchError">${message}</div>`;
}
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://rickandmortyapi.com/api/character/" + id;

console.log(url);

async function fetchCharacterDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError("An error occurred");
  }
}

function createHtml(details) {
  detailContainer.innerHTML = `<div class="image" style="background-image: url(${details.image});"></div>
                                <h1>${details.name}</h1>
                                <p>${details.species}</p>
                                <p>Gender: ${details.gender}</p>
                                <p>Status: ${details.status}</p>
                                <p>Origin: ${details.origin}</p>`;
}

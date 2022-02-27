const detailContainer = document.querySelector(".detail-results");
const pageTitle = document.querySelector("#details-title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "https://rickandmortyapi.com/api/character/" + id;

async function fetchCharacterDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    pageTitle.innerHTML = `${details.name}`;

    displayHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError("An error occurred");
  }
}

fetchCharacterDetails();

function displayHtml(details) {
  const gender = details.gender.toLowerCase();
  const species = details.species.toLowerCase();
  const origin = details.origin.name.toLowerCase();
  const status = details.status.toLowerCase();

  detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" style="background-image: url(${details.image});"></div>
                                <p>Species:  ${species}</p>
                                <p>Gender: ${gender}</p>
                                <p>Origin: ${origin}</p>
                                <p>Status: ${status}</p>`;
}

const url = "https://rickandmortyapi.com/api/character";

const resultsContainer = document.querySelector(".results");

async function fetchCharacters() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    displayHtml(result);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("An error occurred");
  }
}

fetchCharacters();

function displayHtml(result) {
  const characters = result.results;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < characters.length; i++) {
    if (i === 9) {
      break;
    }

    const img = characters[i].image;
    const character = characters[i].name;
    const status = characters[i].status.toLowerCase();

    resultsContainer.innerHTML += `<a href="details.html?id=${characters[i].id}" class="card">
                                    <div class="image" style="background-image: url(${img});"></div>
                                    <h2>${character}</h2>
                                    <p>Status: ${status}</p>
                                    </a>`;
  }
}

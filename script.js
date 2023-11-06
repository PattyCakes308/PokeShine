document.addEventListener("DOMContentLoaded", function () {
    // Element where we will display the Pokemon data
    const pokemonDataElement = document.getElementById("pokemon-data");

    // URL for the PokeAPI to retrieve data for a specific Pokémon (e.g., Pikachu)
    const pokemonName = "pikachu";
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    // Make a request to the PokeAPI
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Extract the relevant data you want to display
            const name = data.name;
            const height = data.height;
            const weight = data.weight;

            // Create HTML content to display the data
            const pokemonInfo = `
                <h2>${name}</h2>
                <p>Height: ${height} decimetres</p>
                <p>Weight: ${weight} hectograms</p>
            `;

            // Update the content of the div with the Pokemon data
            pokemonDataElement.innerHTML = pokemonInfo;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});

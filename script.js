document.addEventListener("DOMContentLoaded", function () {
    // Elements where we will display the Pokemon data and image
    const pokemonDataElement = document.getElementById("pokemon-data");
    //const pokemonImageElement = document.getElementById("pokemon-image");

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

            // Extract the URL of the Pokémon's image
            const imageUrl = data.sprites.front_default;

            // Create HTML content to display the data
            const pokemonInfo = `
                <h2>${name}</h2>
                <p>Height: ${height} decimetres</p>
                <p>Weight: ${weight} hectograms</p>
                <img id="pokemon-image" src="${imageUrl}" alt="Pokemon Image">
            `;

            // Update the content of the div with the Pokemon data
            pokemonDataElement.innerHTML = pokemonInfo;

            // Set the src attribute of the image element to the Pokémon's image URL
            //pokemonImageElement.src = imageUrl;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});

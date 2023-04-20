const $container = document.getElementById("char-container")
fetch("https://rickandmortyapi.com/api/character")
.then ((response) => response.json())
.then ((data) => {
    const characters = data.results;
    console.log(characters)
    for (let character of characters) {
        $container.innerHTML += `
        <div class="card">
            <img class="character-image" src=${character.image} 
                alt="Imagen de ${character.name}">
                <div class="character-info">
                    <h3 class="character-name">${character.name}</h3>
                    <p>Gender: ${character.gender}</p>
                    <p>Species: ${character.species}</p>
                    <p>Status: ${character.status}</p>
                </di>
        </div>
        `}
})

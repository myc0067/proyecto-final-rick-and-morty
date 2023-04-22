fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("char-container");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="grid-char">
        <img class="char-img" src="${personajes[i].image}">
        <h3 class="nombre-personaje">${personajes[i].name}</h3>
        <p>Gender: ${personajes[i].gender}</p>
        <p>Species: ${personajes[i].species}</p>
        <p>Status: ${personajes[i].status}</p>

    
      </div>
      `;
    }
  });
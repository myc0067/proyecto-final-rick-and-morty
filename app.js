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
      <div class="char">
        <img class="char-img" src="${personajes[i].image}">
        <p class="nombre-personaje">${personajes[i].name}</p>
        <p>Gender: ${personajes[i].gender}</p>
        <p>Species: ${personajes[i].species}</p>
        <p>Status: ${personajes[i].status}</p>

    
      </div>
      `;
    }
  });
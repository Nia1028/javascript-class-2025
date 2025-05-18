const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

fetchData("https://pokeapi.co/api/v2/pokemon/eevee")
  .then((eevee) => {
    console.log(`Eevee: ${eevee.name}`);
    return fetchData(eevee.species.url);
  })
  .then((species) => {
    console.log(`species: ${species.name}`);
    return fetchData(species.evolution_chain.url);
  })
  .then((evolution) => {
    console.log(`Evolution:${JSON.stringify(evolution)}`);
    const evolvesTo = evolution.chain.evolves_to;
    for (let i = 0; i < evolvesTo.length; i++) {
      const evolutionDetails = evolvesTo[i];
    }
  });

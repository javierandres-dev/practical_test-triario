'use strict';

async function getPokemon(aName) {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${aName}/`);
    if (!resp.ok) throw 'error';
    const data = await resp.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
}

const e = React.createElement;

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: false };
  }

  render() {
    if (this.state.search) {
      if (searchTerm.value.length === 0) {
        return 'Ingrese el nombre o id del Pokémon que desea buscar';
      } else {
        let pokemon = undefined;
        const name = searchTerm.value;
        (async () => {
          pokemon = await getPokemon(name);
        })();
        setTimeout(() => {
          const {
            id,
            name,
            height,
            weight,
            abilities,
            base_experience,
            types,
          } = pokemon;
          const ability = abilities[0].ability.name;
          const type = types[0].type.name;
          console.log(name);
          domContainer.innerHTML = `
            <div class="pokemon">
  <figure>
    <img src="${pokemon.sprites.front_default}" alt="Front image ${name}">
    <figcaption>${name}</figcaption>
  </figure>
  <ul>
    <li><b>Ability: </b> ${ability}</li>
    <li><b>Base experience: </b> ${base_experience}</li>
    <li><b>Type: </b> ${type}</li>
    <li><b>Height: </b> ${height} dm.</li>
    <li><b>Weight: </b> ${weight} hg.</li>
    <li><b>ID: </b>${id}</li>
  </ul>
</div>
          `;
        }, 3000);
        return 'Cargando ...';
      }
    }

    return e(
      'button',
      { onClick: () => this.setState({ search: true }) },
      'Buscar'
    );
  }
}

const searchTerm = document.getElementById('search');
const domContainer = document.getElementById('result');
ReactDOM.render(e(Pokemon), domContainer);

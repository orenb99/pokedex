const route = "http://localhost:3001/api/";
import axios from 'axios'
function showCollection() {
    axios
      .get(route + "collection")
      .then((res) => {
        const shownType = res.data;
        console.log(shownType);
        console.log(getIconByType(shownType))

      })
      .catch((err) => console.log(err.message));
  }
  

async function getIconByType(shownType) {
    return await Promise.all(shownType.map( async (value)=>{
        const pokemon = await axios.get(`${route}/pokemon/${value}`)
        // return pokemon.data.sprites.versions['generation-viii'].icons.front_default
        return pokemon.data
    }))
  }
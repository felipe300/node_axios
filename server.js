import axios from "axios";
import { readFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const __dirname = dirname(fileURLToPath(import.meta.url));
let pokemonArrList = [];
let uniquePokemon;

const getPokemons = async () => {
  try {
    const randomPokemon = Math.floor(Math.random() * pokemonArrList.length);
    const response = await axios.get(`${BASE_URL}/${randomPokemon}`);
    const pokemon = response.data;
    // console.log(pokemon.name, pokemon.abilities.map(abi => abi.ability.name))
    return pokemon;
  } catch (err) {
    console.log(err.message);
  }
};

const readFiles = () => {
  let data = readFileSync(`${__dirname}/src/data/pokemon.txt`, "utf8");

  for (const char of data.split(",")) {
    pokemonArrList.push(char.replace(/[^a-z0-9]/gi, ""));
  }
  uniquePokemon = getPokemons();
};

readFiles();

console.log(await uniquePokemon);

import * as constants from '../fixtures/constants'

export async function getPokemon () {
  const randId = Math.floor(Math.random() * constants.MAX_POKEMON_EXIST) + 1
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`)
  return await response.json()
}
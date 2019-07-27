<template>
  <div class="pokemon-screen">
    <div v-if="pokemonLoaded" class="game-screen">
      <PokemonImage :image="image" />
      <PokemonInput @guess="guess" />
    </div>
    <div
      v-else
      class="loading-transition"
    >
      <p>Loading pokemon...</p>
    </div>
  </div>
</template>

<script>
import { getPokemon } from '../utils/api'
import PokemonImage from './PokemonImage'
import PokemonInput from './PokemonInput'

export default {
  name: 'PokemonScreen',

  components: {
    PokemonImage,
    PokemonInput
  },

  data () {
    return {
      pokemon: {}
    }
  },

  computed: {
    pokemonLoaded () {
      return Object.keys(this.pokemon).length
    },

    image () {
      return this.pokemon.sprites.front_default
    }
  },

  async created () {
    this.pokemon = await getPokemon()
  },

  methods: {
    guess (guessedPokemon) {
      if (guessedPokemon === this.pokemon.name) {
        console.log('you win!')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4em;
  align-items: center;
  justify-items: center;
}

.loading-transition {
  text-align: center;
}
</style>

<template>
  <div class="pokemon-screen">
    <div
      v-if="pokemonLoaded"
      class="game-screen"
    >
      <PokemonImage
        :image="image"
        :win="gameWin"
      />
      <PokemonInput @guess="guess" />
      <PokemonWin
        v-if="gameWin"
        @reset="resetGame"
      />
    </div>
    <div
      v-else
      class="loading-transition"
    >
      <h3>Loading pokemon...</h3>
    </div>
  </div>
</template>

<script>
import { getPokemon } from '../utils/api'
import PokemonImage from './PokemonImage'
import PokemonInput from './PokemonInput'
import PokemonWin from './PokemonWin'

export default {
  name: 'PokemonScreen',

  components: {
    PokemonImage,
    PokemonInput,
    PokemonWin
  },

  data () {
    return {
      pokemon: {},
      gameWin: false
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
        this.gameWin = true
      }
    },
    
    async resetGame () {
      this.gameWin = false
      this.pokemon = {}
      this.pokemon = await getPokemon()
    }
  }
}
</script>

<style scoped>
.game-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 100px;
  grid-gap: 4em;
  align-items: center;
  justify-items: center;
}

.loading-transition {
  text-align: center;
  color: white;
}
</style>

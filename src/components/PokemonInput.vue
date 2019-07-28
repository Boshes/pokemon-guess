<template>
  <div class="pokemon-input">
    <input
      v-model="stringGuess"
      type="text"
      spellcheck="false"
      autocomplete="off"
      @keyup.prevent.enter="guess()"
    />
    <button @click="guess">
      <div class="arrow"></div>
    </button>
  </div>
</template>

<script>
import { normalizeString } from '../utils/helpers'

export default {
  name: 'PokemonInput',

  data () {
    return {
      stringGuess: ''
    }
  },

  methods: {
    guess () {
      if (this.stringGuess) this.$emit('guess', normalizeString(this.stringGuess))
    }
  }
}
</script>

<style scoped>
.pokemon-input {
  display: flex;
  grid-column: 2;
  grid-row: 1;
}

input[type="text"] {
  box-sizing: border-box;
  border: 1px solid #ef5350;
  font-size: 18px;
  font-weight: 100;
  padding: 10px 15px;
  border-radius: 60px;
  color: #ef5350;
  letter-spacing: 0.01em;
  line-height: 0;
  text-transform: capitalize;
  transition: all 0.3s cubic-bezier(.53,.01,.35,1.5);
}

input[type="text"]:focus {
  outline: none;
  transform: scale(1.15);
}

button {
  background-color: #ef5350;
  border: 0;
  margin-left: 1em;
  padding: 1em;
}

button .arrow {
  box-sizing: border-box;
  height: 1em;
  width: 1em;
  border-style: solid;
  border-color: white;
  border-width: 0px 2px 2px 0px;
  transform: rotate(-45deg);
  transition: border-width infinite ease-in-out;
}

button .arrow:hover {
  border-bottom-width: 4px;
  border-right-width: 4px;
}
</style>

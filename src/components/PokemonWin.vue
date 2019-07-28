<template>
  <div class="pokemon-win">
    <h3>You Win !</h3>
    <button @click="continueGame">Continue</button>
  </div>
</template>

<script>

export default {
  name: 'PokemonWin',

  methods: {
    continueGame () {
      this.$emit('reset')
    }
  }
}
</script>

<style scoped>
.pokemon-win {
  text-align: center;
  color: white;
  grid-column-start: 1; 
  grid-column-end: 3;
  grid-row: 2;
}

.pokemon-win button {
  background-color: white;
  border: 0;
  padding: 1em;
  border-radius: 60px;
}
</style>

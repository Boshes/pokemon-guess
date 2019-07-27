<template>
  <div id="app">
    <PokemonScreen />
  </div>
</template>

<script>
import PokemonScreen from './components/PokemonScreen.vue'

export default {
  name: 'app',
  components: {
    PokemonScreen
  }
}
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef5350;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%
}
</style>

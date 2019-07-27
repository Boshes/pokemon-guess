<template>
  <div class="pokemon-image">
    <img :src="image"
      alt="A cool pokemon"
    />
  </div>
</template>

<script>

export default {
  name: 'PokemonImage',

  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.pokemon-image {
  padding: 8em;
}

img {
  filter: brightness(0.01);
  max-width: 100%;
  height: auto;
  transform: scale(5);
  min-width: 5em
}
</style>

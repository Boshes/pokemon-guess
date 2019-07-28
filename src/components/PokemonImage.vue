<template>
  <div class="pokemon-image">
    <img :src="image"
      :class="computedClass"
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
    },
    
    win: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    computedClass () {
      let classes = ['pokemon-img']
      if (this.win) classes.push('pokemon-img--win')
      return classes
    }
  }
}
</script>

<style scoped>
.pokemon-image {
  padding: 8em;
  grid-column: 1;
  grid-row: 1;
}

.pokemon-img {
  filter: brightness(0.01);
  max-width: 100%;
  height: auto;
  transform: scale(5);
  min-width: 5em
}

.pokemon-img--win {
  filter: none;
}
</style>

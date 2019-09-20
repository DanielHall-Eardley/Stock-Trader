<template lang="html">
  <section class="home">
    <h1>Trade or View your Portfolio</h1>
    <p>
      You may Save & Load your data
    </p>
    <p>
      Click on 'End Day' to begin a new Day
    </p>
    <hr>
    <h3>Your Funds: {{funds}}</h3>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        funds: this.$store.getters.showFunds
      }
    },
  }
</script>

<style lang="scss" scoped>

  @import "@/sass/variables.scss";

  .home{
    display: grid;
    grid-row-gap: $spacing;
    border: $border-grey;
    border-radius: $b-rad;
    padding: $spacing;
  }
</style>

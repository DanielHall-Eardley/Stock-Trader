<template lang="html">
  <div class="list">
    <div class="list-item" v-for="(el, index) in array">

      <h3 :class="type === 'portfolio' ? 'green' : 'blue'">
        {{el.stockName}}
        <span>Price: ${{el.price}}</span>
        <span v-show="type === 'stocks' ? false : true">
          Quantity: {{el.quantity}}
        </span>
      </h3>

      <div class="list-item-controls">
        <input
          type="number"
          placeholder="Quantity"
          v-on:input="updateInput($event, el.stockName)"
          :value="input[el.stockName]"
          min="0">
        <button
          :class="type === 'portfolio' ? 'green' : 'blue'"
          @click="type === 'stocks' ?
          buy({name: el.stockName, quantity: input[el.stockName]}) :
          sell({name: el.stockName, quantity: input[el.stockName]})">
          {{type === "portfolio" ? "Sell" : "Buy"}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"

  export default {
    props: ["type", "array"],
    data(){
      return{
        input: {}
      }
    },
    methods:{
      ...mapMutations([
        "buy",
        "sell"
      ]),
      updateInput(e, name){
        this.input[name] = e.target.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/mixins.scss";
  @import "@/sass/variables.scss";

  .list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    grid-gap: $spacing;

    h3{
      border-radius: $b-rad $b-rad 0 0;
      border: $border-grey;
      padding: $spacing-sml;
    }

    span{
      font-size: 1.9rem;
      color: grey;
      font-weight: 200;
    }

    &-item-controls{
      display: flex;
      padding: $spacing $spacing-sml;
      border-bottom: $border-grey;
      border-left: $border-grey;
      border-right: $border-grey;
      border-radius: 0 0 $b-rad $b-rad;
    }

    input{
      margin-right: auto;
      text-indent: $spacing-sml;
      border: $border-grey;
    }

    button{
      @include button
    }
  }

  .green{
    background-color: $light-green;
  }

  .blue{
    background-color: $light-blue;
  }
</style>

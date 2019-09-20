<template lang="html">
  <nav class="header-nav">
    <router-link exact :to="{name: 'home'}" class="header-nav-link">
      <b>Stock Trader</b>
    </router-link>

    <router-link :to="{name: 'portfolio'}" class="header-nav-link">
      Portfolio
    </router-link>

    <router-link :to="{name: 'stocks'}" class="header-nav-link">
      Stocks
    </router-link>
    <button @click="endDay">End Day</button>

    <div v-show="checkAuth()">
      <label for="save-load" @click="toggleDropDown({value: !showDropDown()})">Save & Load</label>
      <div class="header-nav-dropdown" id="save-load" v-show="showDropDown()">
        <div value="Save" @click="save">
          Save
        </div>
        <div value="Load" @click="load">
          Load
        </div>
      </div>
    </div>

    <span><b>Funds: ${{showFunds()}}</b></span>
  </nav>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from "vuex"

  export default {
    methods:{
      ...mapGetters([
        "showFunds",
        "showDropDown",
        "checkAuth"
      ]),
      ...mapMutations([
        "endDay",
        "toggleDropDown"
      ]),
      ...mapActions([
        "save",
        "load"
      ]),
    }
  }
</script>

<style lang="scss" scoped>

  @import "@/sass/mixins.scss";
  @import "@/sass/variables.scss";

  .header-nav{
    display: flex;
    background-color: $light-yellow;
    padding: $spacing;
    border-radius: $b-rad;
    border: solid .5px $dark-yellow;
    position: relative;

    @include mediaQ (tablet){
      justify-content: space-between;
    }

    @include mediaQ (phone){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: $spacing;
      justify-items: center;
      padding: $spacing;
    }

    & > * {
      &:not(:last-child){
        margin-right: 2rem;

        @include mediaQ (phone){
          margin-right: 0;
        }
      }
    }

    &-link{
      &:visited, &:link{
        text-decoration: none;
        color: black;
        transition: color .4s;
      }

      &:hover{
        color: orange;
      }
    }

    .router-link-active{
      color: red;
    }

    button{
      margin-left: auto;
      border: none;
      outline: none;
      background-color: inherit;
      cursor: pointer;
      transition: color .2s;
      font-size: 1.6rem;
      font-weight: 100;

      &:hover{
        color: orange;
      }

      &:active{
        color: red;
      }

      @include mediaQ (tablet){
        margin-left: 0;
      }
    }

    label{
      transition: color .3s;

      &:hover{
        color: orange;
      }
    }

    &-dropdown{
      position: absolute;
      top: calc(100% + 1rem);
      background-color: #faf9f5;
      border-radius: $b-rad;
      z-index: 1;

      div{
        padding: 1rem 4rem;
        cursor: pointer;
        border-radius: $b-rad;

        &:hover{
          background-color: $light-blue;
        }
      }
    }
  }
</style>

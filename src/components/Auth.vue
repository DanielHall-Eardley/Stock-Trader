<template lang="html">
  <section class="auth">
    <form v-if="!auth"
      v-on:submit.prevent>
      <input placeholder="Email" type="email" v-model="email">
      <input placeholder="Password" type="password" v-model="password">
      <div>
        <button @click="signUp({email, password})">Sign Up</button>
        <button @click="signIn({email, password})">Sign In</button>
      </div>
    </form>
    <button v-else @click="logout">Log Out</button>
  </section>
</template>

<script>
  import {mapActions} from "vuex"

  export default {
    data(){
      return{
        email: "",
        password: ""
      }
    },
    methods: {
      ...mapActions([
        "signUp",
        "signIn"
      ]),
      logout(){
        this.$store.commit("logout")
      }
    },
    computed: {
      auth(){
        return this.$store.getters.checkAuth
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/sass/variables.scss";
  @import "@/sass/mixins.scss";

  .auth{
    padding: $spacing;
    border-radius: $b-rad;
    border: $border-grey;

    form{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      grid-gap: $spacing;
    }

    .heading{
      font-size: 2rem;
      font-weight: 400;
      width: auto;
      color: black;
    }

    input{
      min-height: 3rem;
      text-indent: $spacing-sml;
    }

    span{
      border: $border-grey;
      padding: $spacing-sml;
      display: inline-block;
    }

    button{
      @include button;
      width: 10rem;
      background-color: $light-blue;
    }

    button:first-child{
      margin-right: $spacing;
    }
  }
</style>

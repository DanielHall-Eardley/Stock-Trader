<template lang="html">
  <div class="app">
    <app-head-nav></app-head-nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="auth"></router-view>
  </div>
</template>

<script>
  import HeadNav from "@/components/HeaderNav.vue";

  export default {
    components: {
      appHeadNav: HeadNav,
    },
    created(){
      this.$store.dispatch("autoLogin")
    }
  }
</script>

<style lang="scss">
  @import "sass/mixins.scss";

  :root{
    font-size: 62.5%;

    @include mediaQ(tablet){
      font-size: 56%;
    }

    @include mediaQ(phone){
      font-size: 50%;
    }
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app{
    display: grid;
    grid-template-rows: min-content minmax(22.5rem, auto) min-content;
    grid-row-gap: 4rem;
    padding: 4rem 8rem;
    font-size: 1.9rem;

    @include mediaQ(tablet){
      padding: 1rem 1rem;
    }
  }

  .v-enter-active{
    animation: slide-down .2s ease-in forwards
  }

  .v-leave-active{
    animation: slide-up .2s ease-out forwards
  }

  @keyframes slide-down{
    0%{
      opacity: 0;
      transform: translateY(-4rem);
    }

    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-up{
    100%{
      opacity: 0;
      transform: translateY(-4rem);
    }
  }
</style>

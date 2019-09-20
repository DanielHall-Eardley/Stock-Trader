<template lang="html">
  <section class="portfolio">
    <transition mode="out-in">
      <h1 key="heading" v-if="getArray.length === 0">
        See Stocks That You Buy Here...
      </h1>
      <app-list key="list" v-else type="portfolio" :array="getArray"></app-list>
    </transition>
  </section>
</template>

<script>
  import List from "@/components/List.vue"

  export default {
    components:{
      appList: List
    },
    computed:{
      getArray(){
        return this.$store.getters.getPortfolioArray
      }
    }
  }
</script>

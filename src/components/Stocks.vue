<template lang="html">
  <section class="stocks">
    <app-list type="stocks" :array="getArray"></app-list>
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
        return this.$store.getters.getStocksArray
      }
    }
  }
</script>

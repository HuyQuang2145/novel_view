<template>
  <div v-for="data of datas" :key="data.id">
    {{data.name}}
  </div>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Home',
    datas(){
      return{
        datas:[]
      }
    },
    async created() {
    try {
      const res = await axios.get('http://localhost:3000/datas')

      this.datas = res.data;
    } catch(e) {
      console.error(e)
    }
  },

}
</script>

<style>

</style>
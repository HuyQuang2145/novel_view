<template>
  <nav>
    <div class="menu-item"><router-link to="./Home">Home</router-link></div>
    <div class="menu-item"><router-link to="./Products">List</router-link></div>
    <Dropdown title="Genres" :items="genres" />
    <div class="menu-item"><router-link to="./About">About</router-link></div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'Nav',
  components: {
    Dropdown
  },
  data () {
    return {
      genres:[
        {id: "Action"},
        {id: "Adventure"},
        {id: "Fantasy"},
        {id: "Horror"}
      ]
    }
  }
}
</script>

<style>
nav {
  display: flex;
  align-items: left;
  justify-content: left;
}
nav .menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  width: 150px;
  z-index: 9999;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
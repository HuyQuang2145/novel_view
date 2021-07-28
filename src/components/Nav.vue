<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <nav class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item menu-item">
        <router-link to="./Home">Home</router-link>
      </li>
      <li class="nav-item menu-item">
        <router-link to="./Products">List</router-link>
      </li>
      <Dropdown title="Genres" :items="genres" />
      <li class="nav-item menu-item">
        <router-link to="./About">About</router-link>
      </li>
    </ul>
  </nav>
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
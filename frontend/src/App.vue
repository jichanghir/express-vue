<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    // setSkills
    // axios.post('http://localhost:3000/api/setSkills', {
    //   skills: [
    //     {
    //       skillType: 'Frontend',
    //       skillsArray: [
    //         {name: 'HTML', percent: 90},
    //         {name: 'JS', percent: 50},
    //       ]
    //     },
    //     {
    //       skillType: 'BAckend',
    //       skillsArray: [
    //         {name: 'MONGO', percent: 12},
    //         {name: 'NODEJS', percent: 30},
    //       ]
    //     }
    //   ]
    // })
    // .then((result) => {
    //   console.log("result", result);
    // });

    // setSkills
    // axios.post('http://localhost:3000/api/getSkills')
    // .then((result) => {
    //   console.log("result", result);
    // })


    // setNewArticle
    // axios.post('http://localhost:3000/api/setNewArticle', {
    //   title: 'new title',
    //   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil rerum, nisi labore sapiente corporis dolore dolor debitis maxime. In soluta laudantium eius, dolorem magnam voluptatem cum voluptas culpa ipsam facilis.'
    // })
    // .then((result) => {
    //   console.log("result", result);
    // });

    // getArticle
    // axios.post('http://localhost:3000/api/getArticle', {
    //   id: '5b52168051048a2e50e7793d'
    // })
    // .then((result) => {
    //   console.log("result", result);
    // });

    // getArticles
    // axios.post('http://localhost:3000/api/getArticles')
    // .then((result) => {
    //   console.log("result", result);
    // });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

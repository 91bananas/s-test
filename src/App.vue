<template>
  <div id="app">
        <Header />
        <b-container class="bv-row pb-5">
            <router-view></router-view>
        </b-container>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
      Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.bv-row {
    position: relative;
}
</style>

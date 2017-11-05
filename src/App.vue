<template>
  <div id="app">
    <add></add>
    <div>{{ num }}{{ isEvenStr }}</div>
    <subtract></subtract>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Add from '@/components/Add';
import Subtract from '@/components/Subtract';

export default {
  name: 'app',
  components: { Add, Subtract },

  computed: {
    ...mapGetters({
      num: 'getNum',
      isEven: 'getNumIsEven',
    }),

    isEvenStr() {
      return this.isEven ? '是偶数' : '不是偶数';
    },
  },
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

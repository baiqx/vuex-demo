<template>
  <button @click="subtractNum"> - </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['subtractNum']),
  },
};
</script>
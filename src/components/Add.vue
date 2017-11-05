<template>
  <button @click="addNum"> + </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['addNum']),
  },
};
</script>
<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['url'])
  },
  created() {
    window.location.href = this.url;
  },
};
</script>

<style></style>

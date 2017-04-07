
<template>
  <div class="main">
    <navigation></navigation>
    <div class="content">
      <h2>Melissa Marshall</h2>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'main',
  components: {
    Navigation,
  },
};
</script>

<style scoped>
  .main {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .content {
    width: 85%;
    height: 100%;
    margin-left: 15%;
  }
</style>

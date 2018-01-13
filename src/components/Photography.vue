
<template>
  <div class="main">
    <navigation></navigation>
    <div class="content">
      <h2>Photography</h2>
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

  h2 {
    display: block;
    font-family: var(--roboto);
    font-size: 30px;
    line-height: 32px;
    margin: 30px 0;
  }

  p {
    font-family: var(--open-sans);
    font-size: 18px;
    line-height: 20px;
  }

  a {
    color: var(--lapis-lazuli);
    font-weight: bold;
    text-decoration: none;
  }

  .main {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .content {
    height: 100%;
    text-align: left;
    padding: 15px 40px 15px 25px;
  }

  @media (min-width: 768px) {
    .content {
      margin-left: 22%;
      width: 45%;
      margin-top: 25px;
    }

    h2 {
      margin-bottom: 75px;
    }
  }

</style>

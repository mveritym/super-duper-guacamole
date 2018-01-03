
<template>
  <div class="main">
    <navigation></navigation>
    <div class="content">
      <h2>Melissa Marshall</h2>
      <p>
        Welcome! I'm a programmer, astronomer, and writer. I currently work in London
        at <a href="https://red-badger.com/">uSwitch</a> where I build resilient and dependable backend
        systems. I started programming with Lego robots and took a wander through professional
        <a href="https://arxiv.org/find/astro-ph/1/au:+Marshall_M_V/0/1/0/all/0/1">astronomy</a>
        before ending up in software engineering. In my spare time I make Twitter bots and
        sing in a choir.
      </p>
      <timeline></timeline>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation';
import Timeline from './Timeline';

export default {
  name: 'main',
  components: {
    Navigation,
    Timeline,
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

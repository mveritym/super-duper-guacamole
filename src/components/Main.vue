
<template>
  <div class="main">
    <navigation></navigation>
    <div class="content">
      <h2>Melissa Marshall</h2>
      <p>
        Welcome! I'm a programmer, astronomer, and writer. I currently work in London at
        digital consultancy <a href="https://red-badger.com/">Red Badger</a> where I
        help clients build lovely experiences with ReactJS. I started programming with
        Lego robots and took a wander through professional <a
        href="https://arxiv.org/find/astro-ph/1/au:+Marshall_M_V/0/1/0/all/0/1">astronomy</a>
        before ending up in web development. In my spare time I write poetry and sing in
        a <a href="http://www.goldsmithschoral.org.uk/">choir</a>.
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
    font-family: var(--roboto);
    font-size: 30px;
    line-height: 32px;
    margin-top: 0;
    margin-bottom: 75px;
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
    margin-top: 25px;
    width: 45%;
    height: 100%;
    margin-left: 15%;
    text-align: left;
    padding: 30px 50px;
  }

</style>


<template>
  <div class="main">
    <navigation></navigation>
    <div class="content">
      <h2>Photography</h2>
      <section id="photos">
        <img src="../assets/DSC_0204.jpg" />
        <img src="../assets/DSC_0279.jpg" />
        <img src="../assets/DSC_0297.jpg" />
        <img src="../assets/DSC_0281.jpg" />
        <img src="../assets/DSC_0289.jpg" />
        <img src="../assets/DSC_0253.jpg" />
        <img src="../assets/DSC_0290.jpg" />
        <img src="../assets/DSC_0195.jpg" />
      </section>
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

  #photos {
    /* Prevent vertical gaps */
    line-height: 0;

    -webkit-column-count: 3;
    -webkit-column-gap:   0px;
    -moz-column-count:    3;
    -moz-column-gap:      0px;
    column-count:         3;
    column-gap:           0px;
  }

  #photos img {
    /* Just in case there are inline attributes */
    width: 100% !important;
    height: auto !important;
  }

  @media (max-width: 800px) {
    #photos {
      -moz-column-count:    2;
      -webkit-column-count: 2;
      column-count:         2;
    }
  }
  @media (max-width: 400px) {
    #photos {
      -moz-column-count:    1;
      -webkit-column-count: 1;
      column-count:         1;
    }
  }

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
    width: 67%;
    padding: 15px 40px 15px 25px;
  }

  @media (min-width: 768px) {
    .content {
      margin-left: 22%;
      width: 69%;
      margin-top: 25px;
      padding-right: 10px;
    }

    h2 {
      margin-bottom: 75px;
    }
  }

</style>

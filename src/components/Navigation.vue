<template>
  <div class="navigation">
    <div id="picture">
    </div>
    <ul>
      <li><img src="../assets/blog-icon.png" />blog</li>
      <li><img src="../assets/github-icon.png" />github</li>
      <li><img src="../assets/twitter-icon.png" />twitter</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigation',
};
</script>

<style scoped>

  .navigation {
    float: left;
    height: 100%;
    width: 15%;
    background-color: var(--light-grey);
  }

  #picture {
    border-radius: 40px;
    background-image: url("../assets/profile-pic.jpg");
    margin: 30px auto;
    height: 75px;
    width: 75px;
  }

  ul {
    padding: 30px 15px;
    margin: 0;
  }

  li {
    color: var(--black-coral);
    font-weight: bold;
    font-family: var(--roboto);
    font-size: 18px;
    line-height: 20px;

    list-style: none;
    margin-bottom: 50px;
    margin-left: 25px;
    text-align: left;
  }

  li > img {
    vertical-align: middle;
    padding-right: 15px;
  }

</style>

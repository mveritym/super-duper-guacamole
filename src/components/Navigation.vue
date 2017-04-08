<template>
  <div class="navigation">
    <div id="picture">
    </div>
    <ul>
      <li>
        <a href="https://medium.com/@mveritym">
          <img src="../assets/blog-icon.png" />blog
        </a>
      </li>
      <li>
        <a href="https://www.github.com/mveritym">
          <img src="../assets/github-icon.png" />github
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/mveritym">
          <img src="../assets/twitter-icon.png" />twitter
        </a>
      </li>
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
    position: fixed;
    top: 0;
    bottom: 0;
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

  a {
    color: inherit;
    text-decoration: none;
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

  li > img,
  li > a > img {
    vertical-align: middle;
    padding-right: 15px;
  }

</style>

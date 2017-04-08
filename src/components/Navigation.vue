<template>
  <div class="navigation">
    <div class="mobile">
      <div id="menu">
        <div />
        <div />
        <div />
      </div>
      <h2>Melissa Marshall</h2>
    </div>
    <div class="picture" />
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
    text-align: left;
    padding: 10px 20px;
    background-color: var(--light-grey);
  }

  .navigation .mobile #menu {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    padding: 10px 0;
  }

  .navigation .mobile #menu div {
    width: 20px;
    height: 1px;
    background-color: var(--black-coral);
    margin: 4px 0;
    border: 1px solid var(--black-coral);
    border-radius: 4px;
  }

  .navigation .mobile h2 {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    padding: 30px 15px;
    margin: 0;
    display: none;
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

  @media (min-width: 768px) {

    .navigation .mobile {
      display: none;
    }

    .navigation {
      display: block;
      float: left;
      position: fixed;
      top: 0;
      bottom: 0;
      min-width: 15%;
      background-color: var(--light-grey);
    }

    .navigation ul {
      display: block;
    }

    .navigation .picture {
      display: block;

      border-radius: 40px;
      background-image: url("../assets/profile-pic.jpg");
      margin: 30px auto;
      height: 75px;
      width: 75px;
    }
  }

</style>

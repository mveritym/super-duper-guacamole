<template>
  <div class="navigation">
    <div class="mobile">
      <a href="https://medium.com/@mveritym">
        <img src="../assets/blog-icon.png" />
        <div>blog</div>
      </a>
      <a href="https://www.github.com/mveritym">
        <img src="../assets/github-icon.png" />
        <div>github</div>
      </a>
      <a href="https://www.twitter.com/mveritym">
        <img src="../assets/twitter-icon.png" />
        <div>twitter</div>
      </a>
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
    background-color: var(--light-grey);
    text-align: center;
  }

  .navigation .mobile {
    width: 50%;
    margin: auto;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
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

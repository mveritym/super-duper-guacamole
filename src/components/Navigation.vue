<template>
  <div class="navigation">
    <div class="mobile">
      <a href="https://medium.com/@mveritym">
        <img src="../assets/blog-icon-small.png" alt="blog icon, click to access" />
        <div>blog</div>
      </a>
      <a href="https://www.github.com/mveritym">
        <img src="../assets/github-icon-small.png" alt="github icon, click to access" />
        <div>github</div>
      </a>
      <a href="https://www.twitter.com/mveritym">
        <img src="../assets/twitter-icon-small.png" alt="twitter icon, click to access" />
        <div>twitter</div>
      </a>
    </div>
    <img class="picture" src="../assets/profile-pic.jpg" alt="picture of Melissa Marshall" />
    <ul>
      <li>
        <a href="https://medium.com/@mveritym">
          <img src="../assets/blog-icon.png" alt="blog icon, click to access" />
          <p>blog</p>
        </a>
      </li>
      <li>
        <a href="https://www.github.com/mveritym">
          <img src="../assets/github-icon.png" alt="github icon, click to access" />
          <p>github</p>
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/mveritym">
          <img src="../assets/twitter-icon.png" alt="twitter icon, click to access" />
          <p>twitter</p>
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
  }

  .navigation .picture {
    display: none;
  }

  .navigation .mobile {
    width: 90%;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    text-align: center;
  }

  .navigation .mobile a {
    margin-left: 30px;
  }

  .navigation .mobile img {
    width: 24px;
    height: 24px;
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
  }

  li > a > p {
    padding-left: 15px;
    display: inline;
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
      padding: 30px 25px;
    }

    .navigation ul li {
      width: 110px;
      margin: auto;
      margin-bottom: 50px;
    }

    .navigation .picture {
      display: block;
      margin: 30px auto;
      border-radius: 50px;
      height: 100px;
      width: 100px;
    }
  }

</style>

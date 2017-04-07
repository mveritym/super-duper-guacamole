<template>
  <div class="navigation">
    <ul>
      <li>blog</li>
      <li>github</li>
      <li>twitter</li>
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
  }

</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black-coral);
  display: inline-block;
  height: 100%;
  width: 100%;
}

:root {
  --snow: rgba(252, 247, 248, 1);
  --light-grey: rgba(206, 211, 220, 1);
  --wild-blue-yonder: rgba(171, 169, 195, 1);
  --lapis-lazuli: rgba(39, 93, 173, 1);
  --black-coral: rgba(91, 97, 106, 1);

  --roboto: 'Roboto', sans-serif;
  --open-sans: 'Open Sans', sans-serif;

  --medium-breakpoint: 768px;
  --large-breakpoint: 1024px;
}
</style>

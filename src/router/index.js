import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Photography from '@/components/Photography';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photography,
    },
  ],
});

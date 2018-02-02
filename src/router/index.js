import Vue from 'vue';
import Router from 'vue-router';
import section from '@/components/section/section.vue';
import bar from '@/components/bar/bar.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/foo',
      Router,
      name: 'section',
      component: section
    },
    {
      path: '/bar',
      Router,
      name: 'bar',
      component: bar
    }
  ]
});

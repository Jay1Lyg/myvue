import Vue from 'vue';
import Router from 'vue-router';
 import header from '@/components/header/header';
import foo from '@/components/foo/foo';
import bar from '@/components/bar/bar';
import add from '@/components/add/add';
// import home from '@/components/home/add';
// import clear from '@/components/clear/clear';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: header,
      children: [
        {
          path: '',
          name: 'bar',
          component: bar
        },
        {
          path: 'add',
          name: 'add',
          component: add
        }
      ]

    },
    {
      path: '/foo',
      component: foo
    }
    // { path: '*',
    //   redirect: '/home'
    // }
  ]
});

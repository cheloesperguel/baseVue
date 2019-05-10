import routes from 'routes.js'


const router = new VueRouter({
  //mode: 'history',
  //hashbang: false,
  routes
  //linkActiveClass: 'nav-item active'
});

const app = new Vue({
  router
}).$mount('#app');
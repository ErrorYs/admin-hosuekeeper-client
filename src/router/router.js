import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/Login/Login'
import Home from '../page/Home/Home'
import HomeMain from '../page/Home/components/Main/Main'
Vue.use(Router)

function loadRouter (router) {
  return () => import(`../page/Home/components/${router}/${router}`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/main',
      children: [
        { path: 'main', name: 'HomeMain', component: HomeMain },
        { path: 'city', name: 'HomeCity', component: loadRouter('City') },
        { path: 'goods', name: 'HomeGoods', component: loadRouter('Goods') },
        { path: 'banner', name: 'HomeBanner', component: loadRouter('Banner') },
        { path: 'users', name: 'HomeUsers', component: loadRouter('Users') },
        { path: 'areabanner', name: 'HomeAreaBanner', component: loadRouter('AreaBanner') },
        { path: 'homebanner', name: 'HomeHomeBanner', component: loadRouter('HomeBanner') },
        { path: 'userorder', name: 'HomeUserOrder', component: loadRouter('UserOrder') },
        { path: 'useraddress', name: 'HomeUserAddress', component: loadRouter('UserAddress') }
      ]
    }
  ]
})

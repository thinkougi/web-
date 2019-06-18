import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
/* import login from '@/components/login'
import headbar from '@/components/headbar'
import maindis from '@/components/maindis'
import tablebar from '@/components/tablebar'
import container from '@/components/container' */
import main1 from '@/components/main1'

Vue.use(Router)

export default new Router({
  routes: [
    /*    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    /*    {
      path: '/',
      // eslint-disable-next-line no-undef
      components: {'login': login, 'headbar': headbar, 'maindis': maindis, 'tablebar': tablebar, 'container': container}
    } */
    {
      path: '/',
      name: 'main1',
      component: main1
    }
  ]
})

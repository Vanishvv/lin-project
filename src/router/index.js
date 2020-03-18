import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ModelShow from '@/views/modelShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ModelShow',
      component: ModelShow
    }
  ]
})

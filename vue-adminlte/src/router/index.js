import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/AppMain'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		component: AppMain,
		children: [
			{
				path: '/',
				redirect: '/hello'
			},
			{
				path: '/hello',
				name: 'HelloWorld',
				component: HelloWorld,
			}
		]
    }
  ]
})

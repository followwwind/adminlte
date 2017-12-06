import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/AppMain'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/page/dashboard/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		redirect: '/app/index'
    },
    {
    	path: '/app',
		component: AppMain,
		children: [
			{
				path: '/',
				redirect: '/app/index'
			},
			{
				path: '/app/hello',
				name: 'HelloWorld',
				component: HelloWorld,
			},
			{
				path: '/app/index',
				name: 'Index',
				component: Index
			}
		]
    }
  ]
})

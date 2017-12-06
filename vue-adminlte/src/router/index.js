import Vue from 'vue'
import Router from 'vue-router'


const HelloWorld = () => import('@/components/HelloWorld')

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		redirect: '/app/index'
    },
    {
    	path: '/app',
		component: resolve => require(['@/components/AppMain'],resolve),
		children: [
			{
				path: '/',
				redirect: '/app/index'
			},
			{
				path: '/app/hello',
				name: 'HelloWorld',
				component: HelloWorld
			},
			{
				path: '/app/index',
				name: 'Index',
				component: resolve => require(['@/components/page/dashboard/Index'],resolve)
			}
		]
    }
  ]
})

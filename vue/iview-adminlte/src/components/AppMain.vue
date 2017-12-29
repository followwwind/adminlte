<template>
	<div>
		<Layout>
			<Header>
        		<app-header></app-header>
    		</Header>
    		<Layout>
    			<Sider hide-trigger class="app-aside">
    				<app-aside></app-aside>
    			</Sider>
    			<Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '', background: '#fff'}">
                        Content
                    </Content>
                    <Footer class="app-footer">
                    	<app-footer></app-footer>
                    </Footer>
                </Layout>
    		</Layout>
		</Layout>
	</div>
</template>

<script>
	import Aside from '@/components/viewtpl/Aside'
	import Header from '@/components/viewtpl/Header'
	import Footer from '@/components/viewtpl/Footer'
	import Setting from '@/components/viewtpl/Setting'
	export default {
		name: 'AppMain',
		data () {
		return {
		  msg: 'Welcome to Your Vue.js App'
		}
		},
		components: {
			"app-aside": Aside,
			"app-header": Header,
			"app-footer": Footer,
			"app-setting": Setting
		}
	}
</script>

<template>
	<div id="appMain" class="wrapper">
		<!-- header -->
		<app-header></app-header>
		<!-- aside -->
		<app-aside></app-aside>
		<!-- content -->
		<div class="">
			<router-view/>
		</div>
		<!-- footer -->
		<app-footer></app-footer>
		<!-- setting -->
		<app-setting></app-setting>
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
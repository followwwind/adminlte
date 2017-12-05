<template>
	<div id="appMain">
		<!-- header -->
		<app-header></app-header>
		<!-- aside -->
		<app-aside></app-aside>
		<!-- content -->
		<router-view/>
		<!-- footer -->
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Aside from '@/components/viewtpl/Aside'
	import Header from '@/components/viewtpl/Header'
	import Footer from '@/components/viewtpl/Footer'
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
	  	"app-footer": Footer
	  }
	}
</script>
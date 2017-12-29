<template>
	<div>
		<app-nav></app-nav>
	</div>
</template>

<script>
	import Nav from '@/components/viewtpl/Nav'
	export default {
	  name: 'AppAside',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components: {
	  	"app-nav": Nav
	  }
	}
</script>
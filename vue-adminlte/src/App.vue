<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
	export default {
		name: 'app',
		updated: function(){
			var wrapperHeight = $(".content-wrapper").height() || 0;
			var mainSidebar = $(".main-sidebar").height() || 0;
			var sidebarHeight = $(".sidebar").height() || 0;
			var footerHeight  = $(".main-footer").outerHeight() || 0;
			/*console.log(wrapperHeight);
			console.log(mainSidebar);*/
			if(sidebarHeight < wrapperHeight){
		      $(".main-sidebar").css('min-height', wrapperHeight + footerHeight + 50);
			}else{
			  $(".main-sidebar").css('min-height', sidebarHeight + footerHeight);
			}  
		}
	}
</script>

<style>
  
</style>



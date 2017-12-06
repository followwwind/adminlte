// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted: function(){
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
})



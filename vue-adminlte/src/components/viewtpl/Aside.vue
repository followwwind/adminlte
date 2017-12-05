<template>
	<div id="appAside">
		<!-- Left side column. contains the logo and sidebar -->
		<aside class="main-sidebar">
		<!-- sidebar: style can be found in sidebar.less -->
			<section class="sidebar">
			  <!-- Sidebar user panel -->
			  <div class="user-panel">
			    <div class="pull-left image">
			      <img src="../../assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
			    </div>
			    <div class="pull-left info">
			      <p>Alexander Pierce</p>
			      <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
			    </div>
			  </div>
			  <!-- search form -->
			  <form action="#" method="get" class="sidebar-form">
			    <div class="input-group">
			      <input type="text" name="q" class="form-control" placeholder="Search...">
			          <span class="input-group-btn">
			            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
			            </button>
			          </span>
			    </div>
			  </form>
			  <!-- /.search form -->
			  <app-nav></app-nav>
			</section>
		<!-- /.sidebar -->
		</aside>
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
<template>
	<div class="sidebar-wrapper">
		<ul class="nav flex-column">
			<li class="nav-item">
				<router-link to="/" class="nav-link"><i class="fa fa-desktop"></i> Dashboard</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/menu-category/list" class="nav-link"><i class="fa fa-th-large"></i> Menu Categories</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/menu/list" class="nav-link"><i class="fa fa-th-list"></i> Menus</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "sidebar"
}
</script>

<style scoped>
.sidebar {
	flex: 1;
	padding-left: 20px;
	background-color: #efefef;
}

.sidebar .nav-item:hover {
	background-color: #e3efff;
}

.sidebar .nav-item .nav-link {
	text-align: left;
	color: #333333;
}

.sidebar .nav-item .nav-link:hover {
	color: #333333;
}
</style>

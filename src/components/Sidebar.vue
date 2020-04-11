<template>
  <div class="sidebar-wrapper">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fa fa-desktop"></i> Dashboard</a>
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

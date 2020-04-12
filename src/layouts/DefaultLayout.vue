<template>
    <div class="fluid-container default-layout">
        <top-nav />
        <div class="flexgrid">
          <div class="sidebar"><sidebar /></div>
          <div class="content"><router-view /></div>
        </div>
    </div>
</template>

<script>
import { TopNav, Sidebar } from '@/components'

export default {
  name: "default-layout",
  components: {
    TopNav,
    Sidebar
  }
};
</script>

<style scoped>
.default-layout .flexgrid {
  display: flex;
  box-sizing: border-box;
  padding: 0 20px 0 0;
}

.default-layout .flexgrid .sidebar {
  flex: 1;
}

.default-layout .flexgrid .content {
  flex: 5;
}
</style>

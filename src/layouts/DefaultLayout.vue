<template>
    <div class="fluid-container default-layout">
        <top-nav />
        <div class="flexgrid">
          <div class="sidebar"><sidebar /></div>
          <div class="content"><router-view /></div>
        </div>
        <h3>Doank</h3>
        <table-action-modal />
        <h3>Test</h3>
    </div>
</template>

<script>
import { TopNav, Sidebar, TableActionModal } from '@/components';

export default {
  name: "default-layout",
  components: {
    TopNav,
    Sidebar,
    TableActionModal
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

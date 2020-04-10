<template>
  <div class="home-wrapper">
    <div class="btn-table" v-for="n in 80" v-bind:key="n">
      <button class="btn btn-secondary">{{ n }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
}
.home-wrapper .btn-table {
  width: 10%;
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
}
.home-wrapper .btn-table button {
  width: 100%;
}
</style>

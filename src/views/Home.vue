<template>
  <div class="home-wrapper">
    <div class="btn-table" v-for="n in 80" v-bind:key="n">
      <button class="btn btn-light">{{ n }}</button>
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
}
.home-wrapper .btn-table {
  width: 6%;
  margin-bottom: 20px;
}
</style>

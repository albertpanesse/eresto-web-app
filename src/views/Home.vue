<template>
  <div class="home-wrapper">
    <div class="table-buttons">
      <div class="btn-table" v-for="t in tables" v-bind:key="t.id">
        <button class="btn btn-secondary" v-on:click="tableOnClick(t.tablenum)">{{ t.tablenum }}</button>
      </div>
    </div>    
  </div>
</template>

<script>
import { TableServices } from '@/services'

export default {
  name: 'Home',
  data: () => {
    return {
      tables: []
    }
  },
  methods: {
    tableOnClick: (tableNum) => {
      TableServices.getDetail(tableNum)
        .then((resp) => {
          console.log(resp)
        })
    }
  },
  mounted() {
    TableServices.getStatuses()
      .then((resp) => {
        if (resp.data.success === true) {
          this.tables = resp.data.tables
        }
      })
  }
}
</script>

<style scoped>
.home-wrapper .table-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
}
.home-wrapper .table-buttons .btn-table {
  width: 10%;
  padding: 0 10px 10px 10px;
  margin-bottom: 10px;
}
.home-wrapper .table-buttons .btn-table button {
  width: 100%;
}
</style>

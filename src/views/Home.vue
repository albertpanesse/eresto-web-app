<template>
  <div class="home-wrapper">
    <div class="table-buttons">
      <div class="btn-table" v-for="t in tables" v-bind:key="t.id">
        <button v-bind:class="{'btn': true, 'btn-success': (t.status === 'F'), 'btn-danger': (t.status === 'O')}" v-on:click="tableOnClick(t.tablenum)">{{ t.tablenum }}</button>
      </div>
    </div>    
    <table-action-modal :show="modalShow" v-on:checkin="checkIn" v-on:checkout="checkOut" v-on:close="modalClosed" v-bind:table-data="tableData" />
  </div>
</template>

<script>
import { TableServices } from '@/services'
import { TableActionModal } from '@/components'

export default {
  name: 'Home',
  components: {
    TableActionModal
  },
  data: () => {
    return {
      tables: [],
      modalShow: false,
      tableData: {}
    }
  },
  methods: {
    tableOnClick: function(tableNum) {
      TableServices.getDetail(tableNum)
        .then(resp => {
          if (resp.data.success === true) {
            this.modalShow = true

            this.tableData = resp.data.table
          }
        })
    },
    checkIn: function(dt) {
      TableServices.checkIn(dt)
        .then(resp => {
          if (resp.data.success === true) {
            this.tables[dt.tablenum - 1] = resp.data.table
            this.modalShow = false
          }
        })
    },
    checkOut: function(dt) {
      TableServices.checkOut(dt)
        .then(resp => {
          if (resp.data.success === true) {
            this.tables[dt.tablenum - 1] = resp.data.table
            this.modalShow = false
          }
        })
    },
    modalClosed: function() {
      this.modalShow = false
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

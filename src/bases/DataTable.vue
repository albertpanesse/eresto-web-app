<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns"
            @click="sortBy(key)"
            :class="{ active: sortKey == key }" v-bind:key="key">
            {{ key | capitalize }}
            <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredRows" v-bind:key="entry">
          <td v-for="key in columns" v-bind:key="key">
            {{entry[key]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "data-table",
  props: ['columns', 'rows', 'filterKey'],
  data: function() {
      var sortOrders = {};

      this.columns.forEach(function(key) {
          sortOrders[key] = 1;
      });

      return {
          sortKey: "",
          sortOrders: sortOrders
      };
  },
  computed: {
    filteredRows: function() {
      var sortKey = this.sortKey;
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1;
      var rows = this.rows;
      if (filterKey) {
        rows = rows.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        rows = rows.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return rows;
    }
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  }
}
</script>

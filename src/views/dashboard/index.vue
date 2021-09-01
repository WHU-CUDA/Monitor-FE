<template>
  <div class="dashboard-container">
    <server-table :table-data="tableData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ServerTable from '@/components/Dashboard'
export default {
  name: 'Dashboard',
  components: {
    ServerTable
  },
  data: function() {
    return {
      tableData: null
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    this.getTableData()
    this.timer = window.setInterval(() => {
      setTimeout(() => {
        this.getTableData()
      }, 0)
    }, 2000)
  },
  methods: {
    getTableData() {
      this.$api.dashboard.getTableData({ 'json': 1 }).then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

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
      tableData: null,
      timer: null
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    this.getTableData()
    this.timer = window.setInterval(() => {
      this.getTableData()
    }, 2000)
  },
  beforeDestroy() {
    console.log(this.timer)
    window.clearInterval(this.timer)
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

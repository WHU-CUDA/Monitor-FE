<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="Name"
        width="180"
      />
      <el-table-column
        prop="messages"
        label="Messages"
        width="180"
      />
      <el-table-column
        label="Unacked"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.unacked || 0 }}
        </template>
      </el-table-column>
      <el-table-column
        label="Consumers"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.consumers || 0 }}
        </template>
      </el-table-column>
      <el-table-column
        label="Idle since"
      >
        <template slot-scope="scope">
          {{ scope.row.idle_since || 'N/A' }}
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'BrokerTable',
  props: {
    tableData: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped>

</style>

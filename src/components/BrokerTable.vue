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
        prop="message"
        label="Message"
        width="180"
      />
      <el-table-column
        prop="unacked"
        label="Unacked"
        width="180"
      />
      <el-table-column
        prop="consumers"
        label="Consumers"
        width="180"
      />
      <el-table-column
        prop=""
        label="Idle since"
      />
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

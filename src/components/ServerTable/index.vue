<template>
  <div class="server-table">
    <el-table
      :data="tableData"
      border
      :cell-style="{padding: '0'}"
      style="width: 100%"
    >
      <el-table-column
        prop="hostname"
        label="Worker Name"
        width="180"
      >
        <template slot-scope="scope">
          <el-link type="primary">{{ scope.row.hostname }}</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="180"
      >
        <template slot-scope="scope">
          <el-tag
            effect="dark"
            :type="scope.row.status ? 'success' : 'danger'"
            disable-transitions
          >{{ statusLabel[scope.row.status] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="active"
        label="Active"
      />
      <el-table-column
        prop="processed"
        label="Processed"
      />
      <el-table-column
        label="Failed"
      >
        <template slot-scope="scope">
          {{ scope.row.failed || 0 }}
        </template>
      </el-table-column>
      <el-table-column
        label="Retried"
      >
        <template slot-scope="scope">
          {{ scope.row.retried || 0 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="loadavg"
        label="Loadavg"
      >
        <template slot-scope="scope">
          <el-tag
            v-for="(item, key) in scope.row.loadavg"
            :key="key"
            style="margin-left: 10px"
          >
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="sw_sys"
        label="Platform"
      />
    </el-table>
  </div>
</template>

<script>
const statusLabel = {
  true: 'Online',
  false: 'Offline'
}

export default {
  name: 'Index',
  props: {
    tableData: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      statusLabel
    }
  }
}
</script>

<style scoped>

</style>

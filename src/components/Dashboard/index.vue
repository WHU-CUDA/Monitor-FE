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
          <el-link type="primary" @click="toDetail(scope.row)">{{ scope.row.hostname }}</el-link>
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
      <!-- 设备信息 start -->
      <el-table-column label="Device Info">
        <el-table-column label="CPU">
          <el-table-column label="Cores">
            <template slot-scope="scope">
              {{ scope.row.device_info.cpu.cores || 0 }}
            </template>
          </el-table-column>
          <el-table-column label="Logical Cores">
            <template slot-scope="scope">
              {{ scope.row.device_info.cpu.logical_counts || 0 }}
            </template>
          </el-table-column>
          <el-table-column label="Usage" align="center">
            <template slot-scope="scope">
              <el-progress :width="50" type="circle" :percentage="scope.row.device_info.cpu.usage" />
              <!--              {{ scope.row.device_info.cpu.usage || 0 }} %-->
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="GPU">
          <template slot-scope="scope">
            <el-popover v-for="(gpu, index) in scope.row.device_info.gpu" :key="index" trigger="hover" placement="top">
              <p>型号: {{ gpu.name }}</p>
              <p>使用率: {{ gpu.usage }} %</p>
              <p>内存: {{ Math.ceil(gpu.total / 1024) }} GB</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="small">{{ 'GPU '+index }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Memory">
          <el-table-column label="Total">
            <template slot-scope="scope">
              {{ scope.row.device_info.mem.total || 0 }} MB
            </template>
          </el-table-column>
          <el-table-column label="Free">
            <template slot-scope="scope">
              {{ scope.row.device_info.mem.free || 0 }} MB
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <!-- 设备信息 end -->
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
  },
  methods: {
    toDetail(server) {
      this.$router.push({ name: 'Detail', params: { server: server }})
    }
  }
}
</script>

<style scoped>
</style>

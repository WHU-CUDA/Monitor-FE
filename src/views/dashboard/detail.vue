<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card style="margin: 1%;">
          <el-descriptions class="margin-top" :title="server.hostname" :column="3" border>
            <template slot="extra">
              <el-button type="primary" size="small" @click="refresh">刷新</el-button>
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-s-platform" />
                操作系统
              </template>
              {{ server.sw_sys }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-cpu" />
                CPU
              </template>
              {{ server.device_info.cpu.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                内存
              </template>
              {{ Math.ceil(server.device_info.mem.total / 1024) }} GB
            </el-descriptions-item>
          </el-descriptions>
          <el-descriptions v-for="(gpu, index) in server.device_info.gpu" :key="index" class="margin-top" :column="3" border>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="gpu" />
                GPU {{ index }}
              </template>
              {{ gpu.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                内存
              </template>
              {{ Math.ceil(gpu.total / 1024) }} GB
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                内存使用率
              </template>
              <el-progress type="circle" :percentage="gpu.usage" :width="80" />
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
      <!-- 第二栏 -->
      <el-col :span="12">
        <el-card style="margin: 1%;">
          <!-- Pool -->
          <el-descriptions class="margin-top" title="Pool" :column="3" border>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                最大并发数
              </template>
              {{ worker.stats.pool['max-concurrency'] }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                空闲线程数
              </template>
              {{ worker.stats.pool['free-threads'] }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                运行中线程数
              </template>
              {{ worker.stats.pool['running-threads'] }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Worker PID
              </template>
              {{ worker.stats.pid }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                预载入计数
              </template>
              {{ worker.stats.prefetch_count }}
            </el-descriptions-item>
          </el-descriptions>
          <!-- Broker -->
          <el-descriptions class="margin-top" title="Broker" :column="3" border>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                主机名
              </template>
              {{ worker.stats.broker.hostname }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                UserId
              </template>
              {{ worker.stats.broker.userid || 'N/A' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Virtual host
              </template>
              {{ worker.stats.broker.virtual_host }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Port
              </template>
              {{ worker.stats.broker.port }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Insist
              </template>
              {{ worker.stats.broker.insist == true ? 'True' : 'False' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                SSL
              </template>
              {{ worker.stats.broker.ssl == true ? 'True' : 'False' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Transport
              </template>
              {{ worker.stats.broker.transport }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Connect Timeout
              </template>
              {{ worker.stats.broker.connect_timeout }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Transport Options
              </template>
              {{ worker.stats.broker.transport_options }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Login method
              </template>
              {{ worker.stats.broker.login_method || 'N/A' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                URL Prefix
              </template>
              {{ worker.stats.broker.uri_prefix || 'N/A' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Heart Beat
              </template>
              {{ worker.stats.broker.heartbeat || 'N/A' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Failover strategy
              </template>
              {{ worker.stats.broker.failover_strategy || 'N/A' }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Alternates
              </template>
              {{ worker.stats.broker.alternates || 'N/A' }}
            </el-descriptions-item>
          </el-descriptions>
          <!-- Queues -->
          <el-descriptions title="Queues" :column="3" border>
            <el-descriptions-item>
              <template slot="label">
                <svg-icon icon-class="mem" />
                Alternates
              </template>
              {{ worker.stats.broker.alternates || 'N/A' }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    server: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      worker: null
    }
  },
  created() {
    this.getWorkerByName()
  },
  methods: {
    getWorkerByName() {
      if (this.server) {
        this.$api.worker.getWorkerByName(this.server.hostname).then(res => {
          if (res.code === 200) {
            this.worker = res.data
          } else {
            this.$message.error(res.message)
          }
        })
      }
    },
    getDashboardByHostname() {
      if (this.server) {
        this.$api.dashboard.getTableData({ hostname: this.server.hostname }).then(res => {
          if (res.code === 200) {
            this.server = res.data
          } else {
            this.$message.error(res.message)
          }
        })
      }
    },
    refresh() {
      this.getWorkerByName()
      this.getDashboardByHostname()
    }
  }
}
</script>

<style scoped>

</style>

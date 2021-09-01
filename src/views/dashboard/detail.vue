<template>
  <div>
    <el-card style="margin: 1%;">
      <el-descriptions class="margin-top" :title="server.hostname" :column="3" :size="size" border>
        <template slot="extra">
          <el-button type="primary" size="small">操作</el-button>
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
        <el-descriptions-item>
          <template slot="label">
            <svg-icon icon-class="gpu" />
            GPU
          </template>
          {{ server.device_info.gpu[0].name }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <svg-icon icon-class="mem" />
            GPU 内存
          </template>
          {{ Math.ceil(server.device_info.gpu[0].total / 1024) }} GB
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
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
  }
}
</script>

<style scoped>

</style>

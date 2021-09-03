<template>
  <div class="outer">
    <el-card style="margin: 1%;">
      <div slot="header" class="clearfix">
        <span>Active</span>
      </div>
      <BasicAreaChart />
    </el-card>
    <el-card style="margin: 1%;">
      <div slot="header" class="clearfix">
        <span>CPU Usage</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import BasicAreaChart from '@/components/MonitorChart/BasicAreaChart'
export default {
  name: 'Index',
  components: {
    BasicAreaChart
  },
  data() {
    return {
    }
  }
}
</script>

<style>
  .outer {
    height: auto;
  }
</style>

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
        <span></span>
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
      chartData: [820, 932, 901, 934, 1290, 1330, 1320],
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      title: { show: true, text: '测试' }
    }
  }
}
</script>

<style>
  .outer {
    height: auto;
  }
</style>

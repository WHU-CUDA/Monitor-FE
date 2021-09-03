<template>
  <div id="container" />
</template>
<script>
import { Line } from '@antv/g2plot'

export default {
  data() {
    return {
      line: null,
      dataList: []
    }
  },
  mounted() {
    this.initLine()
  },
  methods: {
    initLine() {
      this.$api.dashboard.getTableData({ 'usage': 1 }).then(res => {
        const data = []
        for (let i = 0; i < res.data.length; i++) {
          const usage = res.data[i].device_info.cpu.usage
          const date = res.data[i].date
          const hostname = res.data[i].hostname
          data.push({ usage, date, hostname })
        }
        const line = new Line('container', {
          data: data,
          xField: 'date',
          yField: 'active',
          seriesField: 'hostname',
          title: {
            text: 'Active'
          },
          xAxis: {
            label: {
              formatter: (v) => this.$moment(v * 1000).format('YYYY-MM-DD HH:mm:ss')
            }
          },
          yAxis: {
            label: {
              // 数值格式化为千分位
              formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
            }
          },
          smooth: true
        })
        this.line = line
        line.render()
      })
    }
  }
}
</script>

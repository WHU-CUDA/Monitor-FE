<template>
  <div id="container" />
</template>

<script>
import { Line } from '@antv/g2plot'

export default {
  data() {
    return {
      line: null,
      dataList: [],
      interval: null
    }
  },
  created() {
    this.initLine()
    this.interval = setInterval(() => {
      this.$api.dashboard.getTableData({ 'usage': 1 }).then(res => {
        if (res.code === 200) {
          this.dataList.push(...res.data)
          this.line.changeData(this.dataList)
        }
      })
    }, 5000)
  },
  beforeDestroy() {
    window.clearInterval(this.interval)
  },
  methods: {
    getData() {
      // generate an array of random data
      this.$api.dashboard.getTableData({ 'usage': 1 }).then(res => {
        if (res.code === 200) {
          this.dataList.push(...res.data)
        }
      })
    },
    initLine() {
      this.$api.dashboard.getTableData({ 'usage': 1 }).then(res => {
        const line = new Line('container', {
          data: res.data,
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

<style>

</style>

<template>
  <div class="broker">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: bolder">Broker  {{ brokerURL }}</span>
      </div>
      <BrokerTable :table-data="queues" />
    </el-card>
  </div>
</template>

<script>
import BrokerTable from '@/components/BrokerTable'
export default {
  components: {
    BrokerTable
  },
  data() {
    return {
      brokerURL: '',
      queues: []
    }
  },
  mounted() {
    this.getBrokers()
  },
  methods: {
    getBrokers() {
      this.$api.broker.getBrokerData().then(res => {
        if (res.code === 200) {
          this.brokerURL = res.data.broker_url
          this.queues = res.data.queues
        }
      })
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 90%;
  margin-left: 5%;
  margin-top: 1%;
}
</style>

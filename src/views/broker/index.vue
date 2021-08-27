<template>
  <div class="broker">
    <div v-for="(item, key) in listData" :key="key">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Broker:{{ item.conf.broker_url }}</span>
          <BrokerTable :table-data="item.conf.task_queues" />
        </div>
      </el-card>
    </div>
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
      listData: []
    }
  },
  mounted() {
    this.getBrokers()
  },
  methods: {
    getBrokers() {
      this.$api.broker.getBrokerData().then(res => {
        for (const key in res) {
          this.listData.push(res[key])
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

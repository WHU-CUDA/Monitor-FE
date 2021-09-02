<template>
  <div class="app-container">
    <el-pagination
      :current-page="start"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="length"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-table
      v-loading="listLoading"
      class="tableBox"
      :data="list"
      element-loading-text="Loading"
      border
      :cell-style="{padding: '0'}"
      fit
      highlight-current-row
    >
      <el-table-column
        label="UUID"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.uuid }}
        </template>
      </el-table-column>
      <el-table-column label="Name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column width="100" label="Stats">
        <template slot-scope="scope">
          <el-tag
            :type="tagTypeTable[scope.row.state]"
            effect="dark"
          >
            {{ scope.row.state }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="args">
        <template slot-scope="scope">
          {{ scope.row.args }}
        </template>
      </el-table-column>

      <el-table-column label="Kwargs">
        <template slot-scope="scope">
          {{ scope.row.kwargs }}
        </template>
      </el-table-column>

      <el-table-column width="500" label="Result">
        <template slot-scope="scope">
          {{ scope.row.result }}
        </template>
      </el-table-column>

      <el-table-column label="Received">
        <template slot-scope="scope">
          {{ formatDate(scope.row.received) }}
        </template>
      </el-table-column>

      <el-table-column label="Started">
        <template slot-scope="scope">
          {{ formatDate(scope.row.started) }}
        </template>
      </el-table-column>
      <el-table-column label="Succeeded">
        <template slot-scope="scope">
          {{ formatDate(scope.row.succeeded) }}
        </template>
      </el-table-column>
      <el-table-column label="Runtime">
        <template slot-scope="scope">
          {{ scope.row.runtime }}
        </template>
      </el-table-column>

      <el-table-column label="Worker">
        <template slot-scope="scope">
          {{ scope.row.worker }}
        </template>
      </el-table-column>
      <el-table-column
        align="left"
      >
        <template slot="header" slot-scope="">
          <el-input
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const tagTypeTable = {
  'SUCCESS': 'success'
}
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      tagTypeTable,
      start: 0,
      length: 10,
      total: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.$api.table.getList({ start: this.start, length: this.length }).then(response => {
        if (response.code === 200) {
          this.list = response.data.tasks
          this.total = response.data.total
          this.listLoading = false
        }
        this.listLoading = false
      })
    },
    len(arr) {
      if (arr === null || arr === undefined) {
        return 0
      }
      return arr.length
    },
    handleSizeChange(val) {
      this.length = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.start = val
      this.fetchData()
    },
    formatDate(s) {
      if (s) {
        return this.$moment(s * 1000).format('YYYY-MM-DD HH:mm:ss')
      } else {
        return 'N/A'
      }
    }
  }
}
</script>

<style lang="scss">
  .tableBox {
    th {
      padding:10px 0 !important;
    }

    td {
      padding: 0 !important;
    }
  }
</style>

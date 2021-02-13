<template>
  <div class="study">
    <div class="decoration">
      <div class="decoration-chart">
        <apexchart
          type="treemap"
          height="100%"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div class="decoration-calendar">
        <el-calendar v-model="calendarVal"></el-calendar>
      </div>
    </div>
    <div class="content">
      <ul class="content-item" v-for="i in count" :key="i">
        <li>{{ i }}</li>
        <el-divider content-position="center">我是分割线</el-divider>
      </ul>
      <el-backtop target=".content" style="right: 90px; bottom: 25px"></el-backtop>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
export default defineComponent({
  name: 'Study',
  setup() {
    /**
     * apexchart
     */
    const chartConfig = reactive({
      series: [
        {
          data: [
            {
              x: 'html',
              y: 218,
            },
            {
              x: 'css',
              y: 149,
            },
            {
              x: 'javascript',
              y: 84,
            },
            {
              x: 'typescript',
              y: 55,
            },
            {
              x: 'nodejs',
              y: 84,
            },
            {
              x: 'koajs',
              y: 31,
            },
            {
              x: 'nestjs',
              y: 70,
            },
            {
              x: 'vuejs',
              y: 80,
            },
            {
              x: 'reactjs',
              y: 44,
            },
            {
              x: 'algorithm',
              y: 68,
            },
            {
              x: 'design',
              y: 48,
            },
          ],
        },
      ],
      chartOptions: {
        legend: {
          show: false,
        },
        title: {
          text: 'Distibuted Treemap',
          align: 'left',
          margin: 0,
          offsetX: 0,
          offsetY: 10,
          style: {
            color: '#388bfc',
          },
        },
        chart: {
          toolbar: {
            offsetY: 8,
            style: {
              color: 'red',
            },
          },
        },
        theme: {
          palette: 'palette4',
        },
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false,
          },
        },
      },
    })

    /**
     * calendar
     */
    const calendarVal = ref<Date>(new Date())

    /**
     * content
     */
    const count = ref<number>(50)

    return {
      ...toRefs(chartConfig),
      calendarVal,
      count,
    }
  },
})
</script>

<style lang="less" scoped>
@import './index.less';
</style>

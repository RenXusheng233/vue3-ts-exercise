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
      <el-backtop target=".content" style="right: 70px; bottom: 25px"></el-backtop>
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
              x: 'New Delhi',
              y: 218,
            },
            {
              x: 'Kolkata',
              y: 149,
            },
            {
              x: 'Mumbai',
              y: 184,
            },
            {
              x: 'Ahmedabad',
              y: 55,
            },
            {
              x: 'Bangaluru',
              y: 84,
            },
            {
              x: 'Pune',
              y: 31,
            },
            {
              x: 'Chennai',
              y: 70,
            },
            {
              x: 'Jaipur',
              y: 30,
            },
            {
              x: 'Surat',
              y: 44,
            },
            {
              x: 'Hyderabad',
              y: 68,
            },
            {
              x: 'Lucknow',
              y: 28,
            },
            {
              x: 'Indore',
              y: 19,
            },
            {
              x: 'Kanpur',
              y: 29,
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

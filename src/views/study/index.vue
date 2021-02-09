<template>
  <div class="study">
    <div class="decoration">
      <div class="decoration-outline">
        <div class="list">list</div>
        <div class="label">label</div>
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
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Study',
  setup() {
    const calendarVal = ref<Date>(new Date())

    const count = ref<number>(50)

    return {
      calendarVal,
      count,
    }
  },
})
</script>

<style lang="less" scoped>
@import './index.less';
</style>

<template>
  <div class="study">
    <div class="decoration"></div>
    <div class="content">
      <ul class="content-item" v-for="i in count" :key="i">
        <li>{{ i }}</li>
        <el-divider content-position="center">我是分割线</el-divider>
      </ul>
      <el-backtop target=".content" style="right: 20px; bottom: 36px"></el-backtop>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Study',
  setup() {
    const count = ref<number>(50)

    return {
      count,
    }
  },
})
</script>

<style lang="less" scoped>
@import './index.less';
</style>

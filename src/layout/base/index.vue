<template>
  <div class="base-layout">
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer v-if="route.name === 'Welcome'">
      <div>
        <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2020040557号-1</a>
        <div>No One ©{{ curYear }} Created by No One</div>
      </div>
    </el-footer>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import LayoutHeader from '../header/index.vue'
export default defineComponent({
  name: 'base-layout',
  components: { LayoutHeader },
  setup() {
    /**
     * footer 相关
     */
    const route = useRoute()
    // 获取当前年份
    const curYear = ref(dayjs().year())

    return {
      route,
      curYear,
    }
  },
})
</script>

<style lang="less">
@import './index.less';
</style>

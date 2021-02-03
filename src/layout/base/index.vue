<template>
  <div class="base-layout">
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>
      <router-view style="background-color: #0d1117"></router-view>
    </el-main>
    <el-footer v-if="route.name === 'Welcome'">
      <div>
        <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2020040557号-1</a>
        <div>No One ©2020 Created by No One</div>
      </div>
    </el-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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

    return {
      route,
    }
  },
})
</script>

<style lang="less">
@import './index.less';
</style>

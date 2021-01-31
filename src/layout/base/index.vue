<template>
  <div class="base-layout">
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from '../header/index.vue'
export default defineComponent({
  name: 'base-layout',
  components: { LayoutHeader },
})
</script>

<style lang="less">
@import './index.less';
</style>

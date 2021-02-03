<template>
  <div class="header-layout">
    <div class="title" @click="handlePushHome">
      <img class="title-logo" src="../../assets/logo.svg" alt="Logo" />
      <div class="title-text">noOne's 小黑屋</div>
    </div>
    <div class="menu">
      <el-menu
        mode="horizontal"
        background-color="#161B22"
        text-color="rgba(255, 255, 255, 0.65)"
        active-text-color="#F0F6FC"
        :default-active="activeIndex"
        @select="handleSelect"
        :router="true"
      >
        <el-menu-item v-for="item in headerMenu" :key="item.title" :index="item.index">
          <i :class="item.icon"></i>
          <template v-slot:title>
            <span class="menu-title">{{ item.title }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import headerMenu from '../../consts/headerMenu'
export default defineComponent({
  name: 'header-layout',
  setup() {
    /**
     * title 相关
     */
    const router = useRouter()
    // 点击 title, 返回 welcome 页
    const handlePushHome = () => {
      router.push('/')
    }

    /**
     * menu 相关
     */
    const activeIndex = ref<string>('')

    // 监听 route.path, 更新activeIndex
    const route = useRoute()
    const stopWatchMenu = watchEffect(() => {
      const cur = headerMenu.find((item) => item.index === route.path)
      activeIndex.value = cur?.index || ''
    })
    onUnmounted(() => {
      stopWatchMenu()
    })
    // 点击 menu 菜单
    const handleSelect = (key: string): void => {
      const cur = headerMenu.find((item) => item.index === key)
      router.push(cur?.index || '/')
    }

    return {
      handlePushHome,
      headerMenu,
      activeIndex,
      handleSelect,
    }
  },
})
</script>

<style lang="less">
@import './index.less';
</style>

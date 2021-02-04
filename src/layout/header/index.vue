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
        active-text-color="#f0f6fc"
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
    <div class="search">
      <el-input
        v-model="searchWord"
        size="mini"
        placeholder="Search or jump to..."
      ></el-input>
    </div>
    <div class="switch">
      <el-switch
        v-model="themeSwitch"
        active-color="#0d1117"
        active-text="dark"
        inactive-color="#0d1117"
        inactive-text="light"
        @change="handleThemeChange"
      ></el-switch>
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
      if (cur?.link) {
        window.open(cur.link, '_blank')
        return
      }
      router.push(cur?.index || '/')
    }

    /**
     * 搜索输入框
     */
    const searchWord = ref('')

    /**
     * switch 切换主题
     * 默认为 dark 主题
     */
    const themeSwitch = ref(true)
    const handleThemeChange = (val: Boolean) => {
      if (!val) {
        document.documentElement.setAttribute('theme', 'light')
      } else {
        document.documentElement.removeAttribute('theme')
      }
    }

    return {
      handlePushHome,
      headerMenu,
      activeIndex,
      handleSelect,
      searchWord,
      themeSwitch,
      handleThemeChange,
    }
  },
})
</script>

<style lang="less">
@import './index.less';
</style>

<template>
  <div class="welcome">
    <h1 class="welcome-title">Hi there</h1>
    <div class="welcome-content">
      <p>ヾ(◍°∇°◍)ﾉﾞ</p>
      <p>你看到我了</p>
      <p>写代码很开心</p>
      <p>生活不易, 不要为难自己</p>
      <p>希望你今天有一个好心情</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import http from '../../api/intercept'

export default defineComponent({
  name: 'welcome',

  setup() {
    const fetchWelcomeWord = async () => {
      const res = await http.get('welcome')
      console.log(res)
    }
    fetchWelcomeWord()
  },
})
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>

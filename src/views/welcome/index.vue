<template>
  <div class="welcome">
    <h1 class="welcome-title">Hi there</h1>
    <div class="welcome-content">
      <p>Hello world!</p>
      <p>Let nature take its right course.</p>
      <p>ヾ(◍°∇°◍)ﾉﾞ</p>
      <p>I'm currently learning Nest and Vue3.</p>
      <p>Also, I plan to study Algorithm and Typescript.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'welcome',
})
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>

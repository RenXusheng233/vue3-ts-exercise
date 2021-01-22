<template>
  <!-- FIXME: 竟然不支持v-model:xxx的写法??? -->
  <el-input placeholder="请输入" v-model="test"></el-input>
  <HelloWorld msg="hello !!"></HelloWorld>
  <el-button type="primary">主页</el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const test = ref('home~~')
    return {
      test,
    }
  },
})
</script>

<style lang="less" scoped></style>

<template>
  <div class="home">home</div>
  <HelloWorld msg="hello !!"></HelloWorld>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>

<style lang="less" scoped></style>

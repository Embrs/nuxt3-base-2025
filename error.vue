<script setup lang="ts">
// Error 請填寫功能描述👈
const props = defineProps<{
  error: { statusCode: Number, statusMessage: string }
}>();
const HandleError = () => {
  clearError({ redirect: '/' });
};
</script>

<template lang="pug">
#Error
  p.title {{ props.error.statusCode }}
  p.msg {{ props.error.statusMessage }}
  p.go-home-btn(
    color="#eee"
    class="border-white rounded border px-4 py-2"
    @click="HandleError"
  ) 回到首頁
</template>

<style lang="scss" scoped>
// 佈局 ----
#Error {
  @include wh(100vw, 100vh);
  @include center(10px, column);
  color: white;
  background-color: $primary;
  // TODO
}

// 組件 ----
.title {
  @include fs(100px);
  font-weight: 900;
}
.msg {
  @include fs(30px);
}
.go-home-btn {
  cursor: pointer;
  @include fs(20px);
}
</style>

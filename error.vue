<script setup lang="ts">
// Error 請填寫功能描述👈
type Props = {
  error: { statusCode: Number, statusMessage: string }
}
const props = defineProps<Props>();
const HandleError = () => {
  clearError({ redirect: '/' });
};
</script>

<template>
<div id="Error">
  <p class="title">{{ props.error.statusCode }}</p>
  <p class="msg">{{ props.error.statusMessage }}</p>
  <p class="go-home-btn " @click="HandleError">回到首頁</p>
</div>
</template>

<style lang="scss" scoped>
// 佈局 ----
#Error {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  color: white;
}

// 組件 ----
.title {
  font-size: 100px;
  font-weight: 900;
}
.msg {
  font-size: 30px;
}
.go-home-btn {
  cursor: pointer;
  font-size: 20px;
}
</style>

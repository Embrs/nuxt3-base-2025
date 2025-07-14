<script setup lang="ts">
// PageDemoSafety 安全機制
const valObj = ref({
  base64: { val: '', encode: '', decode: '' },
  aes256: { val: '', encode: '', decode: '', createKeyIv: '' }
});

const Base64Encode = () => {
  valObj.value.base64.encode = $safety.base64.Encode(valObj.value.base64.val);
};
const Base64Decode = () => {
  valObj.value.base64.decode = $safety.base64.Decode(valObj.value.base64.encode);
};

</script>

<template lang="pug">
.PageDemoSafety
  p PageDemoSafety
  .row-item
    p base64
    input(v-model="valObj.base64.val")
    button(@click="Base64Encode") Encode
    button(@click="Base64Decode") Decode
  pre {{ valObj }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoSafety {
  // TODO
}

// 組件 ----
.row-item {
  @include row(10px);
  margin: 10px;
  padding: 10px;
  input {
    border: 1px solid $primary
  }
}
</style>

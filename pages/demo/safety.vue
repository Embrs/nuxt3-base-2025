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

const AES256Encode = () => {
  valObj.value.aes256.encode = $safety.aes256.Encode(valObj.value.aes256.val);
};
const AES256Decode = () => {
  valObj.value.aes256.decode = $safety.aes256.Decode(valObj.value.aes256.encode);
};

const AES256KeyIv = () => {
  valObj.value.aes256.createKeyIv = safety.aes256.CreateKeyIV();
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

  .row-item
    p aes256
    input(v-model="valObj.aes256.val")
    button(@click="AES256Encode") Encode
    button(@click="AES256Decode") Decode
    button(@click="AES256KeyIv") Create Key Iv
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

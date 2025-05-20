<script setup lang="ts">
// DemoPageEditor 請填寫功能描述👈
// import TinymceEditor from '@/components/common/tinymce-editor/index.vue';
const content = ref('');
const showEdit = ref(true);

onBeforeRouteLeave(() => {
  showEdit.value = false;
  setTimeout(() => {
    return false;
  }, 400);
});

onMounted(() => {
  showEdit.value = true;
});
</script>

<template lang="pug">
#DemoPageEditor
  p DemoPageEditor
  .eidtor
    ClientOnly
      div
        b Edit
        TinymceEditor(
          v-show="showEdit"
          v-model="content"
        )
    .dif
      b Show
      .content
        TinymceView(v-model="content")
  b Code
  input(
    v-model="content"
    :rows="10"
    type="textarea"
    placeholder="Please input"
  )
</template>

<style lang="scss" scoped>
// 佈局 ----
#DemoPageEditor {
  padding: 10px;
  // TODO
  .eidtor {
    height: 430px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .content {
    max-height: 400px;
    height: 100%;
    overflow: auto;
    background-color: #fff;
  }
  input {
    width: 100%;
    border: 1px solid var(--primary);
  }
}

// 組件 ----
</style>

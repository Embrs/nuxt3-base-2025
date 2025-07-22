<template lang="pug">
Transition(name="com")
  Suspense
    slot
    template(#fallback)
      .LoadingCom(v-loading="true")
</template>

<style lang="scss" scoped>
// 佈局 ----
.LoadingCom {
  @include wh;
  @include center;
  @include fs(40px);
}
// 組件 ----

</style>

<template>
<div class="LoadingCom">
  <Transition name="page">
    <Suspense>
      <slot />
      <template #fallback>
        <div class="LoadingCom">v-loading="true")</div>
      </template>
    </Suspense>
  </Transition>
</div>
</template>

<style lang="scss" scoped>
// 佈局 ----
.LoadingCom {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
// 組件 ----

</style>

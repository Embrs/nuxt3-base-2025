// 延遲渲染
// 宣告 const $defer = UseDefer();
// 用法： v-if="IsDefer(n)"
import { ref } from 'vue';
// 函數接收一個參數，表示監測的最大幀數，這裡預設值是 1000
// 如果說你渲染的東西特別多可以傳入一個值
export const UseDefer = (maxFrameCount = 1000) => {
  // 然後開始計數
  const frameCount = ref(0);
  const refreshFrameCount = () => {
    requestAnimationFrame(() => {
      // 每一次 requestAnimationFrame 就計數加一
      // 表示目前渲染的幀數變多了一幀
      frameCount.value++;
      // 只要當前幀數小於最大幀數就遞歸執行
      if (frameCount.value < maxFrameCount) {
        refreshFrameCount();
      }
    });
  };
  if (import.meta.client && !!requestAnimationFrame) {
    refreshFrameCount();
  }
  const IsDefer = (showInFrameCount: number) => {
    // 判斷目前渲染的幀數有沒有大於 n
    return frameCount.value >= showInFrameCount;
  };
  // 傳回一個函數，接收傳遞進來的 n
  return {
    IsDefer
  };
};

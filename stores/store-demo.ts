// export const storeDemo = () => useState('storeDemo', () => {}); // 不可用，有 bug
// pinia define store
// 宣告 const storeDemo = StoreDemo();
export const StoreDemo = defineStore('StoreDemo', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const Add = () => { count.value++; };
  return { count, doubleCount, Add };
});

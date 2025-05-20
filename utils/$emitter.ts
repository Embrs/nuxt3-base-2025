import mitt from 'mitt';

const emitter = mitt<ApplicationEvents>();

export default emitter;
/** 使用說明
  const Fn = () => {};
  const Fn2 = () => {};

  onMounted(() => {
    mitt.on('refresh', Fn1);
    mitt.on('refresh', Fn2);
  })

  onBeforeUnmount(() => {
    mitt.off('refresh', Fn1); // 指定當下Fn1關閉
    mitt.off('refresh'); // 全部 Fn1 Fn2 關閉
  });
*/

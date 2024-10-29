import mitt from 'mitt';

// 為 mitt 方法標註類型
type ApplicationEvents = {
  'refresh': any, // 刷新數據
  'reload': any, // 重加载
};

export default defineNuxtPlugin(() => {
  const emitter = mitt<ApplicationEvents>();
  return {
    provide: {
      emits: emitter.emit, // 觸發事件方法 $emits
      on: emitter.on // 監聽事件方法 $on
    }
  };
});

// https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
export default defineNuxtPlugin((nuxtApp) => {
  // 從哪進入
  nuxtApp.vueApp.directive('from', {
    mounted (el, binding) {
      // 綁定目標進入畫面時觸發
      const OnIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: any) => {
          // 進入判定點後
          if (entry.intersectionRatio > 0) {
            // 依據延遲，執行動畫
            const delay = binding.value[2] || 0;

            setTimeout(() => {
              el.style.opacity = 1;
              TrigAnimate(entry.target);
              // 執行動畫後，解除偵測
              observer.unobserve(entry.target);
              // 關閉觀察器
              observer.disconnect();
            }, delay);
          }
        });
      };

      const TrigAnimate = (target: any) => {
        // 依據 RWD 放大位移量
        let scaleUp = 1;
        if (window && window.innerWidth > 768) scaleUp = 1.2;
        if (window && window.innerWidth > 1440) scaleUp = 1.4;

        const x = binding.value[0] * scaleUp || 0; // 位移距離
        const y = binding.value[1] * scaleUp || 0;

        const moveXAnimation = {
          transform: ['translate3d(0,0,0)', `translate3d(${x}px,${y}px,0)`],
          opacity: [1, 0]
        };
        const animateOption = {
          easing: 'ease-in',
          direction: 'reverse',
          duration: 1000
        };

        const isTranslate = typeof binding.value[0] === 'number';
        if (isTranslate) {
          // 若傳入數字，則為預設位移動畫
          target.animate(moveXAnimation, animateOption);
        } else {
          // 若傳入函示，則為自訂動畫
          binding.value[0](target);
        }
      };

      el.style.opacity = 0;
      const observer = new IntersectionObserver(OnIntersection, {
        root: null, // 觀察範圍 viewport。預設為瀏覽器
        rootMargin: '-30px', // 偵測範圍內縮
        threshold: 0.1 // 目標可見度為 10% 時就觸發
      });

      observer.observe(el);
    }
  });
  // -----------------------------------------------------------------------------------------------
});

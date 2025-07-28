// https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
// 未滾到底部，出現 [M O R E] 的提示
// <div v-scroll-more></div>
// <div v-scroll-more="{ lisent: 'parent', show: 'content' }"></div>
// lisent: 監聽滾動 el 下哪個 class
// show: 顯示在 el 下哪個 class
export default defineNuxtPlugin((nuxtApp) => {
  // 從哪進入
  nuxtApp.vueApp.directive('scroll-more', {
    mounted (el, binding) {
      const lisentClass = binding.value?.lisent || ''; // 監聽滾動
      const showClass = binding.value?.show || ''; // 顯示
      // true 會取 parent
      const _scrollEl = lisentClass ? el.closest(lisentClass) || el : el;
      const _contentEl = showClass ? el.closest(showClass) || el : el;

      // 建立 MORE 容器
      const moreContainer = document.createElement('div');
      Object.assign(moreContainer.style, {
        position: 'sticky',
        bottom: '0',
        zIndex: '10',
        pointerEvents: 'none',
        mixBlendMode: 'multiply',
        opacity: '0',
        transition: 'opacity .4s ease'
      });

      // 建立 MORE 偽元素樣式
      const moreIndicator = document.createElement('div');
      moreIndicator.textContent = 'M O R E';
      Object.assign(moreIndicator.style, {
        position: 'absolute',
        bottom: '0',
        left: '0',
        fontSize: '20px',
        backgroundColor: '#aaa',
        color: '#fff',
        opacity: '0.3',
        pointerEvents: 'none',
        width: '100%',
        height: '34px',
        zIndex: '10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      });

      moreContainer.appendChild(moreIndicator);

      _contentEl.style.position = 'relative'; // 確保容器有定位基準
      _contentEl.appendChild(moreContainer);

      const CheckScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = _scrollEl;
        if (scrollHeight - scrollTop > clientHeight + 30) {
          moreContainer.style.opacity = '1';
        } else {
          moreContainer.style.opacity = '0';
        }
      };

      // 監聽滾動
      _scrollEl.addEventListener('scroll', CheckScroll);

      // 監聽尺寸
      const resizeObserver = new ResizeObserver(CheckScroll);
      resizeObserver?.observe(_scrollEl);

      const resizeObserverChildern = new ResizeObserver(CheckScroll);
      if (_scrollEl?.children?.[0]) {
        resizeObserver?.observe(_scrollEl.children[0]);
      }

      // 保存偽元素以便日後清理
      _scrollEl._moreIndicator = {
        moreContainer,
        CheckScroll,
        resizeObserver,
        resizeObserverChildern
      };

      // 初次檢查滾動狀態
      setTimeout(() => {
        CheckScroll();
      }, 400);
    },
    // 綁定元素的父元件卸載前調用
    beforeUnmount (el, binding) {
      const lisentClass = binding.value?.lisent || ''; // 監聽滾動
      const showClass = binding.value?.show || ''; // 顯示
      // true 會取 parent
      const _scrollEl = lisentClass ? el.closest(lisentClass) || el : el;
      const _contentEl = showClass ? el.closest(showClass) || _scrollEl : _scrollEl;
      // 清理偽元素及事件
      if (_scrollEl._moreIndicator) {
        _scrollEl.removeEventListener('scroll', _scrollEl._moreIndicator.CheckScroll);
        _contentEl.removeChild(_scrollEl._moreIndicator.moreContainer);
        _scrollEl._moreIndicator?.resizeObserver?.unobserve(_scrollEl);
        _scrollEl._moreIndicator?.resizeObserverChildern?.unobserve(_scrollEl);
        delete _scrollEl._moreIndicator;
      }
    }
  });
  // -----------------------------------------------------------------------------------------------
});

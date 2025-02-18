// 網頁基本屬性
export const UseInitWindow = () => {
  const storeTool = StoreTool();
  onMounted(() => {
    storeTool.SetDevice();
    storeTool.SetWindowWidth();
    window.addEventListener('resize', storeTool.SetWindowWidth);
    window.addEventListener('scroll', storeTool.SetWindowScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', storeTool.SetWindowWidth);
    window.addEventListener('scroll', storeTool.SetWindowScroll);
  });
};

// 宣告 const $demo = UseDemo();
export const UseDemo = async () => {
  console.log('hello');
  const route = useRoute();
  const setTitle = useState(`aaa${route.path}`, () => 'aaa');

  const ApiTest = () => {
    const _params = {
      account: '123',
      password: '123 '
    };
  };

  await useAsyncData(`init${route.path}`, async () => {
    await ApiTest();
    return true;
  });

  // setTitle.value = 'bbb';
  useHead({
    title: setTitle.value
  });

  return {};
};

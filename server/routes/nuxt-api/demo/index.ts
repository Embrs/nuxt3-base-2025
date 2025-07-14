// const res = await $fetch('/api/demo');

export default defineEventHandler((_event) => {
  console.log('use demo');
  return {
    is_success: true,
    route: '/aaa'
  };
});

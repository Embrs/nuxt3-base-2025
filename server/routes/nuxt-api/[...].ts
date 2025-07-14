export default defineEventHandler((event) => {
  console.log('err');
  // const body = await readBody(event);
  return { body: null, status: { is_success: false, message: 'API 不存在' } };
});

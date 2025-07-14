export default defineEventHandler((event) => {
  const cookies = parseCookies(event);
  console.log(cookies);
  return true;
});

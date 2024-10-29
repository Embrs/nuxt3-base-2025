const GetCookie = () => {
  const val = cookie.Get(cookie.keyMap.demo);
  console.log(val);
};
const SetCookie = () => {
  cookie.Set(cookie.keyMap.demo, inputVal.value);
};
const RemoveCookie = () => {
  cookie.Remove(cookie.keyMap.demo);
};
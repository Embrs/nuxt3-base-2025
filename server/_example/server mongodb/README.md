## Server API
```
https://www.letswrite.tw/mongodb-mac-docker-install/
https://www.mongodb.com/products/tools/compass
https://clairechang.tw/2023/09/22/nuxt3/nuxt-v3-mongodb-integration/#Step4%EF%BC%9A%E5%BB%BA%E7%AB%8B-Model-%E8%88%87-Collection
https://pjchender.dev/database/mongo-mongoose/

1. nuxt.config.ts

nitro: {
  plugins: [
    '@/server/index'
  ]
},

2. server mongodb 取代原本 server 資料夾

3. .env, MONGODB_URI 設定

4. 配合 mongodb : docker compose up 
```
```
const res = await $fetch('/nuxt/demo/123');
console.log(res);
```
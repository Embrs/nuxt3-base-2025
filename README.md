# Nuxt Minimal Starter
最小整合:
scss 組合
pug html 語法
visualizer 打包分析
pinia 


## Setup
Node version: v22.15.1
Nuxt version: v3.17.4

安裝
```bash
# npm
npm ci
```
運行
```bash
npm run dev
```

## docker 運行
- docker compose	使用 Docker Compose 來管理容器
- -f docker-compose.dev.yml	指定 docker-compose.dev.yml 作為設定檔
- up	啟動並管理設定檔中的容器
- --build	強制重新建置映像檔，即使它已經存在

```bash
docker compose -f docker-compose.dev.yml up --build
```

## docker 靜態網站打包
```bash
docker build -f Dockerfile.caddy -t nuxt3-caddy .
```

## docker 動態網站打包
```bash
docker build -t nuxt3 .
```



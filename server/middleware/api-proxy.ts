// server/middleware/api-proxy.ts
import { defineEventHandler, getRequestURL, proxyRequest } from 'h3';

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  // 僅攔截 /api 開頭的路徑
  if (!url.pathname.startsWith('/api/')) return;

  const config = useRuntimeConfig();
  const target = `${config.apiBase}${url.pathname}`;
  try {
    // 注意：查詢字串會自動包含在 proxyRequest 中
    return await proxyRequest(event, target, { fetch });
  } catch (error) {
    // 可記錄錯誤，或回傳自訂錯誤訊息
    setResponseStatus(event, 502); // Bad Gateway
    return { error: 'API Proxy Failed', detail: error instanceof Error ? error.message : String(error) };
  }
});

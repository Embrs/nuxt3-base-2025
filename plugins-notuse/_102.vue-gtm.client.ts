// import { createGtm } from '@gtm-support/vue-gtm';
// // https://github.com/gtm-support/vue-gtm

// export default defineNuxtPlugin((nuxtApp) => {
//   const { gtmId } = nuxtApp.$config.public;
//   const gtmList: string[] = [];
//   if (gtmId) gtmList.push(gtmId as string);

//   if (!gtmList.length) return;

//   nuxtApp.vueApp.use(
//     createGtm({
//       id: gtmList, // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
//       enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
//       debug: true, // Whether or not display console logs debugs (optional)
//       trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
//       // queryParams: {
//       //   // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
//       //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
//       //   gtm_preview: 'env-4',
//       //   gtm_cookies_win: 'x'
//       // },
//       // source: 'https://customurl.com/gtm.js', // Add your own serverside GTM script
//       // defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
//       // compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
//       // nonce: '2726c7f26c', // Will add `nonce` to the script tag
//       // loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
//       // vueRouter: router, // Pass the router instance to automatically sync with router (optional)
//       // ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
//     })
//   );
// });

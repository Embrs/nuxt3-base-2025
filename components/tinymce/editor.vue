<script setup lang="ts">
// TinymceEditor
import { reactive, ref, watch, toRefs } from 'vue';
// TinyMCE-Vue
import Editor from '@tinymce/tinymce-vue';
import tinymce from 'tinymce/tinymce';
import 'tinymce/models/dom';
// 外觀
import 'tinymce/skins/ui/oxide/content.css';
import 'tinymce/skins/ui/oxide/skin.css';
import 'tinymce/themes/silver';
// Icon
import 'tinymce/icons/default';

// 用到的外掛 https://www.tiny.cloud/docs/tinymce/6/plugins
import 'tinymce/plugins/emoticons'; // 表情符號
import 'tinymce/plugins/emoticons/js/emojis.js'; // 表情符號
import 'tinymce/plugins/table';
// import "tinymce/plugins/quickbars";

import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/link'; // 插入連結
import 'tinymce/plugins/image'; // 插入上傳圖片插件
import 'tinymce/plugins/media'; // 插入視頻插件
import 'tinymce/plugins/preview'; // 預覽
import 'tinymce/plugins/code'; // 代碼

// 語言包
import zhTW from './zh_TW';
tinymce.addI18n('zh_TW', zhTW);
//  -------------------------------------------------------------------------------------------------
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);
const editorValue = ref(modelValue.value);
const editorId = ref();
// 上傳圖片
// const ImageUpload = (blobInfo:any, progress:any) =>{
//   console.log(blobInfo, progress);
//   // const img = "data:image/jpeg;base64," + blobInfo.base64();
//   // resolve(img);
// };

const init = reactive({
  language: 'zh_TW',
  height: '400px',
  menubar: false,
  content_css: false,
  skin: false,
  plugins: 'emoticons table link image media preview lists advlist code',
  toolbar: 'fontsize fontfamily | h2 h3 h4 h5 h6|bold italic underline strikethrough forecolor backcolor | align | bullist numlist outdent indent | link image media emoticons | table | undo redo | removeformat | preview | code',
  toolbar_mode: 'wrap',
  quickbars_insert_toolbar: false,
  branding: false,
  autosave_ask_before_unload: false, // 去除關閉/刷新網頁時彈出對話框
  indentation: '35px', // 縮排
  font_size_formats: '12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px 38px 40px',
  // 字型
  font_family_formats: 'NotoSansTC=Noto Sans TC; NotoSans=Noto Sans',
  // 顏色
  color_map: [
    '240507', 'primary-900',
    '480A0E', 'primary-800',
    '6B1016', 'primary-700',
    '8F151D', 'primary-600',
    'B31A24', 'primary-500',
    'E02A36', 'primary-400',
    'E85F68', 'primary-300',
    'F0949A', 'primary-200',
    'F7CACD', 'primary-100',

    '2D200B', 'secondary-900',
    '5A4015', 'secondary-800',
    '876020', 'secondary-700',
    'B47F2A', 'secondary-600',
    'D39C43', 'secondary-500',
    'DCB069', 'secondary-400',
    'E5C48E', 'secondary-300',
    'EDD7B4', 'secondary-200',
    'F6EBD9', 'secondary-100',

    '49340D', 'tertiary-900',
    '92671B', 'tertiary-800',
    'D89A2C', 'tertiary-700',
    'E6BD75', 'tertiary-600',
    'F3E0BE', 'tertiary-500',
    'F5E6CB', 'tertiary-400',
    'F8ECD8', 'tertiary-300',
    'FAF3E5', 'tertiary-200',
    'FDF9F2', 'tertiary-100',

    'D90000', 'error',
    '413737', 't-dark',
    '949494', 't-gray',
    'FFFFFF', 't-white',
    'FDF9F2', 'bg',
    'FFFFFF', 'bg-white'
  ],
  formats: {
    h1: { block: 'h1', styles: { 'font-size': '48px' } },
    h2: { block: 'h2', styles: { 'font-size': '40px' } },
    h3: { block: 'h3', styles: { 'font-size': '36px' } },
    h4: { block: 'h4', styles: { 'font-size': '28px' } },
    h5: { block: 'h5', styles: { 'font-size': '24px' } },
    h6: { block: 'h6', styles: { 'font-size': '20px' } }
  },
  // style 樣式
  content_style: `
  @import 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap';
  @import 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&family=Noto+Sans:ital,wght@0,400;0,700;1,600&display=swap';

    *                  { letter-spacing: .1em; font-family: Noto Sans TC; color: #413737}
    img                { max-width:100%; display:block; height:auto; object-fit:cover }
    a                  { text-decoration: none; }
    p                  { line-height:1.4; margin: 0px; font-size: 16px;}
    table              { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
    .mce-object-iframe {
      width: 100%;
      max-width: 600px;
      box-sizing:border-box;
      margin:0 auto;
      padding:0;

    }
    iframe {
      width: 100%;
      max-width: 600px;
    }

    article { white-space: normal !important; }

    ul,ol {
      margin: 0px;
      padding-inline-start: 26px;
    }
    td, pre {
      font-size: 16px;
      margin: 0;
    }
    h1, h2, h3, h4, h5, h6 { margin: 0px; font-weight: bold;}
  `,
  paste_data_images: true, // 允許粘貼圖像
  automatic_uploads: true,
  images_file_types: 'jpg,svg,webp',
  // https://www.tiny.cloud/docs/tinymce/6/image/
  file_picker_types: 'image',
  file_picker_callback: (cb: any, value: any, meta: any) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.addEventListener('change', (e:any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const id = 'blobid' + (new Date()).getTime();
        // @ts-ignore
        const blobCache = tinymce.activeEditor.editorUpload.blobCache;
        // @ts-ignore
        const base64 = reader.result.split(',')[1];
        const blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), { title: file.name });
      });
      reader.readAsDataURL(file);
    });
    input.click();
  },
  setup (editor: any) {
    editor.on('init', function (args: any) {
      editorId.value = args.target.id;
    });
  }
});

watch(modelValue, (newValue) => {
  editorValue.value = newValue;
});

watch(editorValue, (newValue) => {
  emit('update:modelValue', newValue);
});

</script>

<template lang="pug">

#TinymceEditor
  Editor(v-model="editorValue" :init="init")
</template>

<style lang="scss" scoped>
// 組件
:deep(.tox-tinymce) {
  border-radius: 0;
}
:deep(.tox .tox-tbtn) {
  height: 18px;
}
:deep(.tox .tox-toolbar, .tox .tox-toolbar__primary, .tox .tox-toolbar__overflow) {
  background-image: repeating-linear-gradient(#e3e3e3 0 1px, transparent 1px 29px);
  background-position: center top 29px;
}
:deep(.tox .tox-toolbar__group) {
  padding: 0 6px;
}
:deep(.tox-editor-header) {
  padding: 0 !important;
}
</style>

// Form 驗證集合
// https://github.com/yiminghe/async-validator
export const UseVerify = () => {
  const enter = computed(() => ({ required: true, message: '請輸入', trigger: 'change' }));
  const select = computed(() => ({ required: true, message: '請選擇', trigger: 'change' }));
  const string = computed(() => ({ required: true, message: '請輸入', type: 'string', trigger: 'change' }));
  const boolean = computed(() => ({ required: true, message: '請選擇', type: 'boolean', trigger: 'change' }));
  const number = computed(() => ({ required: true, message: '請輸入數字', type: 'number', trigger: 'change' }));
  const numberText = computed(() => ({ required: true, message: '請輸入數字', pattern: /^\d+$/, trigger: 'change' }));
  const mail = computed(() => ({ required: true, message: '請輸入電子郵件', type: 'email', trigger: 'change' }));
  return {
    enter,
    select,
    string,
    boolean,
    number,
    numberText,
    mail
  };
};

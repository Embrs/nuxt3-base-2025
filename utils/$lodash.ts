import debounce from 'lodash-es/debounce';
import throttle from 'lodash-es/throttle';
import cloneDeep from 'lodash-es/cloneDeep';
import omit from 'lodash-es/omit';
import pick from 'lodash-es/pick';

export default {
  /** 防抖 */
  debounce,
  /** 節流 */
  throttle,
  /** 深拷貝 */
  cloneDeep,
  /** 移除 key */
  omit,
  /** 選擇 key */
  pick
};

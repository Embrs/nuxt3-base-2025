```
export interface AnyObject {
  [key: string]: any;
}

export interface Status {
  data: any;
  code: string;
  details: Array<string>;
  err: number;
  unix?: number;
  aaa: typeof aaa
}

//---------------------------
import { ref } from "vue";
import type { Ref } from "vue";
export type { Ref }

interface SelectOption {
  label: string;
  value: string;
}

interface ResData {
  audioInList: Ref<SelectOption[]>;
  OnDeviceReady: DeviceIsReady;
  SetSinkId: SetSinkId;
}

interface DeviceIsReady {
  (callbackFn: any): void;
}

interface SetSinkId {
  (videoElement: any, audioOut: string): void;
}

function (): ResData {}
(): SelectOption[] => {}

(aa: string): Promise<string> => {new Promise(resolve => resolve("abc")) }


defineProps({
  infoData: {
    type: Object as () => JobData, // 自定義類型
    default: () => ({})
  },
  logoBg: {
    type: String,
    default: "#fff"
  }
});

const videoElement = ref<HTMLVideoElement | null>(null);
//---------------------------
const deviceList = ref<DeviceInfo[]>([]);

const stream = ref<MediaStream | undefined>();


```
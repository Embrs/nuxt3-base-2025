interface AnyObject {
  [key: string|number]: any;
}

interface ApiStatus {
  is_success: boolean,
  message?: string;
  detail?: string
  httpStatus?: number;
}

interface DefaultRes {
  data: any;
  status: ApiStatus;
}

interface FileProgress {
  upload?: number,
  download?: number
}
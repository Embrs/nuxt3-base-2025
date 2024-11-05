interface AnyObject {
  [key: string|number]: any;
}

interface DefaultRes {
  data: any;
  status: ApiStatus;
}

interface ApiStatus {
  is_success: boolean,
  message?: string;
  detail?: string
  httpStatus?: number;
}

interface FileProgress {
  upload?: number,
  download?: number
}
import * as demo from './api/demo';
import * as file from './api/file';
import * as auth from './api/auth';

export default {
  ...demo,
  ...file,
  ...auth
};

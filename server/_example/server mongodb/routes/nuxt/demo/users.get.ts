import { LazyElLink } from '../../../../.nuxt/components.d';
import user from '@/server/models/demo/user-model';

export default defineEventHandler(async (event: any) => {
  try {
    const { page, size } = getQuery(event);

    const limit = Number(size) ?? 5;
    const skip = limit * ((Number(page) ?? 1) - 1);
    const [_userList, total] = await Promise.all([user.find().skip(skip).limit(limit), user.countDocuments()]);
    if (!_userList) {
      return {
        data: { list: [], total: 0 },
        status: { is_success: false, message: '找不到資料' }
      };
    }
    const userList = _userList.map((item: any) => ({ id: item._id, name: item.name, email: item.email }));

    return {
      data: { list: userList, total },
      status: { is_success: true, message: '' }
    };
  } catch (error) {
    return { data: null, status: { is_success: false, message: '取得失敗' } };
  }
});

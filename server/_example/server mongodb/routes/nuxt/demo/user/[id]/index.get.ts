import user from '@/server/models/demo/user-model';

export default defineEventHandler(async (event: any) => {
  try {
    const _findUser = await user.findOne({ _id: event.context.params.id });
    if (!_findUser) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }
    const findUser = { id: _findUser._id, name: _findUser.name, email: _findUser.email };
    return { data: findUser, status: { is_success: true, message: '' } };
  } catch (error) {
    return { data: null, status: { is_success: false, message: '取得失敗' } };
  }
});

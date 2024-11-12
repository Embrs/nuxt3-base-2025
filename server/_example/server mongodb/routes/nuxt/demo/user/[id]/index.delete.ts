import user from '@/server/models/demo/user-model';

export default defineEventHandler(async (event: any) => {
  try {
    const delUser = await user.deleteOne({ _id: event.context.params.id });
    if (!delUser.deletedCount) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }
    return { data: null, status: { is_success: true, message: '' } };
  } catch (error) {
    return { data: null, status: { is_success: false, message: '刪除失敗' } };
  }
});

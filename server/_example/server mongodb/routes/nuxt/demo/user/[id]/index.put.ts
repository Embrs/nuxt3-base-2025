import user from '@/server/models/demo/user-model';

export default defineEventHandler(async (event: any) => {
  try {
    const { name, email } = await readBody(event);
    const findUser = await user.findOne({ _id: event.context.params.id });
    if (!findUser) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }
    await user.updateOne({ _id: event.context.params.id }, { name, email });
    return { data: null, status: { is_success: true, message: '' } };
  } catch (error) {
    return { data: null, status: { is_success: false, message: '更新失敗' } };
  }
});

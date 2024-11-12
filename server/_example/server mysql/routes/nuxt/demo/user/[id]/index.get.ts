import prisma from '@/server/db/prisma';

export default defineEventHandler(async (event: any) => {
  try {
    const findUser = await prisma.user.findUnique({ where: { id: Number(event.context.params.id) } });
    if (!findUser) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }
    return { data: findUser, status: { is_success: true, message: '' } };
  } catch (error) {
    console.log(error);
    return { data: null, status: { is_success: false, message: '取得失敗' } };
  }
});

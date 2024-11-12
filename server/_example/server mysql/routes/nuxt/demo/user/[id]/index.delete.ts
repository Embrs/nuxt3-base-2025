import prisma from '@/server/db/prisma';

export default defineEventHandler(async (event: any) => {
  try {
    const delUser = await prisma.user.delete({ where: { id: Number(event.context.params.id) } });
    if (!delUser) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }
    return { data: null, status: { is_success: true, message: '' } };
  } catch (error) {
    console.log(error);
    return { data: null, status: { is_success: false, message: '刪除失敗' } };
  }
});

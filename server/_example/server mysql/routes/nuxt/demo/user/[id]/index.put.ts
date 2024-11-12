import prisma from '@/server/db/prisma';

export default defineEventHandler(async (event: any) => {
  try {
    const { name, email } = await readBody(event);
    const updateUser = await prisma.user.update({
      where: {
        id: Number(event.context.params.id)
      },
      data: {
        name,
        email
      }
    });

    if (!updateUser) {
      return { data: null, status: { is_success: false, message: '找不到資料' } };
    }

    return { data: null, status: { is_success: true, message: '' } };
  } catch (error) {
    console.log(error);
    return { data: null, status: { is_success: false, message: '更新失敗' } };
  }
});

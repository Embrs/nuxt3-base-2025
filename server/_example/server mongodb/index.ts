import MongoInit from '@/server/db/mongo-init';

export default async () => {
  try {
    await MongoInit();
    console.log('DB init complete');
  } catch (err) {
    console.error('DB init failed', err);
  }
};

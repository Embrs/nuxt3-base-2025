import { CreateRes, ErrorRes } from '@/protocol/fetch-api/mock';

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = () => CreateRes({});

// -------------------------------------------------------------------------------------------------
// 上傳圖片
export const UploadImage = () => {
  const data = {
    image_url: 'https://aahslda.org/images/librariesprovider2/images/lp/testing-and-evaluation-istock-495639272-compressor.jpg?sfvrsn=d82ef5d1_2'
  };
  return CreateRes(data);
};


// 上傳圖片 -----------------------------------------------------------------------------------------------
interface UploadImageParams {
  image: File
}
interface UploadImageRes extends DefaultRes{
  data: {
    image_url: strinng
  }
}

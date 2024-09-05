// CLOUDINARY TYPING
interface Cloudinary {
  createUploadWidget: (
    config: object,
    callback: (error: any, result: any) => void,
  ) => any;
}

interface Window {
  cloudinary: Cloudinary;
}

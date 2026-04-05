// @ts-ignore
import Compressor from 'compressorjs';

/**
 * Compresses an image file.
 * @param file The image file to compress.
 * @param quality The compression quality (0 to 1).
 * @returns A promise that resolves with the compressed Blob.
 */
export const compressImage = (file: File | Blob, quality: number = 0.6): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality,
      success(result: Blob) {
        resolve(result);
      },
      error(err: Error) {
        reject(err);
      },
    });
  });
};

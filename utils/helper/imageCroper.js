export async function getCroppedImage(imageSrc, cropRatio) {
    // Split crop ratio string into width and height numbers
    const [ratioWidth, ratioHeight] = cropRatio.split(":").map(Number);
  
    return new Promise(async (resolve, reject) => {
      try {
        const image = new Image();
  
        // Check if image source is a string (URL) or a File object
        if (typeof imageSrc === "string") {
          image.src = imageSrc;
        } else if (imageSrc instanceof File) {
          image.src = URL.createObjectURL(imageSrc);
        } else {
          throw new Error("Invalid image source");
        }
  
        // Once image has loaded, calculate cropping dimensions and create cropped canvas
        image.onload = async () => {
          const imageWidth = image.naturalWidth;
          const imageHeight = image.naturalHeight;
          const imageRatio = imageWidth / imageHeight;
          let cropWidth, cropHeight, cropX, cropY;
  
          // If image ratio is wider than crop ratio, crop height is full height and width is calculated based on crop ratio
          if (imageRatio > ratioWidth / ratioHeight) {
            cropHeight = imageHeight;
            cropWidth = cropHeight * (ratioWidth / ratioHeight);
            cropX = (imageWidth - cropWidth) / 2;
            cropY = 0;
          } else {
            // If image ratio is narrower than crop ratio, crop width is full width and height is calculated based on crop ratio
            cropWidth = imageWidth;
            cropHeight = cropWidth * (ratioHeight / ratioWidth);
            cropX = 0;
            cropY = (imageHeight - cropHeight) / 2;
          }
  
          // Create new canvas with cropped dimensions
          const canvas = document.createElement("canvas");
          canvas.width = cropWidth;
          canvas.height = cropHeight;
          const ctx = canvas.getContext("2d");
  
          // Draw cropped image onto canvas
          ctx.drawImage(
            image,
            cropX,
            cropY,
            cropWidth,
            cropHeight,
            0,
            0,
            cropWidth,
            cropHeight
          );
  
          // Convert canvas to blob and return it
          // canvas.toBlob((blob) => {
          //   if (!blob) {
          //     reject(new Error("Canvas is empty"));
          //     return;
          //   }
          //   blob.name = `${Date.now()}.jpeg`;
          //   window.URL.revokeObjectURL(blob);
          //   resolve(blob);
          // }, "image/jpeg");


          // Convert canvas to blob and return it
          canvas.toBlob((blob) => {
            if (!blob) {
              reject(new Error("Canvas is empty"));
              return;
            }
            blob.name = `${Date.now()}.webp`;
            window.URL.revokeObjectURL(blob);
            resolve(blob);
          }, "image/webp");

        };
  
        // If image fails to load, reject promise
        image.onerror = () => {
          reject(new Error("Failed to load image"));
        };
      } catch (error) {
        reject(error);
      }
    });
  }
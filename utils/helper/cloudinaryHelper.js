// To reduce the quality of the image in the provided Cloudinary URL, you can modify the URL by adding the q parameter followed by a value representing the desired quality level. The quality value ranges from 1 to 100, where 1 is the lowest quality and 100 is the highest. Lower values result in higher compression and lower image quality.


export const uploadImageToCloudinary = async (file=undefined, url="", type="Listings") => {
    // BusinessLogo
  
    const base_url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
  
    const formData = new FormData();

    if (file) formData.append('file', file);
    else formData.append('url', url);

    formData.append('upload_preset', 'epb842ai');
    formData.append("folder", type);

    try {
        const response = await fetch(base_url, {
          method: 'POST',
          body: formData,
        });
      
        const data = await response.json();
        
        return {
          "public_id" : data.public_id,
          "url" : data.secure_url
        }
        
    } catch (error) {
        return console.error(error);
    }
  }

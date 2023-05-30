import { uploadImageToCloudinary } from '@/utils/helper/cloudinaryHelper';
import React from 'react'
const axios = require('axios');

const Testt = () => {


    // Configure Cloudinary
    
    async function uploadImageFromURL(url) {
        try {
          const data = await uploadImageToCloudinary(url=url)
          console.log('+++  props',  data);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
      
    const imageUrl = 'https://media.kijiji.ca/api/v1/ca-prod-dealer-ads/images/55/551ced1b-8ab2-46b0-8f03-e4d834cc0ce3?rule=kijijica-640-webp';

    return (
        <div>Testt


            <button onClick={() => uploadImageFromURL(imageUrl)}>upload</button>
        </div>  
    )
}

export default Testt
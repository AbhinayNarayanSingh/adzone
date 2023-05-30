// import DialogHOC from '@/hoc/dialog/DialogHOC'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

import useGoogleMapServices from "@/hooks/useGoogleMapServices"
import axios from "axios";
import { useEffect, useState } from "react"


// import { useQuery, gql } from '@apollo/client';

// const GET_USERS = gql`
//   query  allFilms {
//     films {
//       title
//       created
//       director
//       id
//       episodeID
//     }
//   }`;


// function datafn(...params) {
//   //   const query = `
//   //     allFilms {
//   //       films {
//   //         title
//   //         created
//   //         director
//   //         id
//   //         episodeID
//   //       }
//   //     }
//   // `;

//   // const query = "{\n  allFilms {\n    films {\n      title\n      created\n      director\n      id\n      episodeID\n    }\n  }\n}"
//   const query = `{
//     allVehicles {
//       vehicles {
//         name
//         vehicleClass
//         filmConnection {
//           films {
//             title
//             episodeID
//           }
//         }
//       }
//     }
//     allFilms {
//       films {
//         title
//         id
//       }
//     }
//   }`

//   // The query starts with an opening curly brace {, indicating that it is a query operation.
//   //   There is no operation name specified, so it is an anonymous query.
//   //   The *allFilms* field is requested, which implies that there is a collection of films.
//   //   Within the *allFilms* field, the *films* field is requested, which represents the list of films.
//   //   For each film, the requested fields are title, created, director, id, and episodeID. These fields specify the data you want to retrieve for each film.
    


//     fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ query }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Process the data received from the server
//         console.log(data);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });

  
// }

// const Test = (props) => {

//   // const { loading, error, data } = useQuery(GET_USERS);

//   useEffect(() => {
//     datafn()

//   }, [])
  

//   function post() {
//     const data = [
//       {
//         name : "Cars",
//         icon : "/images/category/Cars.svg"
//       },
//       {
//         name : "Mobiles",
//         icon : "/images/category/Mobiles.svg"
//       },
//       {
//         name : "Properties",
//         icon : "/images/category/Properties.svg"
//       },
//       {
//         name : "Appliances",
//         icon : "/images/category/Electronics.svg"
//       },
//       {
//         name : "Furniture",
//         icon : "/images/category/Furniture.svg"
//       },
//       {
//         name : "Pets",
//         icon : "/images/category/Pets.svg"
//       },
//       {
//         name : "Jobs",
//         icon : "/images/category/Jobs.svg"
//       },
//       {
//         name : "Services",
//         icon : "/images/category/Services.svg"
//       },
//       {
//         name : "Books, Sports & Hobbies",
//         icon : "/images/category/Books.svg"
//       },
//       {
//         name : "Sports Equipment",
//         icon : "/images/category/Sports.svg"
//       },
//       {
//         name : "Others",
//         icon : "/images/category/Others.svg"
//       },
//     ]

//     data.map((cat) => {
//       const res = axios.post("http://localhost:9090/categories", cat)
//       console.log('+++ res', res);
//     })

//   }

//   return (
//     <div>
//       <button onClick={() => {
//         props.open_dialog("SUCCESS_DIALOG")}}>Open</button>
      
//       Test
      
      
//       <button onClick={post}>post</button>
//       </div>

//   )
// }

// export default DialogHOC(Test)



const Test = () => {

  const data = [
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/88/888d680f-23ac-43fe-9eaa-024d234843cc?rule=move-300-jpg",
      "title": "2022 GMC Sierra 1500 Denali",
      "amount": "$75,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/27/27394229-8e7a-4cb1-8805-61f938b26ea6?rule=move-300-jpg",
      "title": "2020 Chevrolet Bolt Premier",
      "amount": "$38,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/10/109536c0-e8a3-4833-bd9a-18408310e0c3?rule=move-300-jpg",
      "title": "2019 Volkswagen Jetta Highline",
      "amount": "$23,800"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/a7/a7cc1618-73cb-4941-a2a3-fc3ae0201606?rule=move-300-jpg",
      "title": "2018 MINI John Cooper Works Countryman John Cooper Works",
      "amount": "$32,989"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/8b/8b496bc8-67b1-47dc-9780-92d192d1a4e7?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD LT",
      "amount": "$72,349"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/e1/e178cf4a-feca-4978-8d08-eeb0d0bc656e?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD High Country",
      "amount": "$114,539"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/ff/ff718e2c-b19e-48ce-a321-de3b8a0df26f?rule=move-300-jpg",
      "title": "2019 Chevrolet Silverado 2500 High Country",
      "amount": "$69,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/db/db416ead-4209-46c5-a422-5d3e0079f547?rule=move-300-jpg",
      "title": "2020 Chevrolet Corvette 3LT",
      "amount": "$119,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/9a/9a50d4e3-81de-4437-b136-e7f61f581461?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD LT",
      "amount": "$92,309"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/0c/0c87a534-5e37-4135-b2d4-a2aa3ca4e951?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD High Country",
      "amount": "$114,079"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/36/36e11549-f2fd-416a-a20a-38fd1ebca044?rule=move-300-jpg",
      "title": "2017 Chevrolet Equinox Premier",
      "amount": "$27,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/e5/e5c918dc-2f00-4562-b92f-e6166c49bc6a?rule=move-300-jpg",
      "title": "2017 Chevrolet Cruze Premier",
      "amount": "$19,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/3f/3fb4a5e3-e6e3-4a58-afdf-7395376f9a32?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD High Country",
      "amount": "$115,849"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/b4/b46a8d29-5ced-47e3-9610-f742abfa0fbc?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD High Country",
      "amount": "$113,054"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/19/1974b1e7-1740-4a56-8af0-b8ffd1ab2f25?rule=move-300-jpg",
      "title": "2021 Chevrolet Silverado 3500HD High Country 4X4 6.6L V8 Diesel",
      "amount": "$94,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/a7/a740ae46-8aa4-4eae-a4b3-bb5a68989ca1?rule=move-300-jpg",
      "title": "2015 Chevrolet Silverado 3500HD LT Heated Seats, 6.6L V8 Diesel",
      "amount": "$36,852"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/75/75801fc6-ef41-4e49-9782-a54fba17a574?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD LTZ",
      "amount": "$103,314"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/bc/bc863a73-e9c9-41fb-83b4-e9cc1347d488?rule=move-300-jpg",
      "title": "2011 Chevrolet Tahoe LTZ",
      "amount": "$12,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/db/db2d48ec-bdb7-41cd-8e96-eef3544c52de?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD LT",
      "amount": "$79,944"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/76/768a5211-f6b3-4708-9cd1-9c4d5b876d99?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD LTZ",
      "amount": "$101,419"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/4e/4e37a065-f724-4025-bce1-368c357008d6?rule=move-300-jpg",
      "title": "2024 Chevrolet Silverado 3500HD LTZ",
      "amount": "$96,274"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/0d/0dff1687-8fe1-481f-9388-f06d870da4e9?rule=move-300-jpg",
      "title": "2023 Chevrolet Silverado 1500 LT",
      "amount": "$68,183"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/f5/f5785682-f127-489c-80e0-5357b65df867?rule=move-300-jpg",
      "title": "2020 Chevrolet Silverado 3500HD High Country 6.6L V8 Diesel 4X4",
      "amount": "$83,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/38/38bc2330-70e0-4805-86d0-32b368d7003e?rule=move-300-jpg",
      "title": "2021 Chevrolet Trax LS",
      "amount": "$27,888"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/61/61643609-9895-4ef9-b4fb-4fc777f7eebc?rule=move-300-jpg",
      "title": "2022 GMC Sierra 2500HD Denali",
      "amount": "$94,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/e1/e1eb16f8-da05-48b9-a335-090a35fa36c5?rule=move-300-jpg",
      "title": "2024 GMC Sierra 3500HD SLE",
      "amount": "$90,704"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/1c/1c88f37c-a27d-4398-b46d-6436080dd681?rule=move-300-jpg",
      "title": "2023 GMC Sierra 2500HD SLE",
      "amount": "$93,403"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/62/62e671c8-efee-49fc-b165-63bc4dc153cc?rule=move-300-jpg",
      "title": "2023 GMC Sierra 2500HD SLE",
      "amount": "$91,668"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/19/191f53fe-d61f-46a9-b638-fd1998391b5a?rule=move-300-jpg",
      "title": "2024 GMC Sierra 3500HD Denali",
      "amount": "$117,869"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/e6/e686f49c-7925-448d-a07f-9c218b787353?rule=move-300-jpg",
      "title": "2022 GMC Sierra 3500 Denali",
      "amount": "$95,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/39/39d6c0b5-d34d-476d-97b4-2a5bdadc484e?rule=move-300-jpg",
      "title": "2013 Dodge Journey Canada Value Pkg",
      "amount": "$8,995"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/4f/4f0e77dd-0db4-4a67-a630-23e8c0064cc7?rule=move-300-jpg",
      "title": "2020 Kia Sportage EX",
      "amount": "$29,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/47/4742a6ef-c84a-4ed8-ad1c-5f4789ebd786?rule=move-300-jpg",
      "title": "2017 GMC Yukon SLT",
      "amount": "$41,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/05/052d76ba-975a-47fe-956e-7098ec8e5571?rule=move-300-jpg",
      "title": "2022 Chevrolet Silverado 1500 High Country",
      "amount": "$70,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/5c/5c2c853e-fdfb-4d88-80e4-1db3bb761ac0?rule=move-300-jpg",
      "title": "2020 Chevrolet Colorado 4WD LT",
      "amount": "$36,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/9f/9f73c27a-f673-4aea-9b87-1de8c7ef7af2?rule=move-300-jpg",
      "title": "2012 RAM 1500 Laramie Longhorn",
      "amount": "$21,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/64/64e07b03-e76c-4ddb-acc9-a583460ee93a?rule=move-300-jpg",
      "title": "2017 Chevrolet Equinox LT",
      "amount": "$18,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/a2/a29a9247-a698-44a0-9031-f93b75644b5a?rule=move-300-jpg",
      "title": "2021 GMC Sierra 1500 Denali",
      "amount": "$71,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/37/370899f7-d795-4e67-bfd5-48ba6ec64d7a?rule=move-300-jpg",
      "title": "2021 GMC Acadia SLT",
      "amount": "$48,900"
    },
    {
      "image": "https://media.kijiji.ca/api/v1/autos-prod-ads/images/4a/4a7782bb-fc92-4b8e-86be-335ee57d413c?rule=move-300-jpg",
      "title": "2022 GMC Sierra 1500 Elevation",
      "amount": "$57,900"
    }
  ]

  const data2 = [
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/aloAAOSwKZtjngYN/s-l300.webp",
      "title": "XPG XENIA Xe Lite 15.6\" Laptop i7-1165G7, 1TB NVMe PCIe Gen4, 16GB DDR4",
      "amount": "$449.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/~gcAAOSw6LVkUtBw/s-l300.webp",
      "title": "ACER Aspire 3 A315-58-350L Core i3 FHD LED LCD 15.6\" Laptop - Silver (Open Box)",
      "amount": "$260.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/100AAOSwdR5kYiMj/s-l300.webp",
      "title": "Dell Chromebook 11 11.6\" P22t Laptop Intel N2840 4GB RAM 16GB SSD 128GB SDWIFI",
      "amount": "$65.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/N3QAAOSwfF9kNWlj/s-l300.webp",
      "title": "Lenovo ThinkPad X1 Extreme Laptop Intel i7-9750H 6-Core 32GB RAM 1TB m.2 SATA...",
      "amount": "$858.98"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/sJ8AAOSwfcRjHWFJ/s-l300.webp",
      "title": "Lenovo ThinkBook 14-IIL 14\" (512GB SSD, Intel Core i7-1065G7, 16GB RAM) Laptop",
      "amount": "$146.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/EToAAOSwI~tkVGVW/s-l300.webp",
      "title": "Lenovo ThinkPad L13 Yoga Gen 2 13.3\" Touch,Intel Core i7-1165G7,512GB SSD,16GB",
      "amount": "$72.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/lcUAAOSwCNhkOCqW/s-l300.webp",
      "title": "Gateway GWTC116-2 11.6\" 4gb Celeron laptop computer with hard case",
      "amount": "$57.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rPwAAOSwlYtka9a8/s-l300.webp",
      "title": "Google Pixelbook Go 13.3\" (128GB SSD, Intel Core i5 8th Gen. 1.30GHz, 8GB)...",
      "amount": "$8.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/jrcAAOSw3zhkbCbQ/s-l300.webp",
      "title": "Lenovo ThinkPad L13 Yoga Intel Core i7-10510U 1.80 GHz 13.3” 512GB SSD,16GB RAM",
      "amount": "$16.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/~f8AAOSwrLhitSZq/s-l300.webp",
      "title": "Lenovo ThinkPad T480 14\" i5-8250U,16GB RAM,256GB SSD,Laptop",
      "amount": "$238.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/dV4AAOSwL4ZkVGVW/s-l300.webp",
      "title": "Lenovo ThinkPad L13 Gen 2 13.3\" ,Intel Core i5-1145G7,256GB SSD,16GB",
      "amount": "$51.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/qsoAAOSwW-Zka9-q/s-l300.webp",
      "title": "Microsoft Surface Laptop 4 15\" (512GB SSD, AMD Ryzen 7, 4.20 GHz, 8GB) Laptop -",
      "amount": "$287.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ZP0AAOSwPx1h4oij/s-l300.webp",
      "title": "Lenovo ThinkPad E15 G3 15.6” , AMD Ryzen7-5700U , 512GB SSD, 16GB RAM ,Win11",
      "amount": "$117.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/HtQAAOSwWD9jzZTJ/s-l300.webp",
      "title": "LG Gram 14\" (1920 x 1200) Laptop i7-1260P 16GB 512GB SSD Black 14ZB90Q-G.AAC6U1",
      "amount": "$599.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/3zYAAOSwR6licYle/s-l300.webp",
      "title": "",
      "amount": "$464.08"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/at8AAOSwuR5jrhXF/s-l300.webp",
      "title": "OB Microsoft Surface Pro 6 12.3\"  1.9GHz i7-8650U 16GB 512GB",
      "amount": "$449.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/kSgAAOSw6qliKCa2/s-l300.webp",
      "title": "Lenovo ThinkPad X1 Yoga 5th Gen 14'' Intel Core i5-10210U, 512GB SSD, 16GB RAM",
      "amount": "$255.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tBsAAOSwpq5in-pG/s-l300.webp",
      "title": "Dell Precision 3551 15.6\" (512GB SSD, Core i7 12th Gen, 2.60GHz, 32GB) Laptop -",
      "amount": "$500.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/7G8AAOSwn4NkakWN/s-l300.webp",
      "title": "LG Gram 16\" Laptop i7-1165G7 16GB RAM 512GB SSD 16Z90Q-K.AAC7U1 - Open Box",
      "amount": "$679.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/NMIAAOSwChZkWAc0/s-l300.webp",
      "title": "ASUS ZenBook Pro Duo UX581L 15.6\" UHD OLED 4K Touchscreen (i9-10989HK)",
      "amount": "$1,150.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2PMAAOSwztxkbTgn/s-l300.webp",
      "title": "Lenovo 14w Laptop + Charger 14 inch AMD A6-9220C 1.8GHz 4GB RAM READ",
      "amount": "$0.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/pz4AAOSwbVZka8KH/s-l300.webp",
      "title": "Acer Aspire One 756-2887 Q1VZC 11.6” Screen New In Open Box",
      "amount": "$29.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tzEAAOSw-1lkW7jq/s-l300.webp",
      "title": "Asus L510M 15.6” (64 GB Integrated eMMC, Intel Celeron N4020, 2.8 GHz, 4GB RAM,",
      "amount": "$100.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2WAAAOSwQVBja~9N/s-l300.webp",
      "title": "Microsoft Surface Pro 8-11th Gen Intel Core i7_256/16GB_with Pen&Keyboard(Black)",
      "amount": "$899.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/0asAAOSw9CRkBQeM/s-l300.webp",
      "title": "HP 14\" Lightweight Laptop Intel 2.60GHz 64GB SSD Drive 4GB Ram RJ45 Windows 11",
      "amount": "$154.38"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ky8AAOSwiE5kZ5HN/s-l300.webp",
      "title": "Microsoft Surface Pro 8 13\"  11th Intel i7_512/16GB_with Pen & Keyboard_OPEN BOX",
      "amount": "$969.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/CnAAAOSwbBNkI6Mi/s-l300.webp",
      "title": "Lenovo ThinkPad X13 Yoga Gen 2 13.3\"Touch, 512GB SSD, Intel Core i7-1165G7,16GB",
      "amount": "$242.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/lx8AAOSwgBljXjGm/s-l300.webp",
      "title": "loptop",
      "amount": "$140.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/HB8AAOSw825i0iF5/s-l300.webp",
      "title": "NEW Dell XPS 13 9350 13.3\" | Intel Core i5 2.80 GHz | 1TB SSD | 8GB RAM | Win10",
      "amount": "$574.98"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/hEUAAOSwRiBh6b2d/s-l300.webp",
      "title": "New Samsung Galaxy Book Go 5G 14” 128GB 8GB RAM Silver AT&T GSM Unlocked Laptop",
      "amount": "$269.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/spoAAOSw48diZxUl/s-l300.webp",
      "title": "Lenovo IdeaPad Flex 5 14\" Touch 2 in 1 Laptop AMD Ryzen 3 4300U/4GB RAM/128g SSD",
      "amount": "$299.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/t~QAAOSw4r1kZTKh/s-l300.webp",
      "title": "HP Laptop Computer Touchscreen 15.6\"  Notebook",
      "amount": "$239.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/pqwAAOSwq-Fj-CXF/s-l300.webp",
      "title": "NEW Microsoft Surface Laptop Go 2 12.4” i5 1135G7 8GB 128GB 8QD-00023 Warranty",
      "amount": "$389.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tZMAAOSwpzNkbZB6/s-l300.webp",
      "title": "DELL LATITUDE 7420 14\" FHD INTEL i7-1185G7 4.8GHz 16GB Win 11 PRO BT5 WF6 VPRO",
      "amount": "$476.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/FcsAAOSwu4RkPNL-/s-l300.webp",
      "title": "HP EliteBook 840 G9 FHD",
      "amount": "$530.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/80MAAOSwU~1j9qA0/s-l300.webp",
      "title": "HP 15.6 LED Laptop Bundle! Intel 2.80GHz 8GB Ram 256GB SSD Drive HDMI Windows 11",
      "amount": "$254.08"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/e9IAAOSw8Itjcon1/s-l300.webp",
      "title": "Lenovo IdeaPad 5 15IAL7 15.6\" FHDLaptop, IntelCore i7-1255U,12GB512GB Abyss Blue",
      "amount": "$399.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/0FkAAOSwXcFkaueC/s-l300.webp",
      "title": "NEW Dell Latitude 7430 14'' FHD i5-1245U 16GB RAM 256GB SSD WARRANTY 2028",
      "amount": "$599.98"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/MvoAAOSwXLNkYV9B/s-l300.webp",
      "title": "Dell Chromebook 11 P22t  Intel Celeron N2840 2.16 Ghz 4gb 11.6 16gb Ssd 128GB SD",
      "amount": "$70.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2JYAAOSw8oZkZqX3/s-l300.webp",
      "title": "macOS Monterey for Laptop, Hackintosh",
      "amount": "$50.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/FoEAAOSwhoRj493v/s-l300.webp",
      "title": "Lenovo IdeaPad 1 14'' HD Laptop Intel N5030 1.1 GHz 4GB Ram 128GB SSD Windows 11",
      "amount": "$139.85"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Me8AAOSwOIFj3ZJm/s-l300.webp",
      "title": "HP 15-dw 15.6\"(128GB SSD, Intel Silver N5030, 1.1GHz, 16 GB RAM) Laptop - Red",
      "amount": "$125.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/RzYAAOSwo-1is-ky/s-l300.webp",
      "title": "Lenovo IdeaPad Flex 5 15ITL05 15.6’’ Touch,Intel i7-1165G7, 1TB SSD, 16GB,Silver",
      "amount": "$202.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/aJ8AAOSwcOdi9ohq/s-l300.webp",
      "title": "Samsung Galaxy Chromebook Go 14\" AT&T 4G LTE / GSM 🔓 Unlocked (XE345XDA) 🔟/🔟",
      "amount": "$127.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/XfkAAOSwB1hkPoUK/s-l300.webp",
      "title": "HP EliteBook 840 G9 Notebook w/Dock",
      "amount": "$511.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/i7AAAOSw0OpkNQfP/s-l300.webp",
      "title": "lenovo yoga 7i 14”",
      "amount": "$400.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ROQAAOSwwQdkbgCU/s-l300.webp",
      "title": "Dell Latitude 5290 Core i7-8650U 16GB 512GB SSD 2-in-1 Notebook Computer",
      "amount": "$419.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/91UAAOSwe-BkGjCH/s-l300.webp",
      "title": "Lenovo Ideapad 3 14\" 4/128/i3-1115G4-14ITL05",
      "amount": "$125.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/QWYAAOSwSBdjF9LJ/s-l300.webp",
      "title": "Acer Aspire 1 A115-31 15.6\" (64GB SSD, Intel Celeron N, 1.10 GHz, 4GB) Laptop -",
      "amount": "$114.34"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/6p0AAOSwpm5jxh-x/s-l300.webp",
      "title": "Lenovo Thinkpad E14 i3 4GB RAM 250GB SSD",
      "amount": "$150.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/fWYAAOSwwcJjXlUW/s-l300.webp",
      "title": "HP 15-dy2005tg 15.6\" (256GB SSD, Intel Pentium Gold 7505u, 2.00GHz, 8GB RAM)...",
      "amount": "$200.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/X~UAAOSwjYVkXTuE/s-l300.webp",
      "title": "ASUS E210M Intel N4020 11.6 in 64GB HDD 4GB DDR4 Win10",
      "amount": "$100.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/HrIAAOSwgW1kYUy4/s-l300.webp",
      "title": "Dell Inspiron 5410 14\"  (512GB SSD, Intel Core i7-1195G7, 2.80 GHz, 16GB RAM,...",
      "amount": "$312.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rKYAAOSw03xiP1Ab/s-l300.webp",
      "title": "Dell Inspiron 13 i5310 13.3\" (512GB SSD, Intel Core i5-11320H, 16GB RAM, Win11)",
      "amount": "$320.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/eNcAAOSw6N9kZNjQ/s-l300.webp",
      "title": "Lenovo IdeaPad 120s 14 inch (32 GB, Intel Celeron, 1.1 GHz, 2 GB) Laptop",
      "amount": "$60.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/3vYAAOSwL4ZkaCMM/s-l300.webp",
      "title": "HP Elitebook x360 1040 G6",
      "amount": "$165.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/GsYAAOSwoVtkZgCt/s-l300.webp",
      "title": "i9 laptop",
      "amount": "$224.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/91oAAOSwgrtkbREr/s-l300.webp",
      "title": "Brand New Dell XPS 13 Plus 9320 16GB Silver Laptop Bundle",
      "amount": "$600.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/phoAAOSwPCljq1Ig/s-l300.webp",
      "title": "Lenovo ThinkPad T14 Intel i7-1165G7 32GB Ram And 1TB Ssd.",
      "amount": "$340.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rkkAAOSwIsJka~hl/s-l300.webp",
      "title": "Acer Nitro 5 17.3\" (512GB SSD, Intel Core i5 10th Gen., 4.50 GHz, 16GB",
      "amount": "$285.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/HaEAAOSwFapka7lR/s-l300.webp",
      "title": "MSI - GS66 Stealth 15.6\" Gaming Laptop - i7 16GB MEMORY. RTX 3060 1TB SSD 240HZ",
      "amount": "$750.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/AxUAAOSwERpkYbhu/s-l300.webp",
      "title": "Microsoft Surface Book 3 15\" (512GB SSD, Intel Core i7, 1.3GHz, 32GB RAM,...",
      "amount": "$570.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/4~oAAOSwaepkWqVM/s-l300.webp",
      "title": "Microsoft Surface Laptop Studio 14.4” Touch Screen Intel Core i7 16GB Memory NVI",
      "amount": "$760.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/GvoAAOSwgeliNPtl/s-l300.webp",
      "title": "DELL INSPIRON 13 5310 13.3” QHD+ Intel i7 16GB RAM 1TB SSD I5310-7699SLV",
      "amount": "$197.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/W2oAAOSwtUFkZf8m/s-l300.webp",
      "title": "i9 LAPTOP (OPEN BOX)",
      "amount": "$230.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/j2MAAOSwdY1kJM~t/s-l300.webp",
      "title": "Dell Precision 7550 Workstation Laptop (2021)",
      "amount": "$204.49"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/BCgAAOSwvsVkSOm~/s-l300.webp",
      "title": "*Open Box* Acer i5 a315-59-53 8G RAM 256 SSD i512th gen",
      "amount": "$99.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/vhwAAOSwvRNkOxp6/s-l300.webp",
      "title": "Lenovo Legion 7 Gen 6  NEW in box!16\"  Gaming Laptop FHD - Ryzen 7 3.30 RTX 3070",
      "amount": "$560.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/X2AAAOSwslpkXPjO/s-l300.webp",
      "title": "Open Box 2023 Gigabyte Gaming Laptop G5 KF RTX 4060 i5-1200H 8GB DDR4 512 SSD",
      "amount": "$610.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/kLoAAOSw5btkGvyx/s-l300.webp",
      "title": "E5330 12th Gen Mb Dell New i7-1265u",
      "amount": "$250.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/eLsAAOSwGshkbZB1/s-l300.webp",
      "title": "Asus Vivobook 15.6\" X512 10th Gen i7 w/ touchscreen",
      "amount": "$200.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/sP4AAOSwgydkZ-yH/s-l300.webp",
      "title": "ASUS TUF Gaming F15 Gaming Laptop, 15.6 144H i5-11400h 16GB 1TB SSD RTX 2050",
      "amount": "$285.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/9hgAAOSwtMBkWX69/s-l300.webp",
      "title": "HP 15.6\" Touch-Screen Laptop I7-1165G7 16GB Memory 512GB SSD Windows 11",
      "amount": "$314.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/j-QAAOSw5axkbCi1/s-l300.webp",
      "title": "ASUS-ROG Zephyrus 15.6\" WQHD 165Hz Gaming Laptop-AMD Ryzen 9-16GB DDR5 NVDA 3060",
      "amount": "$571.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/8TYAAOSwi15kbTI7/s-l300.webp",
      "title": "NOB: Lenovo ThinkBook 15 G3 ACL 15.6  Notebook Ryzen 7-5700U 16GB RAM 512GB",
      "amount": "$51.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/0VkAAOSwMGhkbAnk/s-l300.webp",
      "title": "Microsoft Surface Laptop 5  13.5\" Intel i5 12th Gen 8GB 512GB SSD - platinum",
      "amount": "$749.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/0lgAAOSwnC5jLRtA/s-l300.webp",
      "title": "Newest HP 14'' Touch Laptop Intel Dual Core CPU 16GB RAM 192GB (64+128) (White)",
      "amount": "$229.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/13cAAOSwG6xkX-OS/s-l300.webp",
      "title": "Dell Latitude 5430 Laptop i5-1245U VPro 10 core RAM 16 GB, 256 GB SSD",
      "amount": "$540.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/XMIAAOSwn-VkSB6W/s-l300.webp",
      "title": "HP ZBook Firefly G8 15.6\" 32GB Ram 512GB SSD i7-1185G7 Laptop (792S1U8R#ABA)",
      "amount": "$498.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/oawAAOSwbm1if8Fp/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 8GB RAM 128GB (64+64) (Black)",
      "amount": "$199.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/N08AAOSwBuFjyVUD/s-l300.webp",
      "title": "Dell Laptop - Latitude 5400 Chromebook 14\" Hi-Res, Core i5, 8GB RAM, 64GB SSD OB",
      "amount": "$127.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/9eUAAOSwiR5kbMR4/s-l300.webp",
      "title": "Compaq Armada 1700 6233 DOM New In open Box",
      "amount": "$750.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/47UAAOSwzdZkWC6Q/s-l300.webp",
      "title": "** NEAR_NEW ** 12 CORES, GAMING LAPTOP i7 11 GEN, MS OFFICE, 1TB,16GB ** 50% OFF",
      "amount": "$399.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/x0gAAOSwLwZif8J1/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 8GB RAM 128GB (64+64) (Rose Gold)",
      "amount": "$209.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tg8AAOSw2XlkY8Hm/s-l300.webp",
      "title": "Lenovo ThinkPad X1 Carbon (Gen 10) --- i5-1235U, 8GB Ram, 512GB SSD, 1200p",
      "amount": "$799.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/wxsAAOSwYNtkbTW5/s-l300.webp",
      "title": "ASUS E410M 14 Intel Celeron N4020 4GB DDR4 64 GB eMMC Windows 10",
      "amount": "$142.97"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/F00AAOSw4otjFy7w/s-l300.webp",
      "title": "Teqnio 12.5\" ultra slim laptop model ELL1201T-BK with Windows 10",
      "amount": "$64.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rKYAAOSw03xiP1Ab/s-l300.webp",
      "title": "Dell Inspiron 13 i5310 13.3\" (512GB SSD, Intel Core i5-11320H, 16GB RAM, Win11)",
      "amount": "$192.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/h3gAAOSw1WlibDYQ/s-l300.webp",
      "title": "Newest HP 14'' Touchscreen Laptop AMD CPU 16GB RAM 320GB SSD (64+256) -Rose Gold",
      "amount": "$279.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/9EEAAOSw-u9kbSVK/s-l300.webp",
      "title": "HP Pavilion 15.6\" Touchscreen Laptop i5-1235U 16GB Windows 11 Open Box",
      "amount": "$599.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/~hYAAOSwhT1kXR-H/s-l300.webp",
      "title": "Lenovo Legion 5 Gaming Laptop",
      "amount": "$750.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/qmkAAOSwal5jLaxr/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 16GB RAM 192GB (64+128) (White)",
      "amount": "$209.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/gGgAAOSwFxFkReLM/s-l300.webp",
      "title": "HP 17\" Laptop Intel Core i5 8GB RAM 256GB SSD Windows 11 ROSE GOLD",
      "amount": "$355.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/KwUAAOSwyNBjhl45/s-l300.webp",
      "title": "HP Chromebook 14-inch Laptop Computer w 180-Degree Hinge 4GB SDRAM 32GB Chrome",
      "amount": "$99.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/DhQAAOSw0AhkEhPf/s-l300.webp",
      "title": "Evolve iii T-3 Pro 11.6\" Touchscreen Notebook N4120 8GB 64GB Windows 10 Pro EDU",
      "amount": "$109.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/E0sAAOSwPYNkX6zO/s-l300.webp",
      "title": "HP CHROMEBOOK 14a-na0011cy 14\" HD Intel Celeron N4020 4GB RAM 32GB eMMC ChromeOS",
      "amount": "$114.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Ei4AAOSwa~5kbSlA/s-l300.webp",
      "title": "Microsoft Surface Laptop 3 15 15\" Touch AMD Ryzen 5 8GB 128GB Platinum",
      "amount": "$359.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/f8sAAOSwvXRkUACf/s-l300.webp",
      "title": "OPEN BOX Laptop HP 14-dq1077wm 14\" intel Core i3-1005G1 8GB RAM 256GB SSD",
      "amount": "$239.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/zAEAAOSwxUlkPdFn/s-l300.webp",
      "title": "HP 14a-na0131wm 14 inch (64GB, Intel Pentium, 2.70GHz, 4GB) Chromebook",
      "amount": "$108.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/f-kAAOSwmO5j6zH4/s-l300.webp",
      "title": "Microsoft Surface Laptop 3 13.5\" Black TOUCH  i7-1065G7 16GB 256GB - Open BOX",
      "amount": "$580.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/jhoAAOSwLURj5cU8/s-l300.webp",
      "title": "NEW Lenovo ThinkPad T430S 14\" WQHD 2560x1440 i7-3520M 16GB 1866MHz RAM 512GB SSD",
      "amount": "$150.00$375.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/BOoAAOSwai9kOPIF/s-l300.webp",
      "title": "Lenovo IdeaPad Flex 3 11.6\" 2-in-1 Touchscreen Chromebook (64GB, 4GB RAM) White",
      "amount": "$79.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Wu8AAOSw~zdkD0ox/s-l300.webp",
      "title": "HP 255 G7 15.6 in 128GB SSD, AMD A4 Dual-Core, 2.60 GHz, 4GB Laptop",
      "amount": "$149.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Xs0AAOSwGb1jn0N-/s-l300.webp",
      "title": "Dell Latitude 7275 New (256GB SSD, Intel Core i5 6th Gen., 1.1 GHz, 8GB) adapter",
      "amount": "$209.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/sakAAOSwOoBisdCC/s-l300.webp",
      "title": "Acer Aspire 5 15.6\" FHD Laptop Intel 2-Core i3 CPU 8GB RAM 128GB SSD Windows 10",
      "amount": "$299.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ZZ8AAOSwvG9f6c5g/s-l300.webp",
      "title": "Lenovo ThinkPad L13 Yoga Intel Core i5-10210U 1.60 GHz 13.3 in 256 GB SSD 8...",
      "amount": "$20.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/NkAAAOSwUpFkWrhG/s-l300.webp",
      "title": "NOB: Lenovo ThinkBook 15 G3 ACL 15.6  Notebook Ryzen 7-5700U 16GB RAM 512GB",
      "amount": "$285.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/3SIAAOSwOAxkbRFa/s-l300.webp",
      "title": "Lenovo ThinkPad X1 Carbon Gen 9 14\" i7 1185G7 16GB 512GB SSD Laptop Computer",
      "amount": "$899.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/xZsAAOSweOtiOkna/s-l300.webp",
      "title": "Evoo EV-C-116-7 11.6 inch 64GB, Intel 4GB WIFI Windows 10 Laptop Computer",
      "amount": "$115.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/QyYAAOSw2sNkYvUN/s-l300.webp",
      "title": "Lenovo 100e (2nd Gen) 11.6\" Chromebook N4020 1.1GHz 4GB 128GB SSD",
      "amount": "$119.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/d8wAAOSwzf1kZR01/s-l300.webp",
      "title": "HP 17\" Touch Laptop Intel i5 1235U Processor 12GB RAM 512GB SSD Windows 11",
      "amount": "$414.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/qNoAAOSwZTNka-Mj/s-l300.webp",
      "title": "Dell Latitude 5400 14\" i5-8365U 1.60GHz 8GB DDR4 256GB SSD Chrome OS",
      "amount": "$150.91"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/g60AAOSwEvxkF5qc/s-l300.webp",
      "title": "Dell latitude 3120 laptop",
      "amount": "$165.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/f6sAAOSwE2FkbPmh/s-l300.webp",
      "title": "HP 15.6\" Laptop with Windows Home in S Mode – Intel Pentium Processor *OPEN BOX*",
      "amount": "$249.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/45gAAOSwRmZkVRwK/s-l300.webp",
      "title": "HP Envy 13.3\" (512GB, Intel Core i5 11th Gen., 2.40GHz, 16GB) Laptop - Silver",
      "amount": "$475.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/FFwAAOSwlTpj8RJW/s-l300.webp",
      "title": "Dell Inspiron 7620 16\" 3K i7-12700H 40GB 1TB SSD Dark Green (i7620-7592GRE-PUS)",
      "amount": "$795.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/H94AAOSwj2ti7cOr/s-l300.webp",
      "title": "HP 14b-ca0061wm X360 14\" HD Touch Display Intel Pentium Silver N5000 4GB RAM",
      "amount": "$100.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/d0EAAOSwF45j8SEJ/s-l300.webp",
      "title": "HP 255 G8 15.6\" (128GB SSD, AMD 3000 Series, 2.60 GHz, 4GB) Laptop *NEW* F022",
      "amount": "$213.19"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/KWAAAOSwoLBj1PNT/s-l300.webp",
      "title": "Open Box: Microsoft Surface Laptop Go 2 12.4  Intel Core i5 8GB RAM 128GB SSD Sa",
      "amount": "$489.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ebIAAOSwYQ9jxIJ1/s-l300.webp",
      "title": "LENOVO 15.6\" Full-HD Laptop Intel Pentium 128GB SSD Drive 4GB BT HDMI Windows 11",
      "amount": "$198.73"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/BdcAAOSwj9hkbPhx/s-l300.webp",
      "title": "Microsoft Surface Go 12.4\" (256GB SSD, Intel Core i5 10th Gen., 3.60 GHz,...",
      "amount": "$420.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rKYAAOSwkLBjM5B-/s-l300.webp",
      "title": "Lenovo Touch Chromebook 3 14\" FHD Mediatek MT8183 4GB RAM 128GB (64+64) Gray",
      "amount": "$149.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tVcAAOSwtWFkHcME/s-l300.webp",
      "title": "Lenovo T14 Gen 2 Touch 11th Gen Intel i5-1145G7 Vpro 256GB SSD 16GB RAM Warranty",
      "amount": "$549.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/QzEAAOSwSANkLeTN/s-l300.webp",
      "title": "Acer Chromebook Spin 713 , 4gb DDR 4, 2k Display 2-in-1",
      "amount": "$300.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ly8AAOSwB4Je53zP/s-l300.webp",
      "title": "HP Spectre x360 15T,15.6\"4K WLED Tch,Vega4GB,i7-8705G,16GB,1TB,Win10PRO",
      "amount": "$899.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/pVQAAOSws5ZkbRsk/s-l300.webp",
      "title": "ASUS S513E  15.6\" FHD 1920x1080 Laptop i7-1165G7 16GB 512GB SSD Win10 Pro",
      "amount": "$599.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/IaYAAOSwXWxif8K6/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 4GB RAM 128GB (64+64) (White)",
      "amount": "$189.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/9ZMAAOSwmmxjK7lG/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 16GB RAM 192GB (64+128) (Black)",
      "amount": "$209.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/T~YAAOSwJRpj8~Rx/s-l300.webp",
      "title": "Microsoft Surface Laptop 2 13.5\" Ultra Thin i7-8650U 16GB 512GB Win 11 Pro Touch",
      "amount": "$359.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/c-gAAOSwKbVjWD0t/s-l300.webp",
      "title": "2021 Dell Latitude 13 7320 Detachable i3-1110G4 4GB 128GB SSD 13\" FHD+ Touch PRO",
      "amount": "$329.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/98gAAOSwCC9j7nFg/s-l300.webp",
      "title": "Microsoft Surface Pro 7 Plus Core i5-1135G7 16GB 256GB | 4G LTE Unlocked",
      "amount": "$679.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/-c8AAOSwIG9isxs4/s-l300.webp",
      "title": "As New, Unused Panasonic Toughpad FZ-G1 MK3, i5-5300U, 8GB, 128GB SSD",
      "amount": "$529.06"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/sQcAAOSw-DhkS-qe/s-l300.webp",
      "title": "Samsung Galaxy Book Pro 360 13.3\" 2 in 1 i7-1165G7 256GB 8GB W10 NP930QDB-KE2US",
      "amount": "$599.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/FcsAAOSwu4RkPNL-/s-l300.webp",
      "title": "HP EliteBook 840 G9",
      "amount": "$521.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/EtcAAOSwQuhkUZaF/s-l300.webp",
      "title": "Open Box laptop DELL Inspiron 15 3000 15.6 w/SPANISH KEYBOARD and numeric pad",
      "amount": "$259.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/x50AAOSwje1kMZJo/s-l300.webp",
      "title": "Dell Inspiron 15 5593 With Windows 10 Enterprise 64-Bit and Upgrades!",
      "amount": "$260.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/hgcAAOSwIc1jXLFX/s-l300.webp",
      "title": "Lenovo IdeaPad Flex 5i 2-in-1 13.3\" FHD Touch Chromebook i3-1115G4, 8G, 128G",
      "amount": "$289.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/mf4AAOSwie1ka-Pr/s-l300.webp",
      "title": "HP ProBook 640 G8 14\" i5-1145G7 2.60GHz 8GB DDR4 256GB SSD Win 10",
      "amount": "$327.98"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/-w4AAOSwbG1j9BLq/s-l300.webp",
      "title": "ThinkPad X1 Fold 1st Gen 13.3\" 8G, 256G Intel i5-L16G7 Foldable, Tablet Only",
      "amount": "$749.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/EsUAAOSweMZkbSvQ/s-l300.webp",
      "title": "ASUS Chromebook CX1, 11.6\" Display Intel N3350, 32GB eMMC 4GB RAM CX1100CNA-AS42",
      "amount": "$90.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/RvsAAOSwtUFkbAWu/s-l300.webp",
      "title": "NEW OPEN BOX Lenovo ThinkPad T430s 14\" i5-3320M 8GB RAM 128GB SSD Win7 Pro 64bit",
      "amount": "$399.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/MqEAAOSwPJlkZZLh/s-l300.webp",
      "title": "Microsoft Surface Laptop 5 15\" Touchscreen i7-1255U 8GB 256GB SSD Platinum",
      "amount": "$799.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/-eQAAOSwt41kaBh9/s-l300.webp",
      "title": "ASUS Vivobook E210 11.6\" 64GB Intel Platinum 2.80 GHz, 4GB RAM Laptop",
      "amount": "$33.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/KOYAAOSwCSJkbYRZ/s-l300.webp",
      "title": "Dell Latitude 7440 14\" i5-1345U, 256GB SSD, 16GB DDR5 Win 11 Pro",
      "amount": "$850.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/8E0AAOSwOWFj-6rw/s-l300.webp",
      "title": "Lenovo Thinkpad X131e, Windows 10",
      "amount": "$120.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/-iUAAOSwi5lkbRM4/s-l300.webp",
      "title": "ASUS CHROMEBOOK C523NA-DH02 LAPTOP - 15.6\" - 4GB RAM 32 GB eMMc NEW",
      "amount": "$125.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/0-IAAOSw-35kJN-7/s-l300.webp",
      "title": "Dell Latitude 7390 13\" Intel i5-7300U 16GB RAM 256SSD FHD Win10 Professional",
      "amount": "$250.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/xa4AAOSw~gtkX-dr/s-l300.webp",
      "title": "New ASUS L406M 14'' HD intel N4000 4GB 64GB win 10 slate gray Laptop",
      "amount": "$184.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/EUQAAOSwBQtkbY~a/s-l300.webp",
      "title": "Acer 11.6\" Chromebook 311 - Intel Celeron N4000 - 4GB - 32GB eMMC Open Box",
      "amount": "$109.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/a~UAAOSwjSVjesCi/s-l300.webp",
      "title": "Dell - Inspiron 2-in-1 16FHD+ Touch Laptop 12th Gen Intel Evo i5 8GB Me...",
      "amount": "$625.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/AdQAAOSw1e5kbRSh/s-l300.webp",
      "title": "2022 Dell Inspiron 15 3511 15.6\" FHD WVA TOUCH i5-1135G7 256GB NVMe SSD Iris Xe",
      "amount": "$419.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/~agAAOSwjoRkY02h/s-l300.webp",
      "title": "Dell XPS 13 PLUS 9320 13.4 Laptop 12th Gen Intel Core i5 512GB 8GB RAM touch",
      "amount": "$795.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/WgwAAOSwDWFjh3EN/s-l300.webp",
      "title": "Acer Chromebook 512 12\" Touchscreen Laptop N4020 4GB 32GB eMMC Chrome OS",
      "amount": "$99.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/y60AAOSw8UNka4fR/s-l300.webp",
      "title": "ASUS VivoBook E410MA Intel Pentium Silver 4GB DDR4 128GB SSD",
      "amount": "$147.98"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/968AAOSwNjNkbFDN/s-l300.webp",
      "title": "ASUS Chromebook CX1 11.6\" (32GB, 4GB RAM, Intel Celeron N3350) Laptop - Silver",
      "amount": "$79.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/x0gAAOSwLwZif8J1/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 4GB RAM 128GB (64+64) (Rose Gold)",
      "amount": "$199.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/cfEAAOSwej5ka3fN/s-l300.webp",
      "title": "Lenovo 100e 2G 11.6\" AMD 3015e 4GB DDR4 64GB SSD No OS",
      "amount": "$74.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/TokAAOSwsUlka5z2/s-l300.webp",
      "title": "Dell Inspiron 16 7620 16\" i7-1260P 16GB DDR4 512GB SSD Windows 10",
      "amount": "$747.96"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/h3gAAOSw1WlibDYQ/s-l300.webp",
      "title": "Newest HP 14'' Touchscreen Laptop AMD CPU 8GB RAM 192GB SSD (64+128) (Rose Gold)",
      "amount": "$259.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/WZcAAOSwiIBkXHfb/s-l300.webp",
      "title": "Surface Laptop 5 13.5\" Intel i7 12th gen, 16gb, 256GB SSD, Touchscreen",
      "amount": "$1,176.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/MXsAAOSwTf9h3O9v/s-l300.webp",
      "title": "HP 255 G8 Notebook 15.6\" HD LCD AMD 3020E 1.20GHz 8GB 256GB SSD WIFI/BT W10P",
      "amount": "$224.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/dfQAAOSwp79j~OxN/s-l300.webp",
      "title": "Toshiba Satellite Click W35Dt-A3300 Touch 13\" | AMD A4-1200 | 4GB RAM 500GB HDD",
      "amount": "$109.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/evkAAOSwoBBj1dXw/s-l300.webp",
      "title": "EVOO 11.6\" Convertible Touchscreen Laptop, Dual Core, 32GB Storage, Windows 10",
      "amount": "$74.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Hc0AAOSw1Ppfjf-t/s-l300.webp",
      "title": "Acer TravelMate B1 Windows 10  64bit, Office 2019 suit , 128GB SSD, 4GB DDR4",
      "amount": "$120.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/DQoAAOSwwF9kB5ug/s-l300.webp",
      "title": "Lenovo Flex 5 16\" 2-in-1 Touch Laptop i7-1255U 16GB 512GB SSD Gray 82R80002US",
      "amount": "$599.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/gwgAAOSwOwJe6URS/s-l300.webp",
      "title": "Excellent Condition HP Pavilion 13.3\", Core i3, 4GB/128GB SSD, With Warranty",
      "amount": "$214.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/OM8AAOSwXzBj4FYE/s-l300.webp",
      "title": "HP 17.3\" FHD Laptop Intel 4-Core i5-1135G7 16GB RAM 512GB NVMe SSD Win10 -Silver",
      "amount": "$469.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2-MAAOSwFVlkWoUD/s-l300.webp",
      "title": "DELL Inspiron 3520 15.6\" FHD i5-1235U 16GB 512GB SSD i3520-5424BLK BLACK",
      "amount": "$499.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/U1QAAOSwbnxj6pGm/s-l300.webp",
      "title": "2022 Dell Precision 14 5470 i7-12800H 16GB 512GB 14\" FHD+ RTX A1000 NO Wi-Fi",
      "amount": "$899.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/v4gAAOSwfUdivM~K/s-l300.webp",
      "title": "HP 15.6\" Laptop Intel 2.80GHz 128GB SSD Drive 4GB Ram BT Webcam Backlit Keyboard",
      "amount": "$262.97"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/QQQAAOSwyZNkXtL8/s-l300.webp",
      "title": "ASUS VivoBook Go 14 Flip Thin and Light 2-in-1 Laptop, 14 inch HD Touch",
      "amount": "$219.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/wuIAAOSwU8tjK1LZ/s-l300.webp",
      "title": "LG Gram 17\" (2560X1600) Laptop i7-1260P 16GB RAM 512GB SSD Win 11 GRAY",
      "amount": "$799.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/9YAAAOSwmdtkaCO3/s-l300.webp",
      "title": "Lenovo ThinkPad T14 (Gen 3) --- i5-1250P, 16GB Ram, 1TB SSD, Touch Screen",
      "amount": "$799.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/LPYAAOSwLy1kV7Nx/s-l300.webp",
      "title": "Microsoft Surface Laptop Studio 14.4\" 256GB SSD, Intel Core i5 11th Gen 16GB RAM",
      "amount": "$850.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/1IEAAOSwHMJkAVHR/s-l300.webp",
      "title": "Microsoft 13\" Multi-Touch Surface Pro 8 (Core i7, 32GB RAM, 1TB SSD, Platinum)",
      "amount": "$1,549.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/O9cAAOSwL~RgaDgY/s-l300.webp",
      "title": "Acer Chromebook 315 CB315-3H-C2C3 15.6 inch ,32GB, 1.60GHz, With Carrying Case",
      "amount": "$125.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/de4AAOSwBttkMbNG/s-l300.webp",
      "title": "HP Pavilion x360 15-BK193MS Convertible Touch i5 8G 1T 2-in-1 Laptop in Open Box",
      "amount": "$409.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/RJgAAOSwLWdkSXvG/s-l300.webp",
      "title": "HP Laptop 14-dq0070nr, 14\" HD Touchscreen Intel Celeron N4120, 4GB RAM 64GB eMMC",
      "amount": "$179.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/8eIAAOSw4WBht63I/s-l300.webp",
      "title": "HP 17.3\" TOUCHSCREEN 12GB Ram Six-Core AMD Ryzen 5 5500U 1TB HDD Laptop Win 11",
      "amount": "$419.08"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/1f8AAOSwRVRjE6-5/s-l300.webp",
      "title": "HP - Spectre 2-in-1 16\" UHD+ Touch-Screen Laptop - Intel Evo Core i7 - 16GB M...",
      "amount": "$999.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ZP0AAOSwPx1h4oij/s-l300.webp",
      "title": "Lenovo ThinkPad E15 G2 15.6” 512GB, Intel Core i5-1135G7 , 2.4 GHz, 16GB,Win11",
      "amount": "$20.50"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/5zkAAOSw9IFkTqjx/s-l300.webp",
      "title": "HP 15-dy4013dx 15.6\" Laptop Computer Intel Core i5-1155G7 256GB - New -",
      "amount": "$399.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/YTQAAOSwYR5j~1xO/s-l300.webp",
      "title": "HP 14'' FHD 1080p IPS Core i5-1035G4 Upgraded 16GB RAM 512GB SSD Win 10 Laptop",
      "amount": "$399.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/p3IAAOSwZPxkFhcs/s-l300.webp",
      "title": "Dell Latitude 5320 13.3 Laptop Core i5 FHD Touchscreen (OPEN BOX, FROM DELL)",
      "amount": "$419.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/oawAAOSwbm1if8Fp/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 4GB RAM 128GB (64+64) (Black)",
      "amount": "$189.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/IaYAAOSwXWxif8K6/s-l300.webp",
      "title": "Newest HP 14'' Laptop Intel Dual Core CPU 8GB RAM 128GB (64+64) (White)",
      "amount": "$199.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/NHMAAOSww75jxFjm/s-l300.webp",
      "title": "Acer Aspire 5 15.6\" FHD i3-1115G4 Max Boost 4.1Ghz 20GB RAM 512GB SSD Silver",
      "amount": "$299.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/~NoAAOSw~45kXqcD/s-l300.webp",
      "title": "Dell/ PP19S/ 1 GB Windows XP Home Edition/ Inspiron Mini 10/ Open Box",
      "amount": "$49.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/nc4AAOSwu55kXnq~/s-l300.webp",
      "title": "Microsoft Surface Laptop Go 2 12.4\" (128GB SSD, Intel Core i5 11th Gen., 4.20...",
      "amount": "$521.75"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/VSAAAOSwPH5jgUAo/s-l300.webp",
      "title": "ASUS CX1500CN Chromebook, 15.6\" Full HD, Intel Celeron N3350, 4GB RAM - C17",
      "amount": "$129.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/xnUAAOSwWqtjsn3d/s-l300.webp",
      "title": "Microsoft Surface Pro 6, i5 8th Gen, 128GB SSD, 8GB RAM in Retail Box, Fast Ship",
      "amount": "$359.98"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/1EUAAOSwPQljc4KV/s-l300.webp",
      "title": "HP 15-dy2095wm 15.6\" (256GB SSD, Intel Core i5-1135G7, 2.40GHz, 8GB RAM) Laptop",
      "amount": "$400.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/jHcAAOSwLCZicZ~I/s-l300.webp",
      "title": "Lenovo IdeaPad 3i Laptop, 15\" FHD, i3-1115G4, 8GB RAM, 1TB HDD, WiFi 6, Win10",
      "amount": "$319.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/HAMAAOSwL8lkUOxZ/s-l300.webp",
      "title": "🔥 New ASUS Laptop L210MA-DB01 Ultra Thin 11.6” HD Intel N4020 2.8GHz,4GB/64GB",
      "amount": "$115.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/KnMAAOSwA41kZo6R/s-l300.webp",
      "title": "Dell XPS 13 9320 13.4\" i7-1260P 16GB DDR5 512GB SSD Win 10",
      "amount": "$993.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/swIAAOSw6jVjLRyg/s-l300.webp",
      "title": "Newest HP 14'' Touch Laptop Intel Dual Core CPU 8GB RAM 128GB (64+64) (White)",
      "amount": "$219.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/JoQAAOSwxXZjgX-k/s-l300.webp",
      "title": "hp laptop",
      "amount": "$249.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/4FYAAOSwIw9kaTi3/s-l300.webp",
      "title": "Samsung Galaxy Book S, Windows 11, Snapdragon 8Cx CPU 8GB Memory 256Gb Touch).",
      "amount": "$399.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/uz4AAOSw3OZj9nYU/s-l300.webp",
      "title": "HP ZBOOK FIREFLY G9 i7-12709 2.20GHZ 16GB, 512GB SSD 14\"WUXGA, TS, WIN10P",
      "amount": "$791.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/X88AAOSwdndkXnPs/s-l300.webp",
      "title": "Dell Inspiron 15 3520 Laptop 15.6\" Intel i5-1235U 256GB SSD 16GB RAM",
      "amount": "$480.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/E7sAAOSwIc9kODD3/s-l300.webp",
      "title": "HP 15\" Laptop Intel Prentium N5030 15-dw1783wm in Black New/Open Box",
      "amount": "$219.97"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/9f8AAOSw6cVj7utv/s-l300.webp",
      "title": "Open Box Dell Inspiron Plus 16 7620 + I7-12700H 40GB 1TB SSD 3072x1920 High Res",
      "amount": "$889.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/E-8AAOSw9HNjjm7l/s-l300.webp",
      "title": "Acer Swift 5 SF514-55TA-74EC i7-1165G7 16GB 1TB SSD 14\" FHD Touch Fingerprint",
      "amount": "$699.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/dJ4AAOSwI-NkNiPz/s-l300.webp",
      "title": "Samsung Galaxy Chromebook Go 340XDA-KA3 14\" Intel N4500 4GB 64GB Slim Chrome 825",
      "amount": "$118.48"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tVcAAOSwtWFkHcME/s-l300.webp",
      "title": "Lenovo T14 Gen 2 Touch 11th Gen Intel i5-1145G7 Vpro 1TB SSD 16GB RAM Warranty",
      "amount": "$579.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/W6YAAOSw1XBkQszC/s-l300.webp",
      "title": "Acer Chromebook Enterprise 715 i3-8130U 8GB 128GB 15.6\" FHD Chrome NX.HB0AA.007",
      "amount": "$249.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/33cAAOSwmRli4wrS/s-l300.webp",
      "title": "HP Chromebook 11A G",
      "amount": "$99.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/7eAAAOSwNjNkWsCs/s-l300.webp",
      "title": "Microsoft Surface Laptop 4 13.5\" Touch AMD Ryzen 5 8GB 256GB - Platinum",
      "amount": "$509.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Ry4AAOSwxdxkTVyf/s-l300.webp",
      "title": "Acer Chromebook 311 CB311 11.6\" Laptop Intel Celeron N4000 4GB RAM 32GB eMMC",
      "amount": "$55.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/lmsAAOSw71Jj8nF7/s-l300.webp",
      "title": "HP 14-dq2053cl 14\" FHD Non-Touch Laptop i3-1125G4 8GB RAM 256GB SSD Silver",
      "amount": "$279.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ziEAAOSw8oZkZQBv/s-l300.webp",
      "title": "HP Laptop 17.3\" Silver 2022 HD 3.0GHz i3-1125G4 8GB 256GB SSD - Open Box",
      "amount": "$379.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/HdgAAOSwY75kYa4l/s-l300.webp",
      "title": "Kano PC 1.10 GhZ Processor 4GB Memory 64GB Storage Windows 10",
      "amount": "$61.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/zcEAAOSw92lkJK0f/s-l300.webp",
      "title": "HP 17-cn0045nr Intel Celeron N4120, 4GB 256GB SSD Gold 17.3\" Laptop Win 11 NEW",
      "amount": "$245.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/xlUAAOSw3iZkPxQL/s-l300.webp",
      "title": "Asus Vivobook S 14X OLED LAPTOP i7-12700h 40 gb ram 4 tb ssd windows 11 pro",
      "amount": "$750.00$1,110.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/IJcAAOSwKbtkbTgi/s-l300.webp",
      "title": "Microsoft Surface Pro 7 12.3 inch (256GB, Intel Core i5 10th Gen., 1.10GHz, 8GB)",
      "amount": "$325.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/hQ4AAOSwcCFjGMi8/s-l300.webp",
      "title": "Samsung Galaxy Chromebook Go 14\" AT&T 4G LTE / GSM Unlocked (XE345XDA) Open Box",
      "amount": "$119.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/COIAAOSweIBkZnGy/s-l300.webp",
      "title": "NEW HP Elite x2 G8 i5-1135G7 16GB 256GB Tablet WIN 10 PRO WWAN Pandora LTE GPS",
      "amount": "$599.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rPgAAOSwMi1kbQSj/s-l300.webp",
      "title": "Acer Chromebook 315 15.6 HD Intel Celeron, Pure Silver - Open Box",
      "amount": "$129.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/iIIAAOSww6lf0FW0/s-l300.webp",
      "title": "HP Chromebook 14-CA137NR 14'' (64GB eMMC, Intel Celeron 3350, 1.1 GHz, 4GB...",
      "amount": "$75.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/RA4AAOSwyhVkZF~3/s-l300.webp",
      "title": "ASUS TUF Gaming F17 17.3\" FHD Laptop i5-11260H 8GB 512GB SSD RTX 3050 Ti FX706HE",
      "amount": "$748.88"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/n-wAAOSwejRkSXpB/s-l300.webp",
      "title": "HP 14\" Google Chromebook Chrome Book Laptop Notebook 14a-na1043cl 4GB RAM 64GB",
      "amount": "$179.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/XqsAAOSw5axkZPYz/s-l300.webp",
      "title": "Microsoft Surface Laptop Go 12.4\" Touchscreen (256GB SSD, Intel Core i5-1035G1",
      "amount": "$380.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/RKsAAOSws0hkZ60w/s-l300.webp",
      "title": "Dell XPS 15 9570 i7-8750H 4K UHD TOUCH 512GB NVMe SSD 16GB GTX 1050Ti Max-Q 4Gb",
      "amount": "$619.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/CFQAAOSwgcBj38qg/s-l300.webp",
      "title": "Lenovo Thinkpad T460 14 HD, Core i5-6300U 2.4GHz, 8GB RAM, 256GB SSD",
      "amount": "$179.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/rTQAAOSwsJtkXXrB/s-l300.webp",
      "title": "Microsoft Surface Pro 5th Gen (128GB, 4GB) Laptop - Silver - M1796",
      "amount": "$250.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/NpIAAOSwX0xiKirs/s-l300.webp",
      "title": "HP 15\" Laptop 11th Generation Intel i5-1135G7 8GB 256GB Win 11 Home 15-dy2024nr",
      "amount": "$399.88"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/fRUAAOSwul5kbTJZ/s-l300.webp",
      "title": "ASUS C204E CHROMEBOOK 11.6\" CELERON N4020 4GB 32GB CHROME OS C204EE-YB02-GR NEW",
      "amount": "$99.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/NWYAAOSw95tjDkS7/s-l300.webp",
      "title": "HP Probook 11\" 8GB 128GB SSD Laptop - 4HY12UP#ABA",
      "amount": "$209.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ZHoAAOSwyARjf84~/s-l300.webp",
      "title": "DELL LATITUDE 7430 BUSINESS 14\" FHD, DECA CORE i7-1265U, 16GB, 512GB SSD, 2Y WTY",
      "amount": "$799.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2WAAAOSwQVBja~9N/s-l300.webp",
      "title": "Microsoft Surface Pro 8-11th Gen Intel Core i5_256/8GB_with Pen&Keyboard(Black)",
      "amount": "$699.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/kGYAAOSwzIdjZbvW/s-l300.webp",
      "title": "Lenovo Ideapad 730S 13.3”Intel Core i7-8565U,512GB NVMe ,8GB RAM, Gray,Win10",
      "amount": "$228.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/vr8AAOSwPBVkJdSQ/s-l300.webp",
      "title": "ASUS 15.6\" Laptop Windows 11 1.1Ghz 4GB 128GB L510MA-TH21 Windows 11 Home S Mode",
      "amount": "$179.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2IEAAOSwwm5h-FZd/s-l300.webp",
      "title": "Lenovo ThinkPad T14 Gen 2 i5 vPro 11 gen",
      "amount": "$480.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/tycAAOSwklljGPD7/s-l300.webp",
      "title": "Samsung Galaxy Book Go 5G NP545XLA 14” 128GB Snapdragon GSM  Unlocked Open Box",
      "amount": "$239.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/qVQAAOSwT5RkZ7wO/s-l300.webp",
      "title": "NEW Lenovo ThinkPad T16 Gen 1 i5-1235U 16GB RAM 1TB SSD - Warranty 2026",
      "amount": "$789.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/ZOEAAOSw0ypi4NJa/s-l300.webp",
      "title": "HP Spectre x360 15T ,15.6\"4K WLED Tch,Nvid4GB, i7-8750H,W10 PRO,512GB,16GB",
      "amount": "$789.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/iOgAAOSw6oJkSCaW/s-l300.webp",
      "title": "Samsung Galaxy Book2 360 NP730QED-KA2US 13.3\" Laptop Intel Core i5-1235U 256GB",
      "amount": "$589.95"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/2Y0AAOSwej5kZnvA/s-l300.webp",
      "title": "Dell Precision 3470 Workstation Laptop i7-1270P @ 2.20GHz 256GB SSD 32GB RAM",
      "amount": "$729.99"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/Z7kAAOSw0MNiyhXa/s-l300.webp",
      "title": "Lenovo IdeaPad Flex 5 14ITL05 14",
      "amount": "$400.00"
    },
    {
      "image": "https://i.ebayimg.com/thumbs/images/g/LTQAAOSwNrhkZ5Vx/s-l300.webp",
      "title": "HP ELITEBOOK 830 G8 i5-1145G7 2.60GHZ 16GB 256GB SSD, 13.3\"FHD, WIN10P",
      "amount": "$377.99"
    }
  ]
  function generateRandomNumber() {
    // Generate a random number between 0 and 9999999999 (inclusive)
    let randomNumber = Math.floor(Math.random() * 10000000000);
  
    // Convert the random number to a string
    let randomString = randomNumber.toString();
  
    // Pad the string with leading zeros if it is less than 10 characters
    while (randomString.length < 10) {
      randomString = "0" + randomString;
    }
  
    return Number(randomString);
  }

  function slugify(text, id) {
    // Convert string to lowercase and replace spaces with hyphens
    let slug = text.toLowerCase().replace(/\s+/g, '-');
  
    // Remove special characters, symbols, and punctuation
    slug = slug.replace(/[^\w\-]+/g, '');
  
    return id+"-"+slug;
  }
  
  

  let cleanAmount = (amount) => Number(amount.replace(/[$,]/g, ""));


// "formatted_address":"Montreal, QC, Canada","short_formatted_address":"QC, Canada","place_id":"ChIJDbdkHFQayUwR7-8fITgxTmU"
// {"lat":45.5018869,"lng":-73.56739189999999}

  const submitApi = async () => {

    
    // description : `<div class="editor" name="description" spellcheck="false"><div><div>Welcome to Schwab's in Leduc. We are the Greater Edmonton Source for Pre-Owned Vehicles.</div></div><div><br></div><div>Schwab Chevrolet Buick GMC is located on 6503 Sparrow Dr in Leduc, AB. As a country dealer we serve a large rural area, including the Leduc County communities of Leduc , Beaumont, Calmar, Devon, Thorsby, Warburg, and Nisku, as well as Millet, Wetaskiwin, Sherwood Park, and Camrose. The Schwab team is also proud to serve Alberta as the premier Chevrolet, Buick, GMC dealer.&nbsp;<br></div><div><br></div><div><div><b>Come See Schwab Chevrolet Buick GMC For Yourself</b></div><div><br></div><div>Over the years, Schwab Chevrolet Buick GMC has grown. Today we now enjoy a state-of-the-art showroom, Parts &amp; Service Centres and a Finance Department. Whether you are in need of a new vehicle or parts / service for your current vehicle,Schwab Chevrolet Buick GMC in Leduc is here to assist you with your automotive needs. At Schwab Chevrolet Buick GMC, we look forward to serving you, or valued guest, for years to come. Please stop by our dealership, located at 6503 Sparrow Dr, Leduc, AB and speak to our representatives today.</div></div><div><br></div><div>Open Today! Sales: 9am-3am</div><div>Call us at: <b>780-986-2277</b>&nbsp;<br></div></div>`,


    data2.map( async (data, index) => {
      
          const body = {
            description : `<div class="editor" name="description" spellcheck="false">Open box laptop for sale</div>`,
      
            isActiveAd: true,
            isFeaturedAd: false,
            isHighlightAd: false,
            isWebsiteLinkedAd: false,
            listing_for : 1,
      
      
            seller: "The Schwab Family",
            seller_id: "646ba170c30b66c1993f7713",
      
            tags : [],
            websiteURL : "",
            youtubeVideoURL : "",
      
            country_code : "+1",
            "email": "byron@schwabs.ca",
            "phone": "8883184582",
      
            "formatted_address":"Toronto, ON, Canada",
            "short_formatted_address":"ON, Canada",
            "place_id":"ChIJpTvG15DL1IkRd8S0KlBVNTI",
            "lat":43.653226,
            "lng":-79.3831843,
          }
      
          body["category"] = "Cars",
          body["category_id"] = "6468c5c23d2fe40af7b9c049",
      
          body["amount"] = cleanAmount(data.amount)
          const uid = generateRandomNumber();
          body["uid"] = uid
          body["slug"] = slugify(data.title, uid);
      
          body["title"] = data.title,
          body["images"] = [
            {
              url : data.image,
              public_id : "public_id",
        
              path : "",
              previewUrl : ""
            },
          ]
      
          const imgArr = []
      
          body["images"].forEach(element => {
            imgArr.push({
              url : element.url,
              public_id : element.public_id,
            })
          });
      
          body["images"] = imgArr

          if (index % 15 === 0 ) {
            body["isFeaturedAd"] = true
            console.log('+++  props',  body["isFeaturedAd"]);

          } else if (index % 3 === 0 ) {

            body["isHighlightAd"] = true

          }
          try {
            const res = await axios.post("http://localhost:9090/listing", body)
            console.log('+++ res', res.status);
            
          } catch (error) {
            console.log('+++ error', error);
            
          }

    })

  }  

  
 
  return (
    <div>Test

      {data.slice(0,1).map((data, index) => {

        return (
          <div key={"data__"+index}>
            {data.title}
            <div><button onClick={() => submitApi()}>call</button></div>
          </div>
        )
      })}

    </div>
  )
}

export default Test
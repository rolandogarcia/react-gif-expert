/* eslint-disable no-unused-vars */
// rafc
// import React from 'react'

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



// In hook, es una funcion que regresa algo
export const useFetchGifs = ( category ) => {

//   Al retirar esto deja de ser un functional component .jsx
//   return (
//     <div>useFetchGifs</div>
//   )

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])



    return  {
            // images: images,
            images,
            //isLoading: true
            isLoading
    }
}

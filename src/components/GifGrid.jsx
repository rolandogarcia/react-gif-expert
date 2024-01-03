/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {


// La palabra use es parte del estandar de los hooks

    const { images, isLoading } = useFetchGifs( category );

    //console.log({ images, isLoading })
    //console.log({ isLoading })


  return (
    <>
        <h3>{ category }</h3>
        {
            // isLoading ? (<h2>Cargando ...</h2>) : null
            isLoading && (<h2>Cargando ...</h2>)
        }
        

        {/* <ol> */}
        <div className="card-grid">
            {
                // images.map( imagen => (
                //     <li key={ images.id }>{ imagen.title }</li>
                // images.map( ({ id, title }) => (
                //     <GifItem key={ id } />
                // ))
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id } 
                        // image={ image }
                        // title={ image.title }
                        // url={ image.url }
                        { ...image }
                    />
                ))


            }
        </div>
    </>
  )
}

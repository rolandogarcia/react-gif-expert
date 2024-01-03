//  GIPHY: API KEY
//  cN4CPCxMR6J0vpDiayOYGW6ges8dV43X
//
//import React from 'react'
import { useState } from 'react';
//import { AddCategory, GifGrid } from './components/index';
import { AddCategory, GifGrid } from './components';

// rafc
export const GifExpertApp = () => {


  //const [ categories, setCategories ] = useState( 'One Punch');
  // No puede haber estados repetidos
  //const [ categories, setCategories ] = useState( ['One Punch', 'Dragon Ball']);
  const [ categories, setCategories ] = useState( ['One Punch']);
  

  const onAddCategory = ( newCategory ) => {
    // Valorant
    console.log( newCategory );
    
    // En react no usar el push para modificar los arreglos 
    // categories.push('Valorant');
    // categories.push(newCategory);
    // setCategories(['Hola Mundo'])
    // setCategories([ 'Valorant', ...categories]);


    if( categories.includes( newCategory ))
        return;


    setCategories([ newCategory, ...categories]);
    // setCategories( cat => [ ...cat, 'Valorant' ] );
  } 


  // console.log( 'categories --> ' + categories ) ;  // One Punch

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
       
        {/* Input */}
        {/* <AddCategory setCategories={ setCategories } /> */}
        <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ event => onAddCategory(event)}
            // onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}
        {/* <button onClick={ onAddCategory }> Agregar </button> */}

        {/* <ol> */}
            { 

                categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                            />
                )) 
                
                // categories.map( category => (
                //         <div key={ category }>
                //             <h3>{ category }</h3>
                //             <li>{ category }</li> 
                //         </div>
                // )) 

                // categories.map( category => {
                //      return (
                //         <div key={ category }>
                //             <h3>{ category }</h3>
                //             <li>{ category }</li> 
                //         </div>
                //     )
                // }) 
            }
        {/* </ol> */}
            {/* Gif Item */}
    </>
  )
}

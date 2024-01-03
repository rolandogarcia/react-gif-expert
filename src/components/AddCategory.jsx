/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// rafc
// Se elimina el import react porque ya esta global

import { useState } from'react';


//export const AddCategory = () => {
//export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    //const [ inputValue, setInputValue ] = useState('One Punch');
    const [ inputValue, setInputValue ] = useState('');

    //const onInputChange = (event) => {
    const onInputChange = ({ target }) => {
        //console.log(event.target.value);
        //console.log(target.value);
        
        // setInputValue('HolaMundo');
        //setInputValue(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);

        if(inputValue.trim().length < 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(  inputValue.trim() );
        setInputValue('');
    }


    return (        

        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input 
                type= "text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />           
        </form>

      )
}

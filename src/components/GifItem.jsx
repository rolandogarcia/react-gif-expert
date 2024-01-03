/* eslint-disable react/prop-types */

//export const GifItem = (props) => {
//export const GifItem = ({ image }) => {
export const GifItem = ({ title, url }) => {


  //console.log(props);
  //console.log(image);
  //console.log({ title, url, id });


  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

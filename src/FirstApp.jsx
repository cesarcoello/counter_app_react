//si es un valor fijo, se deja aparte, pero siempre FirstApp lo toma en cuenta
// no se permiten obj, se deben convertir a json (StringiFy)
const newMessage = {
    message: 'Hola mundo',
    title: 'por Cesar',
}; 

import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle } ) => {
  
  // console.log(props);

  return (
    <>
    <h1> { title }</h1>
    {/* <code>Cesar { JSON.stringify( newMessage ) } </code> */}
    <p>{ subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
  title : PropTypes.string.isRequired,
  subTitle :  PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  title: 'No pusiste titulo',
  subTitle: 'no hay subtitulo',

}
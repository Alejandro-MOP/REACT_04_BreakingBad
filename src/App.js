import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

/*==========================================
      Componentes CSS
===========================================*/
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 45%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 3rem 0;
  padding: .5rem 2rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: 1.5s all ease;

  &:hover{
    background: #e1e1e1;
    color: #0f574e;
    border-radius: 4rem;
    -webkit-transform: scale(1.15);
    cursor: pointer;
    }
`;

/*==========================================
      Componentes React
===========================================*/


function App() {

  //states de frase
  const  [frase, guardarFrase] = useState ({});

  //Consultar API
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');//realiza la promisa o la petición a la API
    const frase = await api.json() //Convierte la respuesta en un objeto JSON
    //console.log(frase[0]);//imprime la primera respuesta 
    guardarFrase(frase[0]);
  }

  //Cargar Frase al cargar pagina
  useEffect (() => {
    consultarAPI()
  },[]);
 


  return (

    <Contenedor>
      <Frase 
        frase={frase}
      />

      <Boton onClick={consultarAPI}> Obtener Frase</Boton>
    </Contenedor>

  );
}

export default App;

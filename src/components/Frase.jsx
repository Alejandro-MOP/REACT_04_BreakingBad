import React from "react";
import styled from '@emotion/styled'

/*==========================================
      Componentes CSS
===========================================*/

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 15rem;
  
    @media (min-width: 992px){
        margin-top: 15rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -4rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight:bold;

    }
`;

/*==========================================
      Componentes React
===========================================*/

const Frase = ({frase}) => {

    if(Object.keys(frase).length === 0 ) return null;

  return (
      
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
  );
};

export default Frase;

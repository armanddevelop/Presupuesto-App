import React from 'react';

const Gasto = ({gasto}) => {

   return (

        <li className="gastos">
          <p>{gasto.gasto}
            <span className="gasto">$ {gasto.gastoParse}</span>
          </p>  
        </li>
    );
}
 
export default Gasto;
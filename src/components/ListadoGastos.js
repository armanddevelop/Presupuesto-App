import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({gastos,restante}) => {

    
    
    return ( 
        <div className="gastos-realizados">
            <h2>Listado de Gastos</h2>
            <p>{gastos.map(gasto =>(
                <Gasto
                    gasto ={gasto}
                    key = {gasto.id}
                ></Gasto>
            ))}</p>
           
        </div>
     );
}
 
export default ListadoGastos;
import React,{Fragment} from 'react';
import {revisarPresupuesto} from '../helpers';

const ControlPresupuesto = ({budget, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>
            <div className={revisarPresupuesto(budget,restante)}>
                Restante: ${restante}
            </div>
        </Fragment> 
        
     );
}
 
export default ControlPresupuesto;
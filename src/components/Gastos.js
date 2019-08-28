import React, {useState, Fragment} from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import shorid from 'shortid';
import ErrorGastos from './errorGastos';

const Gastos = ({setSpending,setCrearGasto, restante}) => {
    
    
    let mensajes={
        errorLabelGasto: 'el campo de gasto es requerido',
        errorLabelCosto: 'el campo de costo es requerido',
        title:'Agrega tus Gastos aqui',
        boton: 'Agregar'
    }

    const [gasto,setGasto] = useState('');
    const [cantidad,setCantidad] = useState('');
    const [agregargasto,setAgregarGasto] = useState(false);
    
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        //to do hacer parseInt a cantidad
        let gastoParse = parseInt(cantidad,10);
        //construir el objeto de setSpending
        const gastadera = {
            gasto,
            gastoParse,
            id: shorid.generate()
        }
        
        if(restante >= 0 ){

            setSpending(gastadera);
            setCrearGasto(true);
            setAgregarGasto(false);
            //resetear el formulario
            setGasto('');
            setCantidad('');
        }
        else{
            setAgregarGasto(true);
        }
        
        
        
        
    }
    
    
    return (
        <Fragment>
            <ValidatorForm onSubmit={handleSubmit}>
                <h2>{mensajes.title}</h2>
                    <div className="campo">
                        <TextValidator 
                                type="text" 
                                className="u-full-width" 
                                label="Agrega el nombre de tu Gasto*"
                                validators={['required']}
                                errorMessages ={mensajes.errorLabelGasto}
                                onChange={event => setGasto(event.target.value) }
                                name="gasto"
                                value = {gasto}
                                id="gasto"
                        ></TextValidator>
                            
                        <TextValidator 
                                type="number" 
                                className="u-full-width" 
                                label="Agrega la cantidad de tu Gasto*"
                                validators={['required']}
                                errorMessages ={mensajes.errorLabelCosto}
                                onChange={event => setCantidad(event.target.value)}
                                name="costo"
                                value = {cantidad}
                                id="costo"
                        ></TextValidator>
                        <button type="submit" className="button-primary u-full-width">{mensajes.boton}</button>
                    </div>
            </ValidatorForm>
            <ErrorGastos agregargasto = {agregargasto}></ErrorGastos>
        </Fragment> 
        
     );
}
 
export default Gastos;
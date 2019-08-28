import React,{Fragment, useState} from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const Pregunta = ({setDinero,setRestante}) => {

    
    
    let titulo = 'Coloca tu presupuesto';
    
    let errorLabel = 'El campo de Presupuesto es requerido';

    const [presupuesto,setPresupuesto] = useState('');

    
    const handleSubmit= (event)=>{
        event.preventDefault();
        //hacer un parseInt al valor antes de pasarlo
        let presupuestoParse = parseInt(presupuesto,10);
        setDinero(presupuestoParse);
        setRestante(presupuestoParse);
       
       
        
        
    }

    return (
        <Fragment>
            <h2>{titulo}</h2>
            <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator 
                    type="number" 
                    className="u-full-width" 
                    label="Agrega tu presupuesto*"
                    validators={['required']}
                    errorMessages ={errorLabel}
                    onChange={event => setPresupuesto(event.target.value) }
                    name="presupuesto"
                    value = {presupuesto}
                    id="presupuesto"
                ></TextValidator>
                <button type="submit" className="button-primary u-full-width">submit</button>
            </ValidatorForm>
        </Fragment>  
        
    );
}
 
export default Pregunta;
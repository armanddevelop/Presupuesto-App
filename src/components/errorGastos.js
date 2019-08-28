import React from 'react';

const ErrorGastos = ({agregargasto}) => {

    const styles = {
        display : 'none'
    }
    if(agregargasto){
        styles.display = 'block';
    }

    return (
        <div>
            <p style = {styles} className="alert alert-danger">
                ya no tienes presupuesto
            </p>
        </div>     
    );
}
 
export default ErrorGastos;
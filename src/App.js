import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Pregunta from "./components/Pregunta";
import Gastos from "./components/Gastos";
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {
  //state del presupuesto
  const [budget,setBuget] = useState();
  const [restante,setRestante] = useState();
  const [spending,setSpending] = useState({});
  
  const [gastos,setGastos] = useState([]);
  const [crearGasto,setCrearGasto] = useState(false);
  
  

  const setDinero =(data) =>{

    setBuget(data);
    

  }
  
  

  useEffect(()=>{
    
    if(crearGasto){
      
      const listadoGastos = [...gastos,spending];
    
      setGastos(listadoGastos);
      //restar el presupuesto
      const presupuestoRestante = restante - spending.gastoParse;
      setRestante(presupuestoRestante); 
      //una vez que se agrega se pone creaGasto en false de nuevo
      setCrearGasto(false);

    }
    

  },[crearGasto]);

  return (
    <div className="App container">
      <Header title ="Gasto semanal"></Header>
      <div className="contenido-principal contenido">
        {(budget ?
                <div className="row">
                  <div className="one-half column">
                    <Gastos 
                      setSpending = {setSpending}
                      setCrearGasto = {setCrearGasto}
                      restante={restante}
                      ></Gastos>
                  </div>
                  <div className="one-half column">
                    <ListadoGastos 
                      gastos = {gastos}
                      
                    ></ListadoGastos>
                    <ControlPresupuesto
                      budget={budget}
                      restante={restante}
                    ></ControlPresupuesto>
                  </div>
                </div> 
                   : <Pregunta setDinero = {setDinero} setRestante={setRestante}></Pregunta>)}
      </div>
    </div>
  );
}

export default App;

import React, {Component} from 'react'
import BarraIzq from './BarraIzq'
class Cabezera extends Component
{
   
    render(){
        return(
            <div >
                <div className="cabezera">
                <h1>Leandro Ezequiel Almirón</h1>
                    <br></br>
                    <dd><h2>Estudiante universitario</h2></dd>  
                </div>
                <div className="barra-redes-sociales">
                    <BarraIzq/>
                </div>
            </div>
               
             
        )
    }
}
export default Cabezera;
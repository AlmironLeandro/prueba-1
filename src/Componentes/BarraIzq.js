import React,{Component} from 'react'
import github from "../Imagenes/github.png"
import linkedin from "../Imagenes/linkedin.png"
import instagram from "../Imagenes/instagram.png"

class BarraIzq extends Component
{
    render(){
        return(
            <div className="iconos">
                <a href="#"><img src={github}/>         </a> 
                <br></br>   
                <a href="#"><img src={linkedin}/>       </a>  
                <br></br>   
                <a href="#"><img src={instagram}/>      </a>  
            </div>
        )}
}
export default BarraIzq;
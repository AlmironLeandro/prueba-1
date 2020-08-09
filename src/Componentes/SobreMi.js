import React,{Component} from 'react'
import aboutMe from '../Imagenes/about me.png'

class SobreMi extends Component
{
    render(){
        return(
            <div className="contenedor_aboutMe">
                <div className="aboutme">
                   <img src={aboutMe}></img>  <p> Sobre mi</p>
                </div>
                <div className="soy">
                    <p>Soy un estudiante con una gran pasión por la
                       industria de nuevas tecnologias,<br></br> con muchas ganas
                        de iniciar en el mercado laboral como programador.</p>
                </div>
            </div>
        )}
}
export default SobreMi;
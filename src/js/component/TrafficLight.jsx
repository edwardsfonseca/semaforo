
import React, {useState} from "react";
const Trafficlight =() =>{
    const [colorRojo, setColor3] = useState("red");
    const [colorAmarillo, setColor2] = useState("amarillo");
    const [colorVerde, setColor1] = useState("verde");
    const [colorPurple, setColor4] = useState("morado");
    const[opened, setOpened]= useState(false);
    return(
    <div className="cable">
        <button style={{"--clr":"#1e9bff"}} type="button" onClick={()=> {if(opened===true){
        setOpened(false)
    }else{
        setOpened(true)
    }}} ><span>Click ME !<i></i></span></button>
    <div className="semaforo">
        
        <div className={colorRojo} onClick={()=>{ if(colorRojo === "red"){
            setColor3("red glow") 
            setColor2("amarillo")
            setColor1("verde")
        }else{
            setColor3("red")
        } }} ></div>
        <div className={colorAmarillo} onClick={()=>{if(colorAmarillo === "amarillo"){
            setColor3("red") 
            setColor2("amarillo glow")
            setColor1("verde")
        }else{
            setColor2("amarillo")
        }}}></div>
        <div className={colorVerde} onClick={()=>{if(colorVerde ==="verde"){
            setColor3("red") 
            setColor2("amarillo")
            setColor1("verde glow")
        }else{
            setColor1("verde")
        }}}></div>
        {opened && <div className={colorPurple} onClick={()=>{ if(colorPurple === "morado"){
            setColor3("red") 
            setColor2("amarillo")
            setColor1("verde")
            setColor4("morado glow")
        }else{
            setColor4("morado")
        } }} ></div>}
    
    
    </div>
    
    <div className="hr"></div>
    <div className="piso"></div>
    <div className="col d-flex">
        <div className="ralla"></div>
        <div className="ralla"></div>
        <div className="ralla"></div>
        <div className="ralla"></div>
        <div className="ralla"></div>
        <div className="ralla"></div>
        
    </div>
    <div className="piso"></div>
    </div>)
}
export default Trafficlight;
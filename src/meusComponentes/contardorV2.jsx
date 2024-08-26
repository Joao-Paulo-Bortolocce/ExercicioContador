import { useState } from "react";

export default function ContadorV2(props) {
    const [valor,setValor] = useState(0); //hook Atribuindo o valor inicial passando como parametro
    
    function incrementar(){
        setValor(valor+1);
    }

    function decrementar(){
        valor>0?setValor(valor-1):setValor(0);
    }
    
    return (
        < div className="placar" >
            <div >
                <h1>{valor}</h1>
            </div>
            <div className="botoes">
                <button onClick={()=>{
                    incrementar();
                }}>+</button>
                <button onClick={()=>{
                    decrementar();
                }}>-</button>
            </div>
        </div >
    );
}
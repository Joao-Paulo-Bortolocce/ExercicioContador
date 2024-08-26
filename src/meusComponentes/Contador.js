import { Component } from "react";
import "../estilo/num.css";

export default class Contador extends Component{
    
    constructor(props){
        super();
        this.state={valor:0};
        // this.incrementar=this.incrementar.bind(this);
        // this.decrementar=this.decrementar.bind(this);
    }

    incrementar(){

        this.setState({
            valor: this.state.valor+1
        })
    }

    decrementar(){
        if(this.state.valor>0){
            this.setState({
                valor: this.state.valor-1
            })
        }
    }
    
    render(){
        return(
            <div className="placar">
                <div >
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={() => {this.incrementar();}}>+</button>
                    <button onClick={() => {this.decrementar();}}>-</button>
                </div>
            </div>
        )
    }
}
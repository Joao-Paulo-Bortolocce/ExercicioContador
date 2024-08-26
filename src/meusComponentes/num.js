import { Component } from "react";
import "../estilo/num.css";

export default class Num extends Component {
   constructor(props) {
      super();
      this.state = {
         numContador: 0
      }
   }

   componentDidMount() {
      console.log("Componente foi montado");
      console.log(this.state.numContador)
   }

   mudaValor(x) {
      let atual = this.state.numContador + x
      if (atual < 0)
         atual = 0;
      this.setState({
         numContador: atual
      })

   }

   componentDidUpdate() {
      console.log("Foi montado")
   }

   render() {
      return (
         <div className="placar">
            <p>{this.state.numContador}</p>
            <div className="botoes">

               <button onClick={() => { this.mudaValor(1) }}>+</button>
               <button onClick={() => { this.mudaValor(-1) }}>-</button>
            </div>
         </div>
      )
   }
}
import React from "react";
import "./style.css";
export const Contato = ()=> {
 return(
  <div id="contato">
   <p id="paragrafo">Ficou alguma dúvida? Teremos um grande prazer em ajudá-lo!</p> 
   <p id="paragrafo">Para mais informações entre em contanto conosco:</p>
   <br></br>
   <form>
    <fieldset>
    <div className="campo">
      <label>
        <span><strong>Seu nome:</strong></span>
        <input type="text" className="input_text" name="nome" id="name"/>
      </label>
      </div>
      <div className="campo">
      <label>
        <span><strong>Seu email:</strong></span>
        <input type="email" className="input_text" name="email" id="email"/>
      </label>
      </div>
      <div className="campo">
      <label>
			 <span><strong>Sua dúvida:</strong></span>
			<textarea className="message" name="duvida" id="duvida"></textarea>
			<input type="button" className="botao" value="Enviar" />
		</label>
    </div>
    </fieldset>
   </form>
   </div>
 );   
}
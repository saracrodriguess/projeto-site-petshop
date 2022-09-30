import React from "react";
import "./style.css";
export const Servicos = ()=>  {
    return (
        <div id="servicos">
            <h4 id="titulo">Nossos serviços:</h4>
            <br></br>
            <p id="subtitulo">Cadastre-se e receba nossas promoções!!</p> 
            <br></br>
            <form>
                <fieldset className="grupo">
                <div className="campo">
                    <label>
                        <span><strong>Seu email:</strong></span>
                        <input type="email" className="input_email" name="email" id="email"/>
                    </label>
                    </div>
                    <div className="campo">
                    <label>
                        <span><strong>Seu pet:</strong></span>
                        <select id="pet" name="pet" className="select">
                        <option selected disabled value="">Selecione</option>
		                <option value="cachorro">Cachorro</option>
		                <option value="gato">Gato</option>
		                <option value="peixe">Peixe</option>
                        <option value="passaro">Pássaro</option>
	                    </select>
                    </label>
                    </div>
                    <div className="campo">
                    <label>
                    <input type="submit" className="button" value="Enviar" />
                    </label>
                </div>
                </fieldset>
            </form>

        </div>
    );
}
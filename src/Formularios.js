import React, { Component } from "react";

const Ejemplo1 = () => {

    return(

        <div>
            <form action="" method="post" name="formu1" id="formuId"> 
                <fieldset>
                    <legend> Campos de tipo input con ancho de 100% </legend>
                    <label htmlFor="nombreId"> Nombre: </label>
                    <input type="text" id="nombreId"></input>

                    <label htmlFor="apId"> Apellidos: </label>
                    <input type="text" id="apId"></input>

                    <input type="submit" value="Enviar"></input>
                </fieldset>
            </form>
        </div>

    )

}

const Ejemplo2 = () => {

    return(

        <div>
            <form action="" method="post" name="formu2" id="formu2Id"> 
                <fieldset>
                    <legend> Campos de tipo input text que tienen un ancho del 60% </legend>

                    <label htmlFor="nombre2Id"> Nombre: </label>
                    <input type="text" name="nombre" id="nombre2Id"></input> <br/><br/>

                    <label htmlFor="ap2Id"> Apellidos: </label>
                    <input type="text" name="apellidos" id="ap2Id"></input> <br/><br/>

                    <label htmlFor="buscarId"> Busqueda: </label>
                    <input className="busqueda" name="buscar" type="text" id="buscar" id="buscarId"/> <br/><br/>

                    <textarea  placeholder="Escribe tu opinión en este cuadro textarea"></textarea> <br/> <br/>

                    <select id="discoid" name="selectdiscos"> 
                        <option value="hellfire">Edguy - Hellfire Club</option> 
                        <option value="ecliptica">Sonata Arctica - Ecliptica</option> 
                        <option value="karma">Kamelot -Karma</option> 
                    </select> <br/> <br/>

                    <input type="radio" name="sexo" id="masculino" value="M" /> 
                    <label for="masculino">Masculino</label> {/* Permite hacer clic en la etiqueta para activar el radio. Es importante de cara a la accesibilidad  */}
                    
                    <input type="radio" name="sexo" id="femenino" value="F" /> 
                    <label for="femenino">Femenino</label>  {/*Permite hacer clic en la etiqueta para activar el radio. Es importante de cara a la accesibilidad */}

                    <input type="submit" value="Enviar"></input>
                </fieldset>
            </form>
        </div>

    )

}


class Formularios extends Component {

    render() {

        return(

            <div>
                 <Ejemplo1/>
                <Ejemplo2/>
            </div>

        )

    }

}

export default Formularios
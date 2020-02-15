import React, { Component } from "react";

const Ejemplo1 = () => {

    return(

        <div>
            <form action="" method="post" name="formu1" id="formuId"> 
                <fieldset>
                    <legend> Campos de tipo input con ancho de 100% </legend>
                    <label for="nombreId"> Nombre: </label>
                    <input type="text" id="nombreId"></input>

                    <label for="apId"> Apellidos: </label>
                    <input type="text" id="apId"></input>

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
            </div>

        )

    }

}

export default Formularios
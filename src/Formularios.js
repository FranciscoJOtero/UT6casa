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

const Ejemplo2 = () => {

    return(

        <div>
            <form action="" method="post" name="formu2" id="formu2Id"> 
                <fieldset>
                    <legend> Campos de tipo input text que tienen un ancho del 60% </legend>

                    <label for="nombre2Id"> Nombre: </label>
                    <input type="text" name="nombre" id="nombre2Id"></input> <br/><br/>

                    <label for="ap2Id"> Apellidos: </label>
                    <input type="text" name="apellidos" id="ap2Id"></input> <br/><br/>

                    <label for="buscarId"> Busqueda: </label>
                    <input className="busqueda" name="buscar" type="text" id="buscar" id="buscarId"/> <br/><br/>

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
                {/* <Ejemplo1/> */}
                <Ejemplo2/>
            </div>

        )

    }

}

export default Formularios
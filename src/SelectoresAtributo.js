import React, { Component } from 'react'
import Imagen from 'react-image'

    class SelectoresAtributos extends Component {

        render() {

            return(


                <div>
                    <h2> Elementos a con el atributo target </h2>
                    <a href="https://www.google.es" target="_blank" rel="noreferrer noopener"> Enlace a Google que cumple un selector de atributo </a>
                    <h2> Elementos a con el valor _blank en el atributo target </h2>
                    <a href="https://www.as.com" target="_self" rel="noreferrer noopener"> Enlace al As que cumple un selector de atributo </a>
                
                    <div className="contGrid">
                    <   h2> Cualquier elemento que tenga el valor k2 en su atributo alt </h2>
                        <Imagen alt="k2" src={ require('./img/k2.jpg') }/>

                        <h2> Cualquier elemento que tenga el valor k2 en su atributo alt </h2>
                        <Imagen className="claseimagen-prueba" alt="acue" src={ require('./img/acue.jpg') }/>
                    </div>

                    <div className="contenedorGrid">
                    <   h2> Elementos con un atributo cuyo valor termine con valor especifico </h2>
                        <Imagen className="elemento1" alt="Mk2" src={ require('./img/k2.jpg') }/>

                        <h2> Elementos cuyo valor de atributo contenga una determinada palabra que puede
                            estar situada en cualquier parte del valor del atributo.    
                         </h2>
                        <Imagen className="pruebaelemento2" alt="acue" src={ require('./img/acue.jpg') }/>
                    </div>
                </div>

            )

        }

    }

export default SelectoresAtributos
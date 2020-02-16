import React, { Component } from "react";

class EjemplosGrid2 extends Component {

    render() {

        return(

            <div className="gridContenedor">
                <header className="cabecera">
                    Esta es la cabecera de ancho completo Holy Grail Flexible
                </header>

                <aside className="barraIzquierda">  
                    Esta es la barra izquierda de Holy Grail Flexible
                </aside>

                <article className="articulo">
                    Este es el articulo de Holy Grail Flexible
                </article>

                <aside className="barraDerecha">
                    Esta es la barra derecha de Holy Grail Flexible
                </aside>

                <footer className="pie"> 
                    Este es el pie de pagina con ancho completo de Holy Grail Flexible
                </footer>
            </div>

        )

    }
}

export default EjemplosGrid2
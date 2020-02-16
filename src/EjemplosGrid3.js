import React, { Component } from "react";

class EjemplosGrid3 extends Component {

    render() {

        return(

            <div className="gridContenedor">
                <header className="cabecera">
                    Esta es la cabecera de ancho completo del tercer ejemplo
                </header>

                <aside>  
                    El aside del tercer ejemplo
                </aside>

                <main>
                    El Main principal del tercer ejemplo
                </main>

                <footer className="pie"> 
                    Este es el pie de pagina con ancho completo del tercer ejemplo
                </footer>
            </div>

        )

    }
}

export default EjemplosGrid3
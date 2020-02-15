import React, { Component } from "react";

const Ejemplo1 = () => {

    return (

        <div className="containGrid">
            <div className="sinBoxSizing">
                <h2> Capa sin aplicar box-sizing </h2>
            </div>

            <div className="conBoxSizing">
                <h2> Capa aplicando box-sizing </h2>
            </div>
        </div>

    )

}

class BoxSizing extends Component {

    render() {

        return (
            <div>
                <Ejemplo1/>
            </div>


        )

    }

}

export default BoxSizing
import React from "react";
import { useSelector } from 'react-redux';

const VueloComponent = () => {
    const vuelos = useSelector((state)=> state.allVuelos.vuelos)
    
    const renderedList = vuelos.map((vuelo)=>{
        const { id, codigo, origen, destino, precio } = vuelo;
        return(
            <div className="" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1533198875924-6dabdc05c857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt={codigo}/>
                        </div>
                        <div className="content">
                            <div className="meta price">Vuelo N{codigo}</div>
                            <div className="meta">{origen}</div>
                            <div className="meta">{destino}</div>
                            <div className="meta">$ {precio}</div>
                        </div>
                    </div>
                </div>
        </div>
        )
    })

    return(
        <>{renderedList}</>
    )
}

export default VueloComponent;
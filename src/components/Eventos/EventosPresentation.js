import React from "react"

const EventosPresentation = (props) => {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Eventos</h1>
            {props.dadosRetornados.length > 1
                ?
                <ol className="breadcrumb mb-4 bg-success">
                    <li className="breadcrumb-item active">"CONTECTADO AO BACKEND"</li>
                </ol>
                :
                <ol className="breadcrumb mb-4 bg-danger">
                    <li className="breadcrumb-item active">"NÃO CONECTADO: SERVIDOR BACKEND NÃO LIGADO OU NÃO CONECTADO"</li>
                </ol>
            }
            <div>DADOS RETORNADOS</div>
            {props.dadosRetornados.map((teste, i) => {
                return (
                    <div key={i}>
                        <div>{teste.nome}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default EventosPresentation
import React, { useState, useEffect } from "react";
import EventosService from "../../services/EventosService"
import EventosPresentation from "./EventosPresentation"

const Index = () => {

    const [dadosRetornados, setDadosRetornados] = useState([{}])

    const requestTest = async () => {
        const result = await EventosService.getValues()
        setDadosRetornados(result.data)
    }

    useEffect(() => {
        requestTest();
    }, [])

    return (
        <EventosPresentation dadosRetornados={dadosRetornados} />
    )
}

export default Index
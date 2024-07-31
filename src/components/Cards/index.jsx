import { useContext } from "react"
import { ContextGlobal } from "../Context"
import Card from "./Card"
import styled from "styled-components"
import Main from "../Main"


const Content = styled.div`
    width: 100%;

`

const CardContainer = styled.section`
display: grid;
grid-template-columns: 1fr;
gap: 10px;


   @media (min-width: 320px) and (max-width:480px){
    grid-template-columns: repeat(1, 1fr);
}

    @media (min-width: 481px) and (max-width:768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) and (max-width:1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1025px) {
        grid-template-columns: repeat(4, 1fr);
    }

`

const Cards = () => {
    const { planta } = useContext(ContextGlobal)
    const nombrePlanta = planta.filter((plan) => plan.nombre === 'dalia');
    return (
        <>
            <h2>Plantas</h2>
            <Content>
                <CardContainer>

                    {
                        planta.filter((p) => p.foto != null).map((plant) => {
                            console.log(plant.foto);
                            return <Card key={plant.id}
                                foto={plant.foto}
                                id={plant.id}
                                nombre={plant.nombre}
                                descripcion={plant.descripcion} />
                        })
                    }
                </CardContainer>
            </Content>
        </>
    )
}

export default Cards
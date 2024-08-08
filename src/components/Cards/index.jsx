import { useContext } from "react"
import { ContextGlobal } from "../Context"
import Card from "./Card"
import styled from "styled-components"

const Content = styled.div`
`
const Titulo=styled.h2`
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    
`
const CardContainer = styled.section`
   display: grid;
   width: 100%;
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
    const { planta } = useContext(ContextGlobal);
    const plantas=planta.sort((a, b) => b.id - a.id);// cambiar orden
    return (
        <>
            <Titulo >Colección de plantas</Titulo>
            <Content>
                <CardContainer>

                    {
                        plantas.map((plant) => {
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
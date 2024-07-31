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
grid-template-columns: repeat(4, 1fr);
gap: 10px;
justify-content: center;
align-items: center;

`


const Cards = () => {
    const { planta } = useContext(ContextGlobal)
    const nombrePlanta = planta.filter((plan) => plan.nombre === 'dalia');
    return (
        <>
            <Main>
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
            </Main>
        </>
    )
}

export default Cards
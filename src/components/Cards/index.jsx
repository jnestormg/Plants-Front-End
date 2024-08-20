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

const BotonFlotante=styled.div`
width: 30px;
height: 30px;
background-color: aqua;
position: relative;
transition:width 2s;
&:hover{
    width: 100%;
}
`
  

const Cards = () => {
    const { planta } = useContext(ContextGlobal);
    const {flores}= useContext(ContextGlobal);
    const {habitats}= useContext(ContextGlobal);
    const {RequerimientoLuz} = useContext(ContextGlobal);
    const {RequerimientoAgua} = useContext(ContextGlobal);
    const {suelo} = useContext(ContextGlobal);
    const {familias} = useContext(ContextGlobal); 
  
  
    const obtenerHabitat=(id)=>{
        const nombre_habitat=[];
        planta.forEach((element=>{
            if(element.id_habitat){
                const name_x =habitats.find(habi=>habi.id === element.id_habitat.id && element.id===id)
                if(name_x){
                nombre_habitat.push(name_x.nombre_habitat);
                }
            }

        }))
        return nombre_habitat;
    }

    const obtenerRequerimentoLuz=(id)=>{
        const requerimiento=[];
        planta.forEach((element=>{
            if(element.id_requerimiento_luz){
                const name_x =RequerimientoLuz.find(luz=>luz.id === element.id_requerimiento_luz.id && element.id===id)
                if(name_x){
                requerimiento.push(name_x.requerimiento);
                }
            }

        }))
        return requerimiento;
    }
    console.log("dsaluz"+obtenerRequerimentoLuz(59));

//obtener el requerimeinto de agua
const obtenerRequerimentoAgua=(id)=>{
    const requerimientoAgua=[];
    planta.forEach((element=>{
        if(element.id_requerimiento_agua){
            const name_x =RequerimientoAgua.find(agua=>agua.id === element.id_requerimiento_agua.id && element.id===id)
            if(name_x){
            requerimientoAgua.push(name_x.id);
            }
        }

    }))
    return requerimientoAgua;
}
console.log(RequerimientoAgua);

console.log("dsa:"+obtenerRequerimentoAgua(59));
    

  

    const obtenerSuelo=(id)=>{
        const tipo_suelo=[];
        planta.forEach((element=>{
            if(element.id_suelo){
                const name_x =suelo.find(s=>s.id === element.id_suelo.id && element.id===id)
                if(name_x){
                 tipo_suelo.push(name_x.tipo_suelo);
                }
            }

        }))
        return tipo_suelo ;
    }

    const obtenerFamilia=(id)=>{
        const familia=[];
        planta.forEach((element=>{
            if(element.id_familia){
                const name_x =familias.find(fam=>fam.id === element.id_familia.id && element.id===id)
                if(name_x){
                 familia.push(name_x.familia);
                }
            }

        }))
        return familia ;
    }

    const obtenerColorFlor=(id)=>{
        const colorFlor=[];
        planta.forEach((element=>{
            if(element.id_flor){
                const name_x =flores.find(flor=>flor.id === element.id_flor.id && element.id===id)
                if(name_x){
                 colorFlor.push(name_x.color);
                }
            }

        }))
        return colorFlor ;
    }

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
                                descripcion={plant.descripcion} 
                                altura={plant.altura}
                                toxicidad={plant.toxicidad}
                                habitat={obtenerHabitat(plant.id)}
                                luz={obtenerRequerimentoLuz(plant.id)}
                                agua={obtenerRequerimentoAgua(plant.id)}
                                color={obtenerColorFlor(plant.id)}
                                suelo={obtenerSuelo(plant.id)}
                                familia={obtenerFamilia(plant.id)}
                                />
                        })
                    }

                </CardContainer>
            </Content>
        </>
    )
}

export default Cards
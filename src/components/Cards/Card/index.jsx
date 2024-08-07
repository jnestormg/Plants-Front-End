import styled from "styled-components"
import { useContext } from "react"
import { ContextGlobal } from "../../Context"
import { Link } from "react-router-dom"
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";

const CardDiv = styled.div`
    width: 100%;
    height: 440px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px 10px 5px 5px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    transition: 0.7s;
    overflow: hidden;
    position: relative;
    animation: scroll linear;
    animation-timeline: view();
    animation-range:entry 10% ;
    &:hover {      
          box-shadow: 12px 12px 12px rgba(0,0,0,0.2), -5px -5px 10px white;
        filter:saturate(150%);
    
    }
    &:hover  .texto-descripcion{

    }
    @keyframes scroll {
        from{
            opacity: 0;
            scale: 0.5;
        }
        to{
            opacity: 1;
            scale: 1;
        }
    }
`

const Figure = styled.figure`
`
const FigCaption = styled.figcaption`
    /*cursor: pointer;
   
&:hover{
    position: absolute;
    color: white;
    inset: 0;
    width: 100%;
    text-align: center;
    background: rgba(0,0,0,0.7);
    transition: 1s;
    padding: 10px;
    display: flex;
    justify-items: center;
    justify-content: center;
}*/

`
const ImagenCard = styled.img`
    width: 100%;
    height: 225px;
    object-fit: cover; 
    border-bottom: 1px solid rgba(0,0,0,0.2);
   /* mask-image: linear-gradient(black 80%, transparent);*/
    vertical-align: middle;
   
`
const Titulo = styled.h3`
    color: #474747;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 15px;


`
const Descripcion = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow:hidden;
    padding: 5px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 15px;
    width: 100%;
    height: 60px;
    text-wrap:pretty;
    color: #696969;
`

const DescripcionCompleta = styled.p`
   font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 15px;
    width: 100%;
    height: 120px;
    overflow: scroll;
    line-height: 1.5;
    text-wrap:pretty;
    color: #696969;
    transition: 1s;
    
`

const StyleLink = styled(Link)`
`
const DeleteIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 25px;
    z-index: 200;
    font-weight: bold;
    background: #ff3b3b;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    color: white;
    font-size: 10px;
    &:hover{
        background:red ;
    }
`
const ShareIcon = styled(FaShareAlt)`
    color:#2d8708 ;
    transform: translate(0px, 20px);
`
const Back = styled.div`
`
const Front = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
const BotonLeer = styled.button`
        border: 1px solid rgba(0,0,0,0.2);
        width: 100%;
        padding: 5px;
        background: transparent;
        color: #696969;
        transition: 1s;
        &:hover{
        box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
    }

    `

const Card = (props) => {
    const { borrar } = useContext(ContextGlobal);

    const share = async () => {
        const fileArray = [];

        try {
            const imgurl = await fetch(props.foto);
            const blob = await imgurl.blob();
            const file = new File([blob], "imagen.jpg", { type: blob.type });
            fileArray.push(file);
        } catch (error) { console.log("error al cargar img"); }

        if (
            navigator.share
        ) {
            navigator.share({
                title: props.nombre,
                text: props.descripcion,
                files: fileArray,
                url: props.foto
            }).then(() => { console.log("exito"); }).catch(() => { console.log("fallo"); })
        }
    }

    const [mostrar, setMostrar] = useState(true);

    return (
        <>
            <CardDiv>
                <StyleLink onClick={() => borrar(props.id)}><DeleteIcon title="Eliminar">X</DeleteIcon></StyleLink>
                <ImagenCard src={props.foto} alt={props.nombre} />

                <Figure>

                    <Front>
                        <Titulo>{props.nombre.toUpperCase()}</Titulo>
                        <Link onClick={() => share()}><ShareIcon title="Compartir" /></Link>
                    </Front>
                    <Back>
                        {mostrar ?
                            <FigCaption>
                                <Descripcion >{props.descripcion}</Descripcion>
                                <BotonLeer onClick={() => setMostrar(!mostrar)}>{mostrar ? "Leer más" : "Leer menos"}</BotonLeer>

                            </FigCaption> :
                            <>
                                <BotonLeer onClick={() => setMostrar(!mostrar)}>{mostrar ? "Leer más" : "Leer menos"}</BotonLeer>
                                <DescripcionCompleta class>{props.descripcion}</DescripcionCompleta>
                            </>
                        }
                    </Back>
                </Figure>
            </CardDiv>
        </>

    )
}

export default Card
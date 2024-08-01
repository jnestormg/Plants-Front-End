import styled from "styled-components"
import { useContext } from "react"
import { ContextGlobal } from "../../Context"
import { Link } from "react-router-dom"
import { FaShareAlt } from "react-icons/fa";


const CardDiv = styled.div`
    width: 300px;
    height: 370px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    transition: 0.7s;
    overflow: hidden;
    position: relative;
    &:hover {      
          box-shadow: 12px 12px 12px rgba(0,0,0,0.2), -10px -10px 10px white;
    }
    &:hover  .texto-descripcion{
    -webkit-line-clamp: unset;
    white-space: normal;
    overflow: visible;
    z-index: 500;
    }
`

const Figure = styled.figure`


`
const FooterCard = styled.div`
  
`
const FigCaption = styled.figcaption`
cursor: pointer;


&:hover{
    position: absolute;
    color: white;
    inset: 0;
    width: 95%;
    text-align: center;
    background: rgba(0,0,0,0.7);
    transition: 0.7s;
    padding: 10px;
}
`
const ImagenCard = styled.img`
    width: 100%;
    height: 225px;
    object-fit: cover; 
    mask-image: linear-gradient(black 80%, transparent);
    aspect-ratio: 1;
`
const Titulo = styled.h3`
color: #2d8708;
font-family: "Arsenal SC", sans-serif;
`
const Descripcion = styled.p`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
text-overflow: ellipsis;
overflow:hidden;
`
const StyleLink = styled(Link)`
`
const DeleteIcon = styled.div`
position: absolute;
top: 0;
right: 0%;
width: 25px;
height: 25px;
z-index: 200;
font-weight: bold;
background: #2d8708;
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
`
const Card = (props) => {

    console.log("foto" + props.foto);

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


    return (
        <>
            <CardDiv>
                <StyleLink onClick={() => borrar(props.id)}><DeleteIcon  title="Eliminar">X</DeleteIcon></StyleLink>

                <Figure>
                    <ImagenCard src={props.foto} alt={props.nombre} />
                    <Front>
                        <Titulo>{props.nombre}</Titulo>
                        <Link onClick={() => share()}><ShareIcon title="Compartir" /></Link>
                    </Front>
                    <Back>
                        <FigCaption>
                            <Descripcion className="texto-descripcion">{props.descripcion}</Descripcion>
                        </FigCaption>
                    </Back>


                </Figure>
            </CardDiv>
        </>

    )
}

export default Card
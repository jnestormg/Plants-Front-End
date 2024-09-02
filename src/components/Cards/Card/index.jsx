import styled from "styled-components"
import { useContext } from "react"
import { ContextGlobal } from "../../Context"
import { Link } from "react-router-dom"
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import { CiLineHeight } from "react-icons/ci";
import { IoSkull } from "react-icons/io5";
import { FaSunPlantWilt } from "react-icons/fa6";
import { GiPlantWatering } from "react-icons/gi";
import { PiFlowerFill } from "react-icons/pi";
import { GiGroundSprout } from "react-icons/gi";
import { GiFamilyTree } from "react-icons/gi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";
import { BsShadows } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { LuBadgeInfo } from "react-icons/lu";
import { IoMdRainy } from "react-icons/io";
import { IoRainySharp } from "react-icons/io5";
import { GiRaining } from "react-icons/gi";
import { PiFlowerLight } from "react-icons/pi";
import { PiMountainsFill } from "react-icons/pi";
import { BiWater } from "react-icons/bi";





const Flip = styled.div`
   perspective: 1000px;
    width: 100%;
    height: 460px;

    @media (min-width: 320px) and (max-width:480px){
//    grid-template-columns: repeat(auto-fit, minmax(340px, 97%)); 
     width:97%;
   }
`
const FlipCardInner = styled.div`
position: relative;
width: 100%;
height: 100%;
transition: transform 0.6s;
transform-style:preserve-3d;
transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : '')};

`

const CardDivFront = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px 10px 5px 5px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    transition: 0.7s;
    overflow: hidden;
    position: absolute;
    backface-visibility: hidden;
    animation: scroll linear;
    animation-timeline: view();
    animation-range:entry 30% cover 30% ;
    animation-fill-mode: both;
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

const CardDivBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
border: 1px solid rgba(0,0,0,0.1);
padding: 5px;
    border-radius: 10px 10px 5px 5px;
    background: white;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

const Figure = styled.figure`
`
const FigCaption = styled.figcaption`



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
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 15px;
    text-transform: uppercase;


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
    scrollbar-color: green white;
    
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

const BotonFlotante = styled.div`
width: 30px;
height: 30px;
background-color: aqua;
position: relative;
transition:width 2s;
&:hover{
    width: 100%;
}
`
const Iconos = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    gap: 5px;
    width: 60px;
    height: 30px;
    transform: translate(0px, 15px);
`

const Informacion = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0px 15px;
    padding: 0px 50px;
    height: 380px;
    overflow: scroll;
    scrollbar-color: green white ;
`

const TituloBack = styled.h4`
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 5px;
    color: #696969;

`

const InformationItem = styled.p`
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #696969;

`
const CabeceraBack=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px 10px;
    height: fit-content;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

const Card = (props) => {
    const { borrar } = useContext(ContextGlobal);
    console.log(props.agua);
    console.log(props.color);


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

    const [flipped, setFlipped] = useState(false)

    const voltear = () => {
        setFlipped(!flipped)
    }

    return (
        <>
            <Flip>
                <FlipCardInner flipped={flipped}>
                    <CardDivFront>
                        <StyleLink onClick={() => borrar(props.id)}><DeleteIcon title="Eliminar">X</DeleteIcon></StyleLink>
                        <ImagenCard src={props.foto} alt={props.nombre} >
                        </ImagenCard>

                        <Figure>

                            <Front>
                                <Titulo>{props.nombre}</Titulo>
                                <Iconos>
                                    <div>
                                        <Link onClick={() => share()}><ShareIcon title="Compartir" /></Link>
                                    </div>
                                    <div>
                                        <Link onClick={voltear}>
                                            <LuBadgeInfo style={{ color: 'green', fontSize: '20px', fontWeight: '500' }} />
                                        </Link>
                                    </div>
                                </Iconos>
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
                    </CardDivFront>


                    <CardDivBack>
                        <CabeceraBack>
                            <TituloBack >Información</TituloBack>

                            <Link onClick={voltear}>
                                <IoReturnUpBackOutline
                                    style={{ transform: 'translate(55px, 20px)',fontSize: '20px', color: 'green' }} />
                            </Link>
                        </CabeceraBack>

                        <Informacion>


                            <InformationItem style={{ fontWeight: '500' }}>Habitat:</InformationItem>
                            <InformationItem>
                                {props.habitat == "Montaña" ?
                                    <PiMountainsFill /> : props.habitat == "Mar" ? <BiWater /> :
                                        props.habitat == "Océano" ? <BiWater /> :
                                            props.habitat == "Lago" ? <BiWater /> :
                                                props.habitat == "Río" ? <BiWater /> :
                                                    <MdNaturePeople />

                                }
                                {" " + props.habitat}</InformationItem>


                            <InformationItem style={{ fontWeight: '500' }}>Altura:</InformationItem>
                            <InformationItem><CiLineHeight />  {props.altura} cm</InformationItem>


                            <InformationItem style={{ fontWeight: '500' }}>Peligroso:</InformationItem>
                            <InformationItem>{props.toxicidad ? <IoSkull /> : <GrStatusGood />}  {props.toxicidad ? 'Sí' : 'No'}  </InformationItem>


                            <InformationItem style={{ fontWeight: '500' }}>Requerimiento de luz:</InformationItem>
                            <InformationItem> {props.luz == "Sol total" ? <BsFillSunFill /> : props.luz == "Sombra parcial" ? <BsShadows /> : ''}  {props.luz} </InformationItem>


                            <InformationItem style={{ fontWeight: '500' }}>Requerimiento de agua:</InformationItem>
                            <InformationItem>
                                {props.agua == 2 ? <IoRainySharp /> : props.agua == 1 ? <IoMdRainy /> : props.agua == 3 ? <GiRaining /> : ''}
                                {props.agua == 2 ? ' Riego minimo' : props.agua == 1 ? ' Riego medio' : props.agua == 3 ? ' Riego constante' : ''}
                            </InformationItem>


                            <InformationItem style={{ fontWeight: '500' }}>
                                {props.color != null ? 'Color de flores' : ''}</InformationItem>
                            <InformationItem>
                                {props.color == " Blanco" ? <PiFlowerLight /> : <PiFlowerFill />}
                                {" " + props.color} </InformationItem>



                            <InformationItem style={{ fontWeight: '500' }}>Tipo de suelo:</InformationItem>
                            <InformationItem><GiGroundSprout />  {props.suelo} </InformationItem>


                            <InformationItem style={{ fontWeight: '500' }}>Familia:</InformationItem>
                            <InformationItem> <GiFamilyTree />  {props.familia} </InformationItem>


                        </Informacion>

                    </CardDivBack>
                </FlipCardInner>
            </Flip>
        </>

    )
}

export default Card
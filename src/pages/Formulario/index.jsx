import styled from "styled-components"
import Campo from "../../components/Campo"
import TextArea from "../../components/TextArea/indexs"
import { useContext, useEffect, useState } from "react"
import { ContextGlobal } from "../../components/Context"
import { Link, useNavigate } from "react-router-dom"
import Main from "../../components/Main"
import Boton from "../../components/Boton"

const Container = styled.div`
display: flex;
justify-content: center;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
    font-family: "Arsenal SC", sans-serif;
    @media (min-width: 320px) and (max-width:480px){
        width: 100%;
    }

    @media (min-width: 481px) and (max-width:768px) {
        width: 80%;
    }
    @media (min-width: 768px) and (max-width:1024px) {
        width: 60%;
    }

    
`
const Footer = styled.footer`
    width:100% ;
    display: flex;
    justify-content: end;
    gap: 10px;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding: 10px 0px;
`

const StyleLink = styled(Link)`
    height: 50px;
    background: transparent;
    color: rgba(0,0,0,0,6);
    font-size: 20px;
    border: 1px solid #39b008;
    border-radius: 4px;
    text-decoration: none;
    padding: 10px;
    &:hover{
        background: #2d8708;
        color: aliceblue;
    }
`

const Titulo=styled.h2`
    color:#2d8708 ;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

const Formulario = () => {
   
    const [nombre, setNombre] = useState("");
    const [foto, setFoto] = useState("");
    const [descripcion, setDescripcion] = useState("");

    /*
    useEffect(() => {
        const save = JSON.parse(localStorage.getItem("datos"))
        setNombre(save.nombre)
        setFoto(save.foto)
        setDescripcion(save.descripcion)
    }, [])
*/


    //metodo actualizar 
    const { actualizar } = useContext(ContextGlobal)

    const navigate = useNavigate()

    const enviarDatos = (e) => {
        e.preventDefault();

        let datos = {
            nombre: nombre,
            foto: foto,
            descripcion: descripcion
        }

        localStorage.setItem("datos", JSON.stringify(datos))


        actualizar(datos);
        navigate("/")
    }

    return (
        <>
            <Main>
                <Container>
                    <Form onSubmit={enviarDatos}>
                        <Titulo>Agregar nueva planta</Titulo>
                        <Campo placeholder="Nombre..."
                            titulo="Nombre"
                            valor={nombre}
                            setValor={setNombre} />

                        <Campo placeholder="Ingresa url de la foto..."
                            titulo="Foto" valor={foto} setValor={setFoto} />

                        <TextArea placeholder="Agrega una descripción..."
                            titulo="Descripción" valor={descripcion}
                            setValor={setDescripcion} ></TextArea>

                        <Footer>
                            <StyleLink to="/">Regresar</StyleLink>
                            <Boton val="Guardar"></Boton>
                        </Footer>


                    </Form>
                </Container>
            </Main>
        </>
    )
}

export default Formulario

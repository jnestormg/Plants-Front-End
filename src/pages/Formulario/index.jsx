import styled from "styled-components"
import Campo from "../../components/Campo"
import TextArea from "../../components/TextArea/indexs"
import { useContext, useEffect, useState } from "react"
import { ContextGlobal } from "../../components/Context"
import { Link, useNavigate } from "react-router-dom"
import Main from "../../components/Main"
import Boton from "../../components/Boton"
import RequerimientoLuz from "../../components/SelectRequerimientoLuz"
import Suelo from "../../components/SelectSuelos"
import RequerimientoAgua from "../../components/SelectRequerimientoAgua"
import SelectHabitats from "../../components/SelectHabitats"
import SelectFamilia from "../../components/SelectFamilias"
import SelectFlores from "../../components/SelectFlores"
import CampoNumber from "../../components/CampoNumber"
import RadioButton from "../../components/RadioButton"

const Container = styled.div`
display: flex;
justify-content: center;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
    font-family: "Arsenal SC", sans-serif;
    @media (min-width: 320px) and (max-width:480px){
        width: 100%;
        height: 100%;
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

const Titulo = styled.h2`
    color:#2d8708 ;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

const DivisorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`
const DivisorFlex = styled.div`
    display: flex;
    flex-direction: column;
`

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [foto, setFoto] = useState("");
    const [altura, setAltura] = useState(1);
    const [toxicidad, setToxicidad] = useState(false);
    const [flor, setFlor] = useState(null);
    const [suelo, setSuelo] = useState(null);
    const [habitat, setHabitat] = useState(null);
    const [familia, setFamilia] = useState(null);

    const [requerimientoLuz, setRequerimientoLuz] = useState();
    const [requerimientoAgua, setRequerimientoAgua] = useState();




    /*
    useEffect(() => {
        const save = JSON.parse(localStorage.getItem("datos"))
        setNombre(save.nombre)
        setFoto(save.foto)
        setDescripcion(save.descripcion)
    }, [])
*/


    //metodo guardar 
    const { guardar } = useContext(ContextGlobal)

    const navigate = useNavigate()

    const enviarDatos = (e) => {
        e.preventDefault();

        let datos = {
            nombre: nombre,
            descripcion: descripcion,
            foto: foto,
            altura: altura,
            toxicidad: toxicidad,
            id_flor: flor,
            id_suelo: suelo,
            id_habitat: habitat,
            id_familia: familia,
            id_requerimiento_luz: requerimientoLuz,
            id_requerimiento_agua: requerimientoAgua,

        }

        console.log("ver");
        console.log(datos);


        localStorage.setItem("datos", JSON.stringify(datos))

        guardar(datos);//guardar datos
        setNombre('')
        setFoto('')
        setDescripcion('')
        setAltura(1);
        setFamilia("")
        setFlor("")
        setToxicidad(false)
        setHabitat("")
        setRequerimientoAgua("")
        setRequerimientoLuz("")
        setSuelo("")
        //navigate("/")

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
                            setValor={setNombre} required={true} tipo="text" />

                        <Campo placeholder="Ingresa url de la foto..."
                            titulo="Foto" valor={foto} setValor={setFoto} required={true} tipo="url" />

                        <TextArea placeholder="Agrega una descripción..."
                            titulo="Descripción" valor={descripcion}
                            setValor={setDescripcion} ></TextArea>

                        <DivisorGrid>
                            <DivisorFlex>
                                <CampoNumber valor={altura} setValor={setAltura} titulo="Altura (cm)" />
                            </DivisorFlex>
                            <DivisorFlex>
                                <label style={{fontSize: '16px', fontWeight: 'bold', color: '#2d8708'}}>Toxicidad</label>
                                <RadioButton nombre="toxicidad" valor="true" setValor={setToxicidad} opcion="Sí" checked={toxicidad ==='true'} />
                                <RadioButton nombre="toxicidad" valor="false" setValor={setToxicidad} opcion="No" checked={toxicidad=== 'false'} />
                            </DivisorFlex>
                        </DivisorGrid>

                        <DivisorGrid>
                            <DivisorFlex>
                                <RequerimientoAgua titulo="Requerimiento de Agua"
                                    valor={requerimientoAgua} setValor={setRequerimientoAgua} />
                            </DivisorFlex>
                            <DivisorFlex>
                                <RequerimientoLuz titulo="Requerimiento de Luz"
                                    valor={requerimientoLuz} setValor={setRequerimientoLuz} />
                            </DivisorFlex>
                        </DivisorGrid>

                        <DivisorGrid>
                            <DivisorFlex>
                                <SelectHabitats titulo="Habitat"
                                    valor={habitat}
                                    setValor={setHabitat} />
                            </DivisorFlex>
                            <DivisorFlex>
                                <Suelo titulo="Tipo de suelo"
                                    valor={suelo}
                                    setValor={setSuelo} />

                            </DivisorFlex>
                        </DivisorGrid>

                        <DivisorGrid>
                            <DivisorFlex>
                                <SelectFamilia titulo="Familia"
                                    valor={familia}
                                    setValor={setFamilia} />
                            </DivisorFlex>
                            <DivisorFlex>
                                <SelectFlores titulo="Color de la flor"
                                    valor={flor} setValor={setFlor} />
                            </DivisorFlex>
                        </DivisorGrid>

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

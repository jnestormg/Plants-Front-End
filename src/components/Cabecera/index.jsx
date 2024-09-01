import { Link } from "react-router-dom";
import styled from "styled-components";
import BuscarColor from "../BuscarColor";
import { useContext } from "react";
import { ContextGlobal } from "../Context";

const Header = styled.header`
    width: 100%;
    height: 60px;
    background: black;
    position: fixed;
    top: 0;
    color: white;
    padding: 10px;
    z-index: 1000;
`
const Nav = styled.nav``;

const Ul = styled.ul`
    display: flex;
    justify-content: left;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0; 
`
const Li = styled.li`
    @media (min-width: 320px) and (max-width:600px) {
    &:last-child{
    position: absolute;
    right: 0;
    padding: 0 10px;
    } 
}
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white; 
    font-size: 25px;
    font-family: "Arsenal SC", sans-serif;
    &:hover{
        color: #39b008;
    }  
`
const Barra = styled.div`
height: 100vh;
position: relative;
top: 20px;
left: 0px;
width: 200px;
z-index: 1;
background-color: transparent;
backdrop-filter: blur(10px);
border-right: 1px solid rgba(48, 46, 48, 0.2);
box-shadow: 5px 4px 8px rgba(0, 0, 0, 0.2);
visibility: hidden;
transition: 1s ease-in;
@media (max-width: 400px) {
    visibility: visible;
    
}
`
const Details = styled.details`
    color: rgba(0,0,0,0.7);
    margin: 10px 20px;
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

const Summary = styled.summary`
    padding: 5px;
    font-family: "Roboto", sans-serif;
    list-style: none;
    &:hover{
        color:orange;
    }
`

const BotonMenuCerrar = styled.button`
    font-size: 20px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,0.3);
    background: transparent;
    position: relative;
    left: 85%;
    top:3px;

`
const TituloMenu = styled.h4`
    color: darkgreen;
    font-family: "Roboto", sans-serif;
    text-align: center;
    background: #05a805;
    border-radius: 10px;
    width: 60px;
    padding: 4px;
    color: white;

`

const BotonMenuAbrir = styled.button`
    background: #616060;
    color: white;
    font-size: 24px;
    border-radius: 7px;
    transition: 1s ease-in;
`

const BotonMostrarTodo= styled.button`
    background: #0377ad;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px;
    
`

const Cabecera = () => {

    const { mostrarTodas } = useContext(ContextGlobal);

    function open() {
        let anchoventana = window.innerWidth;

        
        if (anchoventana > 1280  ) {
            document.getElementById("main").style.marginLeft = "20%";
            document.getElementById("mySidebar").style.width = "20%";
        }
        else{

        }

        document.getElementById("mySidebar").style.visibility = "visible";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("mySidebar").style.transition = "1s ease-in";
        document.getElementById("openNav").style.display = 'none';
    }

    function close() {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("mySidebar").style.transition = "1s ease-in";
        document.getElementById("openNav").style.display = "inline-block";
    }


    return (
        <Header>

            <Nav>
                <Ul>
                    <Li>
                        <BotonMenuAbrir id="openNav" class="w3-button w3-teal w3-xlarge" onClick={() => open()}>&#9776;</BotonMenuAbrir>

                    </Li>
                    <Li>
                        <StyledLink to="/">Home</StyledLink>
                    </Li>
                    <Li>
                        <StyledLink to="/formulario">Agregar planta</StyledLink>
                    </Li>

                </Ul>
            </Nav>


            <Barra id="mySidebar">
                <BotonMenuCerrar onClick={() => close()}> &times;</BotonMenuCerrar>

                <TituloMenu>Filtrar</TituloMenu>
                <BotonMostrarTodo onClick={() => mostrarTodas()}>Mostrar todo </BotonMostrarTodo>

                <Details open>
                    <Summary>
                        Color de flor
                    </Summary>
                    <BuscarColor />
                </Details>

            </Barra>
        </Header>
    );
};

export default Cabecera;

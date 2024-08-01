import Cabecera from "./components/Cabecera"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Formulario from "./pages/Formulario"
import Inicio from "./pages/Inicio"

const { BrowserRouter, Routes, Route, Form } = require("react-router-dom")

function Rutas() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/formulario" element={<Formulario />} ></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Rutas
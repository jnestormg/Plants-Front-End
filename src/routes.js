import Cabecera from "./components/Cabecera"
import Cards from "./components/Cards"
import Formulario from "./pages/Formulario"

const { BrowserRouter, Routes, Route, Form } = require("react-router-dom")

function Rutas() {
    return (
        <BrowserRouter>
              <Cabecera />

            <Routes>
                <Route path="/" element={<Cards />}></Route>
                <Route path="/formulario" element={<Formulario />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Rutas
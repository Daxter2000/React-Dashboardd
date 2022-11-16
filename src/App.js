import Home from "./pages/home/Home";
import List from "./pages/list/List";
import ClientList from "./pages/list/clients/ClientList"
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";
import { useContext} from 'react'
import ProductList from "./pages/list/products/ProductList";


function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"} >

      <BrowserRouter>
        <Routes>
          <Route path="/"> 
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="clients"> 
              <Route  index element={<ClientList/>}/>
              <Route  path=":clientId" element={<Single/>}/>
              <Route  path="new" element={<New inputs={userInputs} title="Agregar Cliente"/>}/>
            </Route>
            <Route path="products"> 
              <Route  index element={<ProductList/>}/>
              <Route  path=":productId" element={<Single/>}/>
              <Route  path="new" element={<New inputs={productInputs} title="Agregar producto"/>}/>
            </Route>
            <Route path="quotations"> 
              <Route  index element={<List/>}/>
              <Route  path=":quotationId" element={<Single/>}/>
              <Route  path="new" element={<New inputs={productInputs} title="Crear nueva cotización"/>}/>
            </Route>
            <Route path="projects"> 
              <Route  index element={<List/>}/>
              <Route  path=":projectId" element={<Single/>}/>
              <Route  path="new" element={<New inputs={productInputs} title="Crear nuevo proyecto"/>}/>
            </Route>

            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

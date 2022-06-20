import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Inicio from "./pages/Inicio";
import Residuo from "./pages/Residuo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Inicio />} />
          <Route path="evaluacion" element={<Home/>} />
          <Route path="residuos" element={<Residuo/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

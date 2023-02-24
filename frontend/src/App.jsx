import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import Overview from './components/ProductOverview'
import CreateProduct from "./components/CreateProduct";

function App() {

  return (
    <div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/productOverview" element={<Overview />} />
      <Route path ="/createProduct" element={<CreateProduct />} />
    </Routes>
    </div>
  )
}

export default App
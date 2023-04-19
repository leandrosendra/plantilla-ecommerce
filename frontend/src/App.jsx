import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import Overview from './components/ProductOverview'
import CreateProduct from "./components/CreateProduct";
import AllProducts from "./components/AllProducts";
import Register from "./components/Register";
import  Login  from "./components/Login";

function App() {

  return (
    <div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/productOverview" element={<Overview />} />
      <Route path ="/createProduct" element={<CreateProduct />} />
      <Route path ="/allproducts" element={<AllProducts />} />
      <Route path ="/register" element={<Register />} />
      <Route path ="/login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App
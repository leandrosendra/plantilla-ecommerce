import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import Overview from './components/ProductOverview'

function App() {

  return (
    <div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/productOverview" element={<Overview />} />
    </Routes>
    </div>
  )
}

export default App

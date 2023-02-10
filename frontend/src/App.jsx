import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'

function App() {

  return (
    <div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </div>
  )
}

export default App

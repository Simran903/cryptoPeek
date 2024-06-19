import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Pricing from "./pages/Pricing"
function App() {

  return (
    <div className="min-h-screen bg-sky-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coin/:coinId" element={<Coin />}/>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
    </div>
  )
}

export default App

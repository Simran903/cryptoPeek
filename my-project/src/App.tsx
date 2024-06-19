import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Pricing from "./pages/Pricing"
import { ThemeProvider } from "./components/ui/theme-provider"
function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-zinc-900 bg-slate-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App

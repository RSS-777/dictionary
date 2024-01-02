import { Home } from "./pages/Home/Home"
import { LearnedWords } from "./pages/LearnedWords/LearnedWords"
import { Navigation } from "./components/Navigation/Navigation"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="wrapper">
       <Navigation />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learned" element={<LearnedWords />} />
       </Routes>
    </div>
  )
}

export default App

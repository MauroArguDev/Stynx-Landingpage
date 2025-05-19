import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout"
import { Hero } from "./components/sections/Hero"
import { AboutUs } from "./components/sections/AboutUs";

function App() {
  return (
    <Router>
      <Layout title="Stynx">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutUs />
            </>
          } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
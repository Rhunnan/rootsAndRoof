import AboutPage from "./aboutPage/aboutPage"
import ScrollToTop from "./components/scrollToTop"
import HomePage from "./homepage/homepage"
import PortfolioPage from "./portfolioPage/portfolioPage"
import ContactPage from "./contactPage/contactPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
    <Router>
        <ScrollToTop/>
        <Routes>
        <Route path="/"element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/portfolio" element={<PortfolioPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

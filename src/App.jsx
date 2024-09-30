import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import Layout from './Pages/Layout.jsx'
import NotFound from './Pages/NotFound.jsx'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>

              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="services" element={<Services />}/>
              <Route path="*" element={<NotFound/>}/>


            </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

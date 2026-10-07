import { BrowserRouter , Routes ,Route } from "react-router-dom";






const App = () =>{
  return (
  <BrowserRouter>
  
  <navbar />

  <Routes>
      
      <Route path="/ Home" element={<Home/>} />
      <Route path="/ About" element ={<About />}/>
      <Route path="/ Contact" element ={<Contact/>}/>
      <Route path="/ Services" element ={<Services />}/>
      <Route path="/ Course" element ={<Course />}/>
      <Route path="/ Gallery" element ={<Gallery />}/>
      <Route path="/ Help" element ={<Help />}/>

 </Routes>
  
  </BrowserRouter>
  )

}
export default App
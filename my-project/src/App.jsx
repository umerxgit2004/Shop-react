import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import PDetail from "./pages/PDetail"
import ProductListing from "./pages/ProductListing"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"


function App() {


  return (
    <BrowserRouter>
    <Header/>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/sign-in' element ={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/product-detail' element={<PDetail/>}/>
      <Route path='/product-listing' element={<ProductListing/>}/>
      <Route path = '/profile' element={<Profile/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App

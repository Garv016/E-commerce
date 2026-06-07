import axios from 'axios'
import {HomePage} from './pages/home/HomePage'
import { CheckOut } from './pages/checkout/CheckOut'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import {Routes, Route} from 'react-router'
import { PageNotFound } from './pages/PageNotFound'
import { useEffect , useState} from 'react'

function App() {
    const [cart,setCart] = useState([])

    const loadCart = async() => {
      const response = await axios.get('/api/cart-items?expand=product')
        setCart(response.data)
    }
    useEffect(() =>{
      loadCart()
    },[])
  return (
    <Routes>
      {/* <Route path='/' element={<HomePage/>}/> both are same */}
      <Route index element={<HomePage cart = {cart} loadCart = {loadCart}/>}/>
      <Route path='checkout' element={<CheckOut cart={cart} />}/>
      <Route path='orders' element={<OrdersPage cart={cart} />}/>
      <Route path="tracking/:orderId/:productId" element={<TrackingPage/>}/>
      <Route path='*' element={<PageNotFound cart={cart}/>}/>
    </Routes>
  )
}

export default App

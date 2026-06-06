import axios from 'axios'
import {HomePage} from './pages/HomePage'
import { CheckOut } from './pages/CheckOut'
import { OrderPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import {Routes, Route} from 'react-router'
import { PageNotFound } from './pages/PageNotFound'
import { useEffect , useState} from 'react'

function App() {
    const [cart,setCart] = useState([])

    useEffect(() =>{
      axios.get('/api/cart-items')
        .then( (response)=> {
          setCart(response.data)
        })
    },[])
  return (
    <Routes>
      {/* <Route path='/' element={<HomePage/>}/> both are same */}
      <Route index element={<HomePage cart = {cart}/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      <Route path='orders' element={<OrderPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App

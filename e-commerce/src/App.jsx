import {HomePage} from './pages/HomePage'
import { CheckOut } from './pages/CheckOut'
import { OrderPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import './App.css'
import {Routes, Route} from 'react-router'

function App() {

  return (
    <Routes>
    <>
      {/* <Route path='/' element={<HomePage/>}/> both are same */}
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
      <Route path='orders' element={<OrderPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
    </>
    </Routes>
  )
}

export default App

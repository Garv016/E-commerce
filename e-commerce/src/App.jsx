import {HomePage} from './pages/HomePage'
import { CheckOut } from './pages/CheckOut'
import './App.css'
import {Routes, Route} from 'react-router'

function App() {

  return (
    <Routes>
    <>
      {/* <Route path='/' element={<HomePage/>}/> both are same */}
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<CheckOut/>}/>
    </>
    </Routes>
  )
}

export default App

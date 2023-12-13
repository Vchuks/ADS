import './App.css'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Verify from './components/Verify'
import ResetPassword from './components/ResetPassword'
import ResetSuccess from './components/ResetSuccess'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='forgot_password' element={<ForgotPassword/>}/>
      <Route path='verify' element={<Verify/>}/>
      <Route path='reset_password' element={<ResetPassword/>}/> 
      <Route path='success' element={<ResetSuccess/>}/> 
      <Route path='dashboard' element={<Dashboard/>}/> 
    </Routes>
    </>
  )
}

export default App

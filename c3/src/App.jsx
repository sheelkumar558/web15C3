
import './App.css'
import { Routes } from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import { Admin } from './components/Admin'
import { Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { EmployeeList } from './components/EmployeeList'
function App() {


  return (
    <div className="App">
      <Navbar />
   <Routes>
   <Route path="/" element={<Home />}></Route>
   <Route path="/admin" element={<Admin />}></Route>
   <Route path="/login" element={<Login />}></Route>
   <Route path="/logout" element={<Logout />}></Route>
   <Route path="/employeeList" element={<EmployeeList />}></Route>

   </Routes>
    </div>
  )
}

export default App

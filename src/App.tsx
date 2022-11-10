import React from 'react';
import './App.css';
import {Login} from './components/LOGIN/Login';
import { Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";
import Admin from './components/Admin/admin';

interface Datos{
  user:string,
  password:string,
  roles:string,
}


const App: React.FC = () => {
  const [datos] = useState<Datos[]>([{
    user:"franco" , password:"12345", roles:"admin"
  }, {user:"stiven" , password:"123456", roles:"empleado"}])
  useEffect(() => { localStorage.setItem("user", JSON.stringify(datos));
  }, [datos])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path= "/Admin" element={<Admin/>} />
        </Routes>
      {/*   <Routes>
        </Routes> */}
        
      
    </div>
  );
}

export default App;

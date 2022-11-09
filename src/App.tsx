import React from 'react';
import './App.css';
import {Login} from './components/LOGIN/Login';
import { Route, Routes } from "react-router-dom";
import { useEffect,useState } from "react";

interface Datos{
  user:string,
  password:string,
  roles:string,
}


const App: React.FC = () => {
  const [datos, setDatos] = useState<Datos[]>([{
    user:"franco" , password:"12345", roles:"admin"
  }])
  useEffect(() => { localStorage.setItem("user", JSON.stringify(datos));
  }, [datos])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;

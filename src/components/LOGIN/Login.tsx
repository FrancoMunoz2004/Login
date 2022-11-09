
import './LoginStyle.css';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";




export const Login: React.FC = () => {
  /*   const navigate = useNavigate(); */
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
/*   const [roles, setRoles] = useState(""); */


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const logg = JSON.parse(localStorage.getItem("user") || '{}')
    const validation = logg.some((value: any) => value.user === user && value.password === password);
    if(validation){
      alert("estas listo pa")
    }else{
      alert("no existes mafrend")
    }
    
  }




  return (
    <div className="contenedor">
      <h2>Login </h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">

          <div className="form-group">
            <input
              name="email"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => {

                setUser(e.target.value);
              }}
            />
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);}}
          />


        </div>
        <button type="submit" value="Login">Login</button>
      </form>
    </div>
  )

}



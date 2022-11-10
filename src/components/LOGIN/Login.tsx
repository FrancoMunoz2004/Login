
import { Usuario } from '../usuario';
import './LoginStyle.css';

export const Login = () => {
  const handleSubmit = (params: any) => {
    params.preventDefault();
    Usuario(params.target.user.value, params.target.password.value);
  }

  return (
    <div className="contenedor">
      <h2>Login </h2>
      <form className="form" onSubmit={handleSubmit}>
        
            <input
              name="user"
              type="text"
              placeholder="Enter Username"
            />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        <button type="submit" value="Login">Login</button>
      </form>
    </div>
  )

}
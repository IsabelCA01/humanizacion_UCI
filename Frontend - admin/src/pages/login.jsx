import "../styles/login.css";
import { useState } from "react";
import { useAuth }  from "../contexts/authContext";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
  const [user, setUser] = useState({
    //nombre: "",
    //apellido: "",
    email: "",
    password: "",
  });

  const { loginFunction } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();


  const handleChange = ({target: {name,value}}) => {
   setUser({...user, [name]: value})
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("")
    try {
      await loginFunction(user.email, user.password);
      navigate("/infopaciente");
    }
    catch (error){
      if (error.code === "auth/wrong-password"){
        setError("Contraseña incorrecta.")
      }
      else if (error.code === "auth/missing-password"){
        setError("Debe elegir una contraseña.")
      }
      else if( error.code === "auth/invalid-email"){
        setError("Email invalido.")
      }
      else if( error.code === "auth/user-not-found"){
        setError("Usuario no encontrado.")
      }
      else{
        setError(error.message)}
    }};

    return (
      <div className='loall'>
      <div className='locontainer'>
        <div className="locolumna2">
          <h1 className="loh1">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
              <div className="loinput">
              <input type="email" name='email' placeholder='Email' onChange={handleChange}></input>
              </div>
              <div className="suinput">
              <input type="password" placeholder='Contraseña' name='password' id='password' onChange={handleChange}></input>
              </div>
              <div>
              {error && <p>{error}</p>}
              </div>
              <button className="loboton">Iniciar Sesión</button>
            </form>
          </div>
      </div>
      </div>
    );
  };
  
  export default LogIn;
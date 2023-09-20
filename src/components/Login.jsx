import React from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/img/background.png'
import { loginUser } from '../server/server';
import { useState } from 'react'

// useNavigate - navega hacia la url que yo le agrego
// evento useState

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const userFull = await loginUser(user.email, user.password);
      localStorage.setItem("user", JSON.stringify(userFull))
      setError(null);
      alert("Ingreso Exitoso");
      if (userFull.user.role == "mesero") {
        navigate('/home-mesero');
      } else if (userFull.user.role == "chef") {
        navigate('/home-chef');
      } else {
        navigate('/home-admin');
      }


    } catch (error) {
      setError("Hubo un problema al ingresar " + error);
    }
  };

  return (
    <section className='container'>
      <section className='transition-div'>
        <div className="background-image"></div>
        <img src={background} alt='backgroud' />
      </section>
      <section className='forms-container'>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='transition-header'>
              <h1 className='title'>BURGER QUEEN</h1>
            </div>
            <h2 className='title'> Bienvenid@s</h2>
            <div>
              <h3 className='subtitle'>Inicia Sesion con tu usuario asignado</h3>
            </div>
            <div>
              <input
                className='input-field'
                type="email"
                label="Ingresar Email"
                size="lg"
                placeholder='Ingresar Email'
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <input
                className='input-field'
                type="password"
                label="Ingresa contraseña"
                size="lg"
                placeholder='Ingresa contraseña'
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <br />
            <div>
              <input type="submit" className="btn" value="Iniciar Sesion" />
            </div>
          </form>
          {error && <div className="error-message">{error}</div>}
        </div>
      </section>
    </section>
  );
}

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
      const token = await loginUser(user.email, user.password);
      console.log(token);
      setError(null);
      alert("Ingreso Exitoso");
      if (token.user.role == "admin") {
        navigate('/home-admin');
      } else {
        navigate('/home-mesero');
      }
    } catch (error) {
      setError("Hubo un problema al ingresar " + error);
    }
  };

  return (
    <section className='container'>
      <section className='transition-div'>
        <div className="background-image"></div>
      </section>
      <section className='forms-container'>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='transition-header'>
              <h1 className='title'>BURGER QUEEN</h1>
            </div>
            <h1 className='subtitle'> Bienvenid@s</h1>
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

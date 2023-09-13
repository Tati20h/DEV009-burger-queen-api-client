import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TEInput } from "tw-elements-react";
import background from '../assets/img/background.png'
import { loginUser } from '../server/server';
import { useState } from 'react'

// useNavigate - navega hacia la url que yo le agrego
// evento useState

export const Login = () => {
  // contruye navigate
  const navigate = useNavigate();
  const [form, setForm] = useState({})

  const changed = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const logUser = async e => {
    e.preventDefault();
    let user = form;

    try {
      const token = await loginUser(user.email, user.password)
      console.log(token)

      alert("Ingreso Exitoso")
      navigate('/home')

    } catch (error) {
      alert("Hubo un problema al ingresar " + error)
    }
  }

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img

              src={background}
              className="w-613 h-834 transform rotate-89.504 flex-shrink-0"
              alt="Sample image"
            />

          </div>


          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={logUser}>
              <h1>BURGER QUEEN</h1>
              <h1>Bienvenid@s</h1>
              {/* <!--Sign in section--> */}

              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              {/* <!-- Email input --> */}
              <TEInput
                type="email"
                label="Ingresar Email"
                size="lg"
                className='w-395 h-54 transform rotate-89.5 flex-shrink-0 bg-gray-200'
                onChange={changed}
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                label="Ingresa tu contraseña"
                className="mb-6 bg-green-200"
                size="lg"
                onChange={changed}
              ></TEInput>

              <div className="mb-6 flex items-center justify-between bg-gray-200">
                {/* <!-- Remember me checkbox --> */}
              </div>

              {/* <!-- Login button --> */}
              <div className="flex justify-center items-center">
                <input type="submit" value="Iniciar Sesion" className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
}

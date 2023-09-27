# Changelog

## 1.1.0 - 2023-09-27

### Sprint learnings

- Aprendi a usar el props,useState , useEffect,useNavigate

### Added
- Agrege la vista de login mostrando error en caso y asignando rol si es meserfo,admid,o chef
- Agrege la vista de mesero mostrando unicamente la vista de productos
- Agrege la vista de chef mostrando unicamente la vista de la tabla donde quedaria la orden en cocina 
- Agregue la vista del adminsitrador para poder re dirigir a crear usuario o producto dependiendo el caso

### Fixed
- Se resuelve bug  que al aparecer un mensaje de error antes de poder usar la api de productos ,me arrojaba error a la hora de iterar json
  - el error se daba por no uso de use effect a cambio itere con for
- Se resuelve bug UX que al aparecer un mensaje de error movía la interfaz del formulario de login

### Errors

- Tengo un error actual en la carga de pagina cuando hago la navegacion, se tiene que refrescar de nuevo para que se visualice
- error:
    ```
    react-dom.development.js:86 Warning: useEffect must not return anything besides a function, which is used for clean-up.

    It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await MyAPI.getData(someId);
        // ...
      }
      fetchData();
    }, [someId]); // Or [] if effect doesn't need props or state
    ```

## 1.0.1 - 2023-09-19

### Sprint learnings

- Aprendi a usar los  useState, useEffect,useNavigate
- Aprendi CSS Modules
- Aprendi a usar libreria de material UI por componentes

### Changed

- Definición de estado para el campo de email y password
- Implementación de petición de /login al API/home-mesero/home-chef
- Mejoras visuales en la vista de login usando CSS Modules
- Mejoras visuales en la vista de homes usando CSS Modules
### Fixed

- Se resuelve bug que recarga la página al enviar el formulario con `e.preventDefault`

## 1.0.0 - 2023-09-27

### Sprint learnings

- Aprendimos a crear una aplicación React y Javascript usando ViteJS.
- Ejecutamos el API Mock e hicimos unas peticiones de prueba usando Postman.

### Added

- Vista de Login agregada con estilos y consumo de API JSON mock
- Vista de home agregada con estilos y consumo de API JSON mock
- Vista de admid agregada con estilos y consumo de API JSON mock
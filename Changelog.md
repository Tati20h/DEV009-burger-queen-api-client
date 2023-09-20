# Changelog

## 1.1.0 - 2023-09-20

### Sprint learnings

- Aprendimos a usar el props,useState , useEffect,useNavigate

### Added
- Agrege la vista de login mostrando error en caso y asignando rol si es meserfo,admid,o chef
- Agrege la vista de mesero mostrando unicamente la vista de productos
- Agrege la vista de chef mostrando unicamente la vista de la tabla donde quedaria la orden en cocina 

### Fixed
- Se resuelve bug  que al aparecer un mensaje de error antes de poder usar la api de productos ,me arrojaba error a la hora de iterar json
- Se resuelve bug UX que al aparecer un mensaje de error movía la interfaz del formulario de login

## 1.0.1 - 2023-09-19

### Sprint learnings

- Aprendi a usar los  useState, useEffect,useNavigate
- Aprendi CSS Modules

### Changed

- Definición de estado para el campo de email y password
- Implementación de petición de /login al API/home-mesero/home-chef
- Mejoras visuales en la vista de login usando CSS Modules
- Mejoras visuales en la vista de homes usando CSS Modules
### Fixed

- Se resuelve bug que recarga la página al enviar el formulario con `e.preventDefault`

## 1.0.0 - 2023-09-19

### Sprint learnings

- Aprendimos a crear una aplicación React y TypeScript usando ViteJS.
- Ejecutamos el API Mock e hicimos unas peticiones de prueba usando Postman.

### Added

- Vista de Login agregada sin estilos ni consumo de API
- Vista de home agregada con estilos ni consumo de API
- Vista de admid agregada sin estilos ni consumo de API
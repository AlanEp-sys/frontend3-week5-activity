# 🎮 Proyecto Gamepedia - Frontend II

Bienvenido a la construcción de tu primera Single Page Application (SPA) conectada a una base de datos real de videojuegos, utilizando React, React Router y la API de RAWG.

## 🚀 Paso 1: Instalación desde Cero

Abre tu terminal y ejecuta los siguientes comandos para inicializar el proyecto base con Vite:

```bash
# 1. Crear el proyecto (escribe 'y' si te pide confirmación)
npm create vite@latest gamepedia -- --template react

# 2. Entrar a la carpeta recién creada
cd gamepedia

# 3. Instalar las dependencias de Node.js
npm install

# 4. Instalar React Router para la navegación entre páginas
npm install react-router-dom
```

## 🔑 Paso 2: Tu Credencial de Desarrollador (API Key)

Para poder descargar la información de los videojuegos, necesitas una llave de acceso:
1. Entra a [rawg.io](https://rawg.io/) y crea una cuenta gratuita.
2. Ve a tu perfil en la esquina superior derecha y selecciona **"Get an API key"**.
3. Copia el código que te generen y guárdalo en un lugar seguro. Lo usaremos en el Paso 5.

## 🧹 Paso 3: Limpieza del Proyecto

Vite nos entrega código de ejemplo que no necesitamos. Vamos a limpiar:
1. Elimina el archivo `src/App.css`.
2. Abre `src/index.css`, borra todo el código que trae por defecto y pega el CSS de Gamepedia brindado en clase.
3. Abre `src/App.jsx`, borra todo y déjalo temporalmente así:

```jsx
function App() {
  return <h1>Gamepedia en construcción</h1>
}
export default App;
```

## 📂 Paso 4: Estructura de Carpetas

Crea la siguiente arquitectura dentro de la carpeta `src/`:

```text
src/
 ├── components/       
 │    ├── Navbar.jsx      
 │    └── GameCard.jsx 
 ├── pages/            
 │    ├── Home.jsx         
 │    ├── GameDetails.jsx  
 │    └── Favorites.jsx    
```

*(Asegúrate de que cada archivo tenga la estructura básica de un componente de React exportado por defecto `export default ComponentName`)*.

## 🔗 Paso 5: Enrutamiento Principal

1. Abre `src/main.jsx`. Asegúrate de importar tus estilos (`import './index.css'`) y envuelve tu `<App />` con el `<BrowserRouter>`.
2. Ve a `src/App.jsx`, importa tus páginas y configura las `<Routes>`:
    * `/` -> `<Home />`
    * `/game/:id` -> `<GameDetails />`
    * `/favorites` -> `<Favorites />`

## 🔌 Paso 6: Consumo de la API (RAWG)

En tu archivo `src/pages/Home.jsx`:
1. Crea los estados locales: `games`, `isLoading`, `error`.
2. Configura un `useEffect` con dependencias vacías `[]`.
3. Haz un `fetch` a `https://api.rawg.io/api/games?key=TU_API_KEY_AQUI`.
4. Utiliza el método `.map()` en tu JSX para iterar sobre la variable `games` y renderizar múltiples componentes `<GameCard />`.

## 🏃‍♂️ Paso 7: Ejecutar el Proyecto

Para levantar el servidor de desarrollo y ver tu catálogo de juegos en vivo:

```bash
npm run dev
```
Abre `http://localhost:5173` en tu navegador para ver el resultado.
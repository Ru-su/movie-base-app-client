import { Route, Routes } from 'react-router-dom'
import { Home, Movie } from './pages'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies/:id' element={<Movie/>} /> 
      </Routes>
    </div>
  )
}

export default App

import {  Route,Routes } from 'react-router-dom'
import './App.css'
import Projects from './components/Projects/Projects.jsx'
import Home from './components/Home/Home.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </>
  )
}

export default App

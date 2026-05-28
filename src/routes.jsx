import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Presents from './pages/Presents'
import Graduation from './pages/Graduation'

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/presents/:name" element={<Presents />} />
        <Route path="/grad/:name" element={<Graduation />} />
      </Routes>
    </>
  );
}

export default AppRoutes

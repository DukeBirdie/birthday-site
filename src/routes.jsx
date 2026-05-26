import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Presents from './pages/Presents'

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/presents/:name" element={<Presents />} />
      </Routes>
    </>
  );
}

export default AppRoutes

import { Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Presents from './pages/Presents'
import Graduation from './pages/Graduation'
import CheckUser from './pages/CheckUser'

function PresentsWrapper() {
  const { name } = useParams();
  return <Presents key={name} />;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check/:name" element={<CheckUser />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/presents/:name" element={<PresentsWrapper />} />
        <Route path="/grad/:name" element={<Graduation />} />
      </Routes>
    </>
  );
}

export default AppRoutes

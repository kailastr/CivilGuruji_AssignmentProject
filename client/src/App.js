import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

//pages import
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import HomePage from './pages/homePage';
import CoursePage from './pages/coursePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/course' element={<CoursePage />} />
      </Routes>
    </>
  );
}

export default App;

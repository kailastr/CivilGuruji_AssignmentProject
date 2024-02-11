import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

//pages import
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import HomePage from './pages/homePage';
import CoursePage from './pages/coursePage';
import NotLoggedIn from './pages/NotLoggedIn';
import NotPurchased from './pages/NotPurchased';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/usernotloggedin' element={<NotLoggedIn />} />
        <Route path='/usercoursepotpurchased' element={<NotPurchased />} />
      </Routes>
    </>
  );
}

export default App;

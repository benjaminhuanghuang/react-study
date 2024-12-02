import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
//
//import Login from './components/login';
//
import Home from "./views/home";
import SignIn from "./views/signIn";
import SignUp from "./views/signUp";
import ProtectedPage from './views/ProtectedPage';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

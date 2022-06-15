import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './components/protected_route';
import Dashboard from './routes/dashboard';
import Login from './routes/login';
import Notfound from './routes/notfound';
import Register from './routes/register';
import { useAuth } from './hooks/useAuth';
import UserContext from "./lib/context";
import Home from "./routes/home/home";

function App() {

  const auth = useAuth();

  return (
    <UserContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home /> 
          }>
          </Route>
          <Route path="/login" element={
            <ProtectedRoute redirectPath="/dashboard">
              <Login />
            </ProtectedRoute>
          } />
          <Route path="/register" element={
            <ProtectedRoute redirectPath="/dashboard">
              <Register/>
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
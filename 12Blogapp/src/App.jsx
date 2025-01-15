import { Outlet } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import Header from "./components/Header/Header";
import { login, logout } from "./store/authSlice";

function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  ) : null;
}

export default App;

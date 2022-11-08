import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import NewTicketPage from "./pages/NewTicketPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/tickets/new" element={<NewTicketPage/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}
    </main>
  );
}

export default App;

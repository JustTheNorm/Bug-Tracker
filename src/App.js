import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";
import NewTicketPage from "./pages/NewTicketPage";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import { getUser } from './utilities/users-service';
import ProjectShow from "./components/ProjectShow/ProjectShow";

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
          <Route Path="/projects/new"/>
          <Route path="/projects/:id" element={<ProjectShow/>}/>
          <Route path="/home" element={<Dashboard/>}/>
        </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}
    </main>
  );
}

export default App;

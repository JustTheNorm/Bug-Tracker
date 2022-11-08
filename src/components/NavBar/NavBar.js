import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import "./NavBar.css"


const NavBar = ({user, setUser}) => {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav className='nav'>
      {user ? <span> Welcome, {user.name}</span> : ``}{" "}{" "}{" "}
        <Link to="/Home">Home</Link>{" "}
        &nbsp; | &nbsp;
        <Link to="/tickets/new">My Tickets</Link> {" "}
        &nbsp;&nbsp;
        {user ? <Link to="" onClick={handleLogOut}>Log Out</Link> : ``}
        <br/>
        
    </nav>
  )
}

export default NavBar
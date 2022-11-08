import React from 'react'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import "./NavBar.module.css"


const NavBar = ({user, setUser}) => {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <div className='nav'>
      {user ? <span> Welcome, {user.name}</span> : ``}
      <br/><br/>
        <Link to="/Home">Dashboard</Link>{" "}
        <br/><br/>
        <Link to="/tickets/new">My Tickets</Link> {" "}
        <br/><br/>
        {user ? <Link to="" onClick={handleLogOut}>Log Out</Link> : ``}
        <br/>
        
    </div>
  )
}

export default NavBar
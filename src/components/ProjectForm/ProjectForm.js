// import { useState } from "react";
import {newProject} from "../../utilities/projects-api.js"
import { useState, useEffect} from "react";
import { getAll } from "../../utilities/projects-api.js";
import {newTicket} from "../../utilities/tickets-api.js"
import {getAllUsers} from "../../utilities/users-api.js"
// import * as usersService from "../utilities/users-service";

export default function TicketForm(props) {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("")
  const [state, setState] = useState({
    project_name: ``,
    users:``,
  })

  useEffect (()=>{
        
    const fetchUsers = async () => {
        
        const Users = await getAllUsers()
        
        console.log(Users)
        setUserData(Users)
    }

    // const fetchProjects = async () => {
    //   const Projects = await getAll()
    //   console.log(Projects)
    //   setData(Projects)
    // }
    // fetchProjects()
    fetchUsers()
},[])
  

  function handleChange(evt) {
    setState({ ...state, [
      evt.target.name]: evt.target.value });
    setError('');
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try{
        const formData = {
            project_name: state.project_name,
            users: state.users
        }
        console.log(formData)
        const project = await newProject(formData)
        console.log(project)    

        // props.setTrigger() = false;

    } catch (error){
        // this.setError({error: `Sign Up Failed - Try Again`})
    }
  }

  return (
    <div>
      <div className="form" >
        <h3>New Project</h3>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <label>Project Name</label>
          <input type="text" name="project_name" value={state.project_name} onChange={handleChange} required />
          <label>Assign Users</label>
          <select 
          name="users" 
          value={state.users} 
          onChange={handleChange}
          >
          {userData ? userData.map((user, idx)=> {
              return(
                <option value={user.name}>{user.name}</option>
              )
            }): null}
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

import { useState, useEffect} from "react";
import { getAllProjects } from "../../utilities/projects-api.js";
import {newTicket, getAllTickets} from "../../utilities/tickets-api.js"
import {getAllUsers} from "../../utilities/users-api.js"
// import * as usersService from "../utilities/users-service";

export default function TicketForm(props) {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("")
  const [data, setData] = useState("")
  const [ticketData, setTicketData] = useState("")
  const [state, setState] = useState({
    project_name: ``,
    category: ``,
    description: ``,
    users:``,
  })

  useEffect (()=>{
        
    const fetchUsers = async () => {
        
        const Users = await getAllUsers()
        
        console.log(Users)
        setUserData(Users)
    }

    const fetchProjects = async () => {
      const Projects = await getAllProjects()
      console.log(Projects)
      setData(Projects)
    }

    // const fetchTickets = async () => {
    //   const Tickets = await getAllTickets()
    //   console.log(Tickets)
    //   set
    // }
    fetchProjects()
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
            category: state.category,
            description: state.description,
            users: state.users
        }
        // console.log(formData)
        const ticket = await newTicket(formData)
        console.log(ticket)
        setTicketData(ticket)
        props.setTrigger = (false)

        

    } catch (error){
        // this.setError({error: `Sign Up Failed - Try Again`})
    }
  }

  return (
    <div>
      <div className="ticket-form" >
        <h3>New Ticket</h3>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <label>Project Name</label>
          {/* <input type="text" name="project_name" value={state.project_name} onChange={handleChange} required /> */}
          <select
          name="project_name" 
          value={state.project_name}
          onChange={handleChange}
          required>
          {data ? data.map((project, idx) => {
            return(
              <option value={project.project_name}>{project.project_name}</option>
              )
            }) : null}
            </select>
            
          <label>Category</label>
          <input type="text" name="category" value={state.category} onChange={handleChange} required />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            rows="8"
            cols="50"
            value={state.description} 
            onChange={handleChange}
            required
          ></textarea>

          <label>Assign Users</label>

          <select 
          name="users" 
          value={state.users} 
          onChange={handleChange}
          >
            {/* <option value="Norm">Norm</option> */}
            {/* <option value="James">James</option> */}
            {/* <option value="Megan">Megan</option> */}
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

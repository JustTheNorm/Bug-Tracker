import { useState } from "react";
import {newTicket} from "../../utilities/tickets-api.js"
// import * as usersService from "../utilities/users-service";

export default function TicketForm() {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    project_name: ``,
    category: ``,
    description: ``,
    users:``,
  })
  

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
        console.log(formData)
       const ticket = await newTicket(formData)
        console.log(ticket)
        

    } catch (error){
        // this.setError({error: `Sign Up Failed - Try Again`})
    }
  }

  return (
    <div>
      <div className="form" >
        <h3>New Ticket</h3>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <label>Project Name</label>
          <input type="text" name="project_name" value={state.project_name} onChange={handleChange} required />
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
          onChange={handleChange}>

            <option value="Norm">Norm</option>
            <option value="James">James</option>
            <option value="Lisa">Lisa</option>
            <option value="Megan">Megan</option>
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

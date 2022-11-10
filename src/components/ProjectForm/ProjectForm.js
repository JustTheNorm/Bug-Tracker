import { useState } from "react";
import {newProject} from "../../utilities/projects-api.js"
// import * as usersService from "../utilities/users-service";

export default function TicketForm() {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    project_name: ``,
    users:``,
  })
  

  function handleChange(evt) {
    setState({ ...state, [
      evt.target.name]: evt.target.value });
    setError('');
  }

  const handleSubmit = async (evt) => {
    // evt.preventDefault()
    try{
        const formData = {
            project_name: state.project_name,
            users: state.users
        }
        console.log(formData)
       const project = await newProject(formData)
        console.log(project)
        

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

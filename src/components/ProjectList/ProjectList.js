import React, {useState,useEffect} from 'react'
import {getAll, getById, removeProject} from "../../utilities/projects-api.js"
// import "./ProjectList.module.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const ProjectList = () => {
    const [data, setData] = useState([])
    
    useEffect (()=>{
        
        const fetchProjects = async () => {
            
            const Projects = await getAll()
            console.log(Projects)
            setData(Projects)
        }

        fetchProjects()
    },[])

    const handleDelete = async (evt) => {
        console.log(evt)
        const project = await removeProject(evt)
        console.log(project)
    }

  return (
      <div className='container'>
      <div>Projects</div>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Project</th>
          <th>Assigned</th>
          <th>ID</th>
        </tr>
      </thead>
      {data.map((project, idx) => {
        return(
      <tbody>
        <tr>
          {/* <td>{project.description}</td> */}
          <td>{project.project_name}</td>
          <td>{project.users}</td>
          <td>{project._id}</td>
          <td><Button variant="danger" onClick={() => handleDelete(project._id)}>Delete</Button>{' '}</td>
        </tr>
      </tbody>
          )})}
    </Table>

      </div>
  )
}

export default ProjectList
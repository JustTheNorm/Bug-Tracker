import React, {useState,useEffect} from 'react'
import {getAll, getById, removeProject} from "../../utilities/projects-api.js"
// import "./ProjectList.module.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./ProjectList.module.css"
import PieCharts from '../PieCharts/PieCharts.js';


const ProjectList = () => {
  const [data, setData] = useState([])
  const [userAdmin, setUserAdmin] = useState(true)
  
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
        const projects = await removeProject(evt)
        console.log(projects)
        setData(projects)
        
    }

  return (
      <div className='container=project'>
      <PieCharts/>
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
          <td><a>{project.project_name}</a></td>
          <td>{project.users}</td>
          <td>{project._id}</td>
          {userAdmin == true ?
          <td><Button variant="danger" onClick={() => handleDelete(project._id)}>Delete</Button>{' '}</td> : false}
        </tr>
      </tbody>
          )})}
    </Table>

      </div>
  )
}

export default ProjectList
import React, {useState,useEffect} from 'react'
import {getAll} from "../../utilities/tickets-api.js"
// import "./TicketList.module.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ProjectList = () => {
    const [data, setData] = useState([])
    
    useEffect (()=>{
        
        const fetchTickets = async () => {
            
            const tickets = await getAll()
            console.log(tickets)
            setData(tickets)
        }

        fetchTickets()
    },[])



  return (
      <>
      <div>Open Tickets</div>      
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Project</th>
          <th>Assigned</th>
          <th>ID</th>
        </tr>
      </thead>
      {data.map((ticket, idx) => {
        return(
      <tbody>
        <tr>
          <td>{ticket.description}</td>
          <td>{ticket.project_name}</td>
          <td>{ticket._id}</td>
          <td>{ticket.users}</td>
          <td><Button variant="info">Resolved</Button>{' '}</td>
        </tr>
      </tbody>
          )})}
    </Table>

      </>
  )
}

export default ProjectList
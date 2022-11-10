import React, {useState,useEffect} from 'react'
import {getAll, updateTicket} from "../../utilities/tickets-api.js"
import "./TicketList.module.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TicketList = () => {
    const [data, setData] = useState([])

    const handleResolved = async (evt) => {
      // evt.preventDefault()
      try{
          
          console.log(evt)
         const ticket = await updateTicket(evt)
          
          
  
      } catch (error){
          // this.setError({error: `Sign Up Failed - Try Again`})
      }
    }
    
    useEffect (()=>{
        
        const fetchTickets = async () => {
            
            const tickets = await getAll()
            console.log(tickets)
            setData(tickets)
        }

        fetchTickets()
    },[])



  return (
      <div><br/><br/><br/><br/><br/><br/><br/>
      <div className='ticket-list'>Open Tickets</div>      
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>description</th>
          <th>Project</th>
          <th>ID</th>
          <th>Users</th>
        </tr>
      </thead>
      {data.map((ticket, idx) => {
        return(
        !ticket.resolved ?
      <tbody>
        <tr>
          <td>{ticket.description}</td>
          <td>{ticket.project_name}</td>
          <td>{ticket._id}</td>
          <td>{ticket.users}</td>
          <td><Button variant="info" onClick={() => handleResolved(ticket._id)}>Resolve</Button>{' '}</td>
        </tr>
      </tbody>
      : null
          )})}
    </Table>

      </div>
  )
}

export default TicketList
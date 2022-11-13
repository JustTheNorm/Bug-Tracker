import React, {useState,useEffect} from 'react'
import {getAll, updateTicket} from "../../utilities/tickets-api.js"
import "./TicketList.module.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const TicketList = () => {
    const [data, setData] = useState([])

    const handleResolved = async (evt) => {
      // evt.preventDefault()
      try{
          
        console.log(evt)
        const ticket = await updateTicket(evt)
        console.log(ticket)
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
      <div>
      <div className='ticket-list'>Open Tickets</div>      
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>description</th>
          <th>Project</th>
          <th>ID</th>
          <th>Resolve</th>
        </tr>
      </thead>
      {data.map((ticket, idx) => {
        return(
        
      <tbody>
        <tr>
          <td>{ticket.description}</td>
          <td>{ticket.project_name}</td>
          <td>{ticket._id}</td>
          {/* <td>{ticket.users}</td> */}
            {/* <td>
            <DropdownButton title={ticket.users} id="change">
              <Dropdown.Item eventKey="1">Norm</Dropdown.Item>
              <Dropdown.Item eventKey="2">James</Dropdown.Item>
              <Dropdown.Item eventKey="3">Megan</Dropdown.Item>
            </DropdownButton>
             </td> */}
          <td>
            <Button variant="info" onClick={() => handleResolved(ticket._id)}>Resolve</Button>{' '}
          </td>
        </tr>
      </tbody>
          )})}
    </Table>

      </div>
  )
}

export default TicketList
import React, {useState,useEffect} from 'react'
import {getAllTickets, updateTicket} from "../../utilities/tickets-api.js"
import "./TicketList.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import BarChart from '../../components/BarChart/BarChart.js';
const TicketList = () => {
    const [data, setData] = useState([])

    const handleResolved = async (id) => {
      // evt.preventDefault()
      try{
        // console.log(id)
        const ticketToUpdate = data.filter(ticket => ticket._id === id)
        ticketToUpdate[0].resolved = true;
        // console.log(ticketToUpdate)
        
        const ticket = await updateTicket(id, ticketToUpdate[0])
        console.log(ticket)
        setData(ticket)

      } catch (error){
          // this.setError({error: `Sign Up Failed - Try Again`})
      }
    }
    
    useEffect (()=>{
        
        const fetchTickets = async () => {
            
            const tickets = await getAllTickets()
            console.log(tickets)
            setData(tickets)
        }

        fetchTickets()
    },[])



  return (
      <div>
<BarChart/><br/><br/><br/>
      <div className=''><h4>Open Tickets</h4></div>      
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Project</th>
          <th>ID</th>
          <th>description</th>
          <th>Date</th>
          <th>Resolve</th>
        </tr>
      </thead>
      {data.map((ticket, idx) => {
        return(  
          <tbody key={idx}>
        {ticket.resolved != true ?
        <tr>
          <td>{ticket.project_name}</td>
          <td>{ticket._id}</td>
          <td>{ticket.description}</td>
          <td>{ticket.createdAt}</td>
          <td>
            <Button variant="info" onClick={() => handleResolved(ticket._id)}>Resolve</Button>{' '}
          </td>
        </tr>:null}
      </tbody>
          )})}
    </Table>

      </div>
  )
}

export default TicketList
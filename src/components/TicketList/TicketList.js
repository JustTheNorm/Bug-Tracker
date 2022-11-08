import React, {useState,useEffect} from 'react'
import {getAll} from "../../utilities/tickets-api.js"
import "./TicketList.module.css"

const TicketList = () => {
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
      {data.map((ticket, idx) => {
        return(
            
        <div className='tickets'>
        <table className='ticket-form'>
            <thead>
                <th>Description</th>
                <th>Priority</th>
                <th>ID</th>
                <th></th>
            </thead>
            <tbody>
                <td>{ticket.description}</td>
                <td>{ticket.createdAt}</td>
                <td key={ticket._id}>{ticket._id}</td>
                <button>Resolved</button>
            </tbody>
            {/* <h1 key={idx}>Project: {ticket.project_name}</h1>
            <h3>Category: {ticket.category}</h3>
            <p>Description: <br/></p>
            <h5>Assigned:{ticket.users}</h5>
            <h6>Created: {ticket.createdAt}</h6>
            <h7>Ticket ID: {ticket._id}</h7> */}
        </table>
        </div>

      )})}
      </>
  )
}

export default TicketList
import Popup from "../components/Popup/Popup";
import TicketForm from "../components/TicketForm/TicketForm";
import {useState} from "react"
import TicketList from "../components/TicketList/TicketList"
import "./NewTicketPage.css"

const NewTicketPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className="tickets">
      <h1>My Tickets</h1>
      <button onClick={()=> setButtonPopup(true)} >Create New Ticket</button>
      <br/><br/>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <TicketForm/>
      </Popup>
      <div className="ticket-list">
      <TicketList/>

      </div>

    </div>
  );
};

export default NewTicketPage;

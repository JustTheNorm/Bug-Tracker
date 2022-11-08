import Popup from "../components/Popup/Popup";
import TicketForm from "../components/TicketForm/TicketForm";
import {useState} from "react"
import TicketList from "../components/TicketList/TicketList"
import "./NewTicketPage.module.css"

const NewTicketPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className="tickets">
      <h1>My Tickets</h1>
      <button onClick={()=> setButtonPopup(true)} >Create Ticket</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <TicketForm/>
      </Popup>
      <TicketList/>

    </div>
  );
};

export default NewTicketPage;

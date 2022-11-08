import Popup from "../components/Popup/Popup";
import TicketForm from "../components/TicketForm/TicketForm";
import {useState} from "react"

const NewTicketPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div>
      <h1>My Tickets</h1>
      <button onClick={()=> setButtonPopup(true)} >Create Ticket</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <TicketForm/>
      </Popup>
    </div>
  );
};

export default NewTicketPage;

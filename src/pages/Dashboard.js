import ProjectList from '../components/ProjectList/ProjectList';
import * as usersService from '../utilities/users-service';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Popup from "../components/Popup/Popup";
import ProjectForm from "../components/ProjectForm/ProjectForm"
import TicketList from '../components/TicketList/TicketList';


const Dashboard = () => {
    const [buttonPopup, setButtonPopup] = useState(false)

    const handleCheckToken = async () => {
       const expDate = await usersService.checkToken()
       console.log(expDate)
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <ProjectList/>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>  
                <ProjectForm/>
            </Popup>
            <Button variant='info' onClick={()=> setButtonPopup(true)}>New Project</Button>
            <br/>
            <TicketList/>
            {/* <button onClick={handleCheckToken}>Check When My login Expires</button> */}
        </div>
    )
}

export default Dashboard
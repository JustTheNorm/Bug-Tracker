import ProjectList from '../components/ProjectList/ProjectList';
import * as usersService from '../utilities/users-service';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Popup from "../components/Popup/Popup";
import ProjectForm from "../components/ProjectForm/ProjectForm"
import TicketList from '../components/TicketList/TicketList';
import Card from "../components/Card/Card.js"
import "./Dashboard.css"


const Dashboard = () => {
    const [buttonPopup, setButtonPopup] = useState(false)

    const handleCheckToken = async () => {
       const expDate = await usersService.checkToken()
       console.log(expDate)
    }

    return(
        <>
            <h1>Dashboard</h1>
            <Button variant='info' onClick={()=> setButtonPopup(true)}>New Project</Button>
        <div className='dashboard'>
            <ProjectList/>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>  
                <ProjectForm/>
            </Popup>
            <br/>
            <TicketList/>
            {/* <Card/> */}
            {/* <button onClick={handleCheckToken}>Check When My login Expires</button> */}
        </div>
        </>
    )
}

export default Dashboard
import ProjectList from '../components/ProjectList/ProjectList';
import * as usersService from '../utilities/users-service';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Popup from "../components/Popup/Popup";
import ProjectForm from "../components/ProjectForm/ProjectForm"
import TicketList from '../components/TicketList/TicketList';
import PieCharts from "../components/PieCharts/PieCharts.js"
import BarChart from '../components/BarChart/BarChart';

import "./Dashboard.css"
import UserList from '../components/UserList/UserList';


const Dashboard = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [userAdmin , setUserAdmin] = useState (true)

    const handleCheckToken = async () => {
       const expDate = await usersService.checkToken()
       console.log(expDate)
    }

    return(
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <br/>
            {userAdmin == true ?
            <Button variant='info' onClick={()=> setButtonPopup(true)}>New Project</Button>: false }
            <br/><br/><br/><br/>
            {/* <PieCharts /> */}
            {/* <BarChart/> */}
        <div className='dashboard'>
            <UserList/>
            <ProjectList />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>  
                <ProjectForm trigger={setButtonPopup}/>
            </Popup>
            <TicketList/>
        </div>
        </div>
    )
}

export default Dashboard
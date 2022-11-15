import React from 'react'
import {getAllUsers} from "../../utilities/users-api"
import {useState, useEffect} from "react"
import Table from 'react-bootstrap/Table';
import LineChart from "../../components/LineChart/LineChart"

const UserList = () => {
    const [userData, setUserData] = useState("")

    useEffect (()=>{
        
        const fetchUsers = async () => {
            
            const users = await getAllUsers()
            console.log(users)
            setUserData(users)
        }

        fetchUsers()
    },[])

  return (
    <>
    <div>
        <LineChart/>
    <div>Users List</div>   
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>User</th>
        <th>ID</th>
      </tr>
    </thead>
    {userData ? userData.map((user, idx) => {
      return(  
        <tbody>
      {user.admin != true ?
      <tr>
        <td>{user.name}</td>
        <td>{user._id}</td>
      </tr>:null}
    </tbody>
        )}) : null}
  </Table>

    </div>
    </>
  )
}

export default UserList
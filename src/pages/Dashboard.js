import ProjectList from '../components/ProjectList/ProjectList';
import * as usersService from '../utilities/users-service';

const Home = () => {

    const handleCheckToken = async () => {
       const expDate = await usersService.checkToken()
       console.log(expDate)
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <ProjectList/>
            {/* <button onClick={handleCheckToken}>Check When My login Expires</button> */}
        </div>
    )
}

export default Home
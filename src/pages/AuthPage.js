import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"
import { useState } from "react";
import "./Authpage.css"

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true);

    // const handleSignUp = () => {
    //     setShowSignUp(!showSignUp)
    // }

    return(
        <div className="auth">
            <h1>AuthPage</h1>
            {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser}/>}

            <button onClick={() => setShowSignUp(!showSignUp)}> 
                {showSignUp ? "Log In" : "Sign Up"}
            </button>
        </div>
    )
}

export default AuthPage
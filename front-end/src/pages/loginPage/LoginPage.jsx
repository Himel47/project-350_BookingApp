import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './loginPage.css'

const LoginPage = () => {

    const [reg, setReg] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/")
    }

    const handleReg = () => {
        navigate("/register")
    }

    return (
        <div className="loginPage">
            <Navbar />
            <div className="loggerContainer">
                <div className="image">
                    <img src={require("../../Gallery/1.jpg")} alt="" className="backImg" />
                </div>
                {!reg &&
                    <div className="logWrapper">
                        <div className="heading">
                            <h2>Login</h2>
                        </div>
                        <div className="loggerItem">
                            <label>Username</label>
                            <input type="text" className="username" placeholder='Username' />
                        </div>
                        <div className="loggerItem">
                            <label>Password</label>
                            <input className='password' placeholder='Password' />
                        </div>
                        <div className="loggerItem">
                            <button className="loggerBtn" onClick={handleLogin}>Login</button>
                        </div>
                        <div className="registerLink">
                            Not Registered yet?<br /><b onClick={handleReg}>Register Now</b>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default LoginPage

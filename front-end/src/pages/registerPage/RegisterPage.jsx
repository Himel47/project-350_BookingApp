import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './registerPage.css'

const RegisterPage = () => {

    const [reg, setReg] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <div className="registerPage">
            <Navbar />
            <div className="loggerContainer">
                <div className="image">
                    <img src={require("../../Gallery/1.jpg")} alt="" className="backImg" />
                </div>
                <div className="regWrapper">
                    <div className="heading">
                        <h2>Registration</h2>
                    </div>
                    <div className="loggerItem">
                        <label>Full Name</label>
                        <input type="text" placeholder='Username' className='username' />
                    </div>
                    <div className="loggerItem">
                        <label>Password</label>
                        <input type="text" placeholder='Password' className='password' />
                    </div>
                    <div className="loggerItem">
                        <label>Email</label>
                        <input type="text" placeholder='Email' className='email' />
                    </div>
                    <div className="loggerItem">
                        <label>Mobile</label>
                        <input type="text" placeholder='Mobile' className='mobile' />
                    </div>
                    <div className="loggerItem">
                        <button className="loggerBtn" onClick={() => setReg(!reg)}>Register</button>
                    </div>
                    <div className="registerLink">
                        Already Registered?<br /><b onClick={handleLogin}>Try to Login</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
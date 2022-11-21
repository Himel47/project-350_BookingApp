import { useNavigate } from 'react-router-dom'
import './rooms.css'

const Rooms = () => {

    const navigate = useNavigate()
    const handleView = () => {
        navigate("/room")
    }

    return (
        <div className="rooms" id='rooms'>
            <div className="roomContainer">
                <div className="heading">
                    <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
                    <h2>Rooms & Suits</h2>
                </div>
                <div className="view">
                    <button onClick={handleView}>View ALL</button>
                </div>
            </div>
            <div className="roomContent">
                <div className="box">
                    <img src={require('../../images/h4.jpg')} alt="" className='listImg' />
                    <div className="roomText">
                        <h3>Superior Soble Rooms</h3>
                        <p><span>BDT</span>1,790 <span>/per night</span></p>
                    </div>
                </div>
                <div className="box">
                    <img src={require('../../images/h8.jpg')} alt="" className='listImg' />
                    <div className="roomText">
                        <h3>Superior Soble Rooms</h3>
                        <p><span>BDT</span>2,290 <span>/per night</span></p>
                    </div>
                </div>
                <div className="box">
                    <img src={require('../../images/h6.jpg')} alt="" className='listImg' />
                    <div className="roomText">
                        <h3>Superior Soble Rooms</h3>
                        <p><span>BDT</span>2,990 <span>/per night</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
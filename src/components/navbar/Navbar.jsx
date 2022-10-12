import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">
                    <img alt="logo" src={require('../../images/Britannia-Hotel.jpg')} />
                </span>
                <div className="nav-menu">
                    <a href="#home" className="navLink">Home</a>
                    <a href="#about" className="navLink">About</a>
                    <a href="#rooms" className="navLink">Rooms</a>
                    <a href="#gallery" className="navLink">Gallery</a>
                    <a href="#contact" className="navLink">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
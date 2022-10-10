import './home.css';
import Navbar from "../../components/navbar/Navbar";
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Rooms from '../../components/rooms/Rooms';
import Opinion from '../../components/opinion/Opinion';
import Gallery from '../../components/gallery/Gallery';
import Location from '../../components/location/Location';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className='homee'>
            <Navbar />
            <Header />
            <About />
            <Rooms />
            <Opinion />
            <Gallery />
            <Location />
            <Footer />
        </div>
    )
}

export default Home
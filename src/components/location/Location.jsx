import './location.css'

const Location = () => {
    return (
        <div className="map">
            <iframe width="1024" height="500" id="gmap_canvas"
                src="https://maps.google.com/maps?q=britannia%20hotel,%20sylhet&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no"></iframe>
        </div>
    )
}

export default Location
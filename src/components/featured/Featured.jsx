import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="http://zuranazrecipe.com/wp-content/uploads/2015/10/Coxs-Bazar-Sea-Beach.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Sylhet</h1>
                    <h2>Bangladesh</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="http://zuranazrecipe.com/wp-content/uploads/2015/10/Coxs-Bazar-Sea-Beach.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Khagrachari</h1>
                    <h2>Bangladesh</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="http://zuranazrecipe.com/wp-content/uploads/2015/10/Coxs-Bazar-Sea-Beach.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Khulna</h1>
                    <h2>Bangladesh</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured
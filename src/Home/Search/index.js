import "./index.css"

const Search = () => {
    return (
        <div>
            <div className="wd-searchimgdiv ">
                <img
                    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
                    className="wd-searchimg"/>
            </div>

            <span className="wd-textoverimage"> Find your next Memory</span>

            <div className="input-group mb-3 wd-inputbox">
                <input type="text" className="form-control" placeholder="Search for Events"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span className="input-group-text wd-searchtxt" id="basic-addon2">Search</span>
            </div>

        </div>
    )
}

export default Search;

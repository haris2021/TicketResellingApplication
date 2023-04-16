import "./index.css"
import Navigation from "./Navigation/index.js";
import Search from "./Search/index.js";
import CategoriesCard from "./CategoriesCard/index.js";
import FootBar from "./FootBar/FootBar.js";

const Home = () => {
    return (
        <div className="mt-4">

            <div className="row">

                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 ">
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 ">
                    <span className="wd-heading">StubHub
                    <span className="wd-headingsubpart"> is the world's top destination for ticket buyers and resellers. Prices may be higher or lower than face value </span> </span>
                    <Navigation/>
                    {/*<Categories/>*/}
                    <Search/>
                    <CategoriesCard/>
                    <FootBar/>


                </div>
                {/*<div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 ">*/}

                {/*</div>*/}
            </div>
        </div>
    );
}

export default Home;
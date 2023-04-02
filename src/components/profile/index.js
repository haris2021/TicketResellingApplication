import profInfo from './profInfo'

const ProfileComponent = () => {
    return(
        <div className="container mt-2">
            <div>

                <div>
                    <img src={`/images/${profInfo[0].profilePicture}`} alt={"profile"}
                         className={"rounded-circle"}
                         width="120px" height="120px"/>
                </div>

                <div>

                    <div className="h3 mb-0 ">{profInfo[0].Name}</div>

                    <div className="mt-2">{profInfo[0].bio}</div>
                </div>
                <div className=" mt-2">
                    <div className="">{profInfo[0].email}</div>
                    <div className="">{profInfo[0].location}</div>


                </div>

            </div>


        </div>
    );
};

export default ProfileComponent;
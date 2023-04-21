import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {UpdateLogInThunk} from "../../Services/Users-Thunks.js";
import {useNavigate} from "react-router";

const EditProfileComponent = () => {

    const navigate = useNavigate();

    const {u} = useSelector(state => state.UserLogin);

    const [name, Setname] = useState(u.FirstName);
    const [lastname, Setlastname] = useState(u.LastName);
    const [email, Setemail] = useState(u.Email);
    const [phn, Setphn] = useState("123");
    const [address, Setaddress] = useState(u.Location);

    const updateduser = {
        ...u,
        Username: name,
        LastName: lastname,
        Email: email,
        Location: address
    }

    const dispatch = useDispatch();

    const CallSubmitBtn = () => {
        dispatch(UpdateLogInThunk(updateduser));
        navigate('/profile');
    }

    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" alt="logo"
                                 src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <span className="font-weight-bold">{u.FirstName}</span>
                            <span className="text-black-50">{u.Email}</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-9 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label
                                    className="labels">Name</label><input type="text"
                                                                          className="form-control"
                                                                          placeholder="first name"
                                                                          value={name}
                                                                          onChange={(event) => Setname(
                                                                              event.target.value)}/>
                                </div>
                                <div className="col-md-6"><label className="labels">LastName</label><input
                                    type="text" className="form-control" value={lastname}
                                    placeholder="surname"
                                    onChange={(event) => Setlastname(event.target.value)}/></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Mobile
                                    Number</label><input type="text" className="form-control"
                                                         placeholder="enter phone number"
                                                         value={phn} onChange={(event) => Setphn(
                                    event.target.value)}/></div>
                                <div className="col-md-12"><label className="labels">Address</label><input
                                    type="text" className="form-control"
                                    placeholder="enter address line 1" value={address}
                                    onChange={(event) => Setaddress(event.target.value)}/></div>
                                <div className="col-md-12"><label className="labels">Email
                                    ID</label><input type="text" className="form-control"
                                                     placeholder="enter email id" value={email}
                                                     onChange={(event) => Setemail(
                                                         event.target.value)}/></div>
                            </div>
                            {/*  <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                            </div>*/}
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button"
                                        onClick={CallSubmitBtn}>Save Profile
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default EditProfileComponent;
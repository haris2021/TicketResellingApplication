import './App.css';
import 'bootstrap';

import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket.js'
import DetailsComponent from "./DetailsComponent/index.js"
import Profile from "./components/profile/index.js"
import Home from "../src/Home/index.js"
import EditProfile from "../src/components/profile/edit-profile.js"

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import ConcertReducer from "./Reducers/Concert-Reducer.js";
import details from "./Reducers/detail-reducer.js";
import UserLoginReducer from  "./Reducers/UserLogin-Reducer.js"

import UserInfoReducer from "./Reducers/UserInfo-Reducer.js";


const store = configureStore({reducer:{ConcertData: ConcertReducer, details: details, UserLogin: UserLoginReducer , UserInfo: UserInfoReducer}   }  )




function App() {
    return (

        <Provider store={store}>

            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/logIn" element={<AuthForm/>}/>
                    <Route path="/editProfile" element={<EditProfile/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/details" element={<DetailsComponent/>}/>
                    <Route path="/createEvent" element={<EventForm/>}/>

                </Routes>
            </BrowserRouter>

        </Provider>

    );
}





export default App;

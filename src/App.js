import './App.css';

import Home from "../src/Home/index.js"

import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

/*const store = configureStore(
    {reducer: {details: details}});*/

/*
function HomeComponent() {
    return <><h1>Hello Home</h1></>
}

function ProfileComponent() {
    return <><h1>Hello Profile</h1></>
}

function LoginComponent() {
    return <><h1>Hello Login</h1></>
}

function RegisterComponent() {
    return <><h1>Hello Register</h1></>
}
*/

/*function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<HomeComponent/>}/>
                    <Route path="/details" element={<DetailsComponent/>}/>
                    <Route path="/profile" element={<ProfileComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/register" element={<RegisterComponent/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}*/

import {Reducer} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";

import ConcertReducer from "./Reducers/Concert-Reducer.js";
import {Provider} from "react-redux";
import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket'
import details from "./Reducers/detail-reducer.js";
import DetailsComponent from "./DetailsComponent/index.js"

const store = configureStore({reducer:{ConcertData: ConcertReducer, details: details}   }  )

function App() {
    return (

        <Provider store={store}>

            <div>
                <Home/>
                <AuthForm> </AuthForm>
                <EventForm></EventForm>;
                <DetailsComponent/>

            </div>

        </Provider>

    );
}
export default App;

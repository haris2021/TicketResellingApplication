import './App.css';

import 'bootstrap';

import Home from "../src/Home/index.js"


import {configureStore} from "@reduxjs/toolkit";

import ConcertReducer from "./Reducers/Concert-Reducer.js";
import {Provider} from "react-redux";
import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket'
import details from "./Reducers/detail-reducer.js";
import DetailsComponent from "./DetailsComponent/index.js"
import Profile from "./components/profile/index.js"
import {BrowserRouter, Route, Routes} from "react-router-dom";

const store = configureStore({reducer:{ConcertData: ConcertReducer, details: details}   }  )

function App() {
    return (

        <Provider store={store}>

            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/logIn" element={<AuthForm/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/details" element={<DetailsComponent/>}/>
                    <Route path="/createEvent" element={<EventForm/>}/>

                </Routes>
            </BrowserRouter>

        </Provider>

    );
}
export default App;

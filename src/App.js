import './App.css';

import Home from "../src/Home/index.js"

import {Reducer} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";

import ConcertReducer from "./Reducers/Concert-Reducer.js";
import {Provider} from "react-redux";
import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket'

const store = configureStore({reducer:{ConcertData: ConcertReducer}})

function App() {
    return (

        <Provider store={store}>

            <div>
                <Home/>
                <AuthForm> </AuthForm>
                <EventForm></EventForm>;


            </div>

        </Provider>

    );
}
export default App;

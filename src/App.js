import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {configureStore} from '@reduxjs/toolkit';
import DetailsComponent from "./DetailsComponent";
import {Provider} from "react-redux";
import details from "./reducers/detail-reducer";

import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket'
import Profile from "./components/profile/index.js"
import Home from "./Home";
import ConcertReducer from "./reducers/Concert-Reducer";

const store = configureStore({reducer: {ConcertData: ConcertReducer, details: details}})

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

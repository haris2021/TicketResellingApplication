import 'bootstrap';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket.js'
import DetailsComponent from "./DetailsComponent/index.js"
import Profile from "./components/profile/index.js"
import Home from "../src/Home/index.js"
import EditProfile from "../src/components/profile/edit-profile.js"
import AllUserCard from "./Admin/AllUserCard/AllUserCard.js";
import ConcertReducer from "./Reducers/Concert-Reducer.js";
import details from "./Reducers/detail-reducer.js";
import reviews from "./Reducers/reviews-reducer";
import UserLoginReducer from "./Reducers/UserLogin-Reducer.js"
import UserInfoReducer from "./Reducers/UserInfo-Reducer.js";
import SearchAndImport from "./sellTicket/SearchEvents";
import MyTickets from "./components/myTickets/index.js";
import SearchComponent from './components/search';

import FollowingUserInfo from "./components/profile/FollowingUserInfo.js";
import MyTicketsComponent from './components/myTickets';
import CategoryCard from "../src/Home/CategoriesCard/index.js"
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";

const store = configureStore({
                                 reducer: {
                                     ConcertData: ConcertReducer,
                                     details: details,
                                     UserLogin: UserLoginReducer,
                                     UserInfo: UserInfoReducer,
                                     reviews: reviews
                                 }
                             })


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Home/>}/>
                    <Route path="/myTickets" element={<MyTickets/>}/>
                    <Route path="/concert" element={<CategoryCard/>}/>
                    <Route path="/otherUserInfo/:username" element={<FollowingUserInfo/>}/>
                    <Route path="/logIn" element={<AuthForm/>}/>
                    <Route path="/editProfile" element={<EditProfile/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/details/:id" element={<DetailsComponent/>}/>
                    <Route path="/createEvent" element={<EventForm/>}/>
                    <Route path="/importEvents" element={<SearchAndImport/>}/>
                    <Route path="/moreInfo" element={<AllUserCard/>}/>
                    <Route path="/search/*" element={<SearchComponent/>}/>
                    <Route path="/myTickets" element={<MyTicketsComponent/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>



    );
}

export default App;

import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {configureStore} from '@reduxjs/toolkit';
import DetailsComponent from "./DetailsComponent";
import {Provider} from "react-redux";
import details from "./reducers/detail-reducer";

const store = configureStore(
    {reducer: {details: details}});

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

function App() {
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
}

export default App;

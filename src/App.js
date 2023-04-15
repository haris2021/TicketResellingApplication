import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import {configureStore} from '@reduxjs/toolkit';
import DetailsComponent from "./DetailsComponent";
import {Provider} from "react-redux";
import details from "./reducers/detail-reducer";

const store = configureStore(
    {reducer: {details: details}});

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/details" element={<DetailsComponent/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

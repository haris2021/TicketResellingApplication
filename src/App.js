import './App.css';
import AuthForm from './login/AuthForm'
import EventForm from './sellTicket/sellTicket'
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
     <AuthForm> </AuthForm>
{/*
      <EventForm></EventForm>;
*/}
       {/* <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*"
                           element={<AuthForm/>}/>
                    <Route path="/event"
                           element={<EventForm/>}/>
                </Routes>
            </div>
        </BrowserRouter>*/}
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ProfileComponent from "./components/profile";
import 'bootstrap';
import EditProfileComponent from "./components/profile/edit-profile";
import ProfileScreen from "./components/profile/profileScreen";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/profile" element={<ProfileComponent/>}/>
                  <Route path="/profile-screen" element={<ProfileScreen/>}/>
                  <Route path="/edit-profile" element={<EditProfileComponent/>}/>
              </Routes>
          </div>

      </BrowserRouter>
  );
}

export default App;

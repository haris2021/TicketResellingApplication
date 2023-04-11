import logo from './logo.svg';
import './App.css';
import Home from "../src/Home/index.js"

import {Reducer} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";

import ConcertReducer from "./Reducers/Concert-Reducer.js";
import {Provider} from "react-redux";

const store = configureStore({reducer:{ConcertData: ConcertReducer}})

function App() {
  return (

      <Provider store={store}>

          <div >
              <Home/>
          </div>

      </Provider>

  );
}

export default App;

import React from "react";
import { useGlobalContext } from "./components/context";
import "./App.css";
import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
    return (
      <div className="App">
       <NavBar/>
       <Quiz/>
       
       <Footer/>
      </div>
    );
  }

export default App;

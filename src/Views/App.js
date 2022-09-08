import logo from "./logo.svg";
import "./App.scss";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Todos/Nav";
import DetailUser from "./Users/DetailUser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Todos/Home";
import ListUser from "./Users/ListUser";

function App() {
  return (
    <Router>

      <div className="App"> 
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ListToDo></ListToDo> */}
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<ListToDo/>}/>
          <Route path="/listUser" element={<ListUser/>}/>
          <Route path="/users/:userId" element={<DetailUser/>}/>
        </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// importing login component
import Login from "./components/Login";
//importing landing component
import Landing from "./components/Landing";

function App() {
  return (
    <>
      {/*This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for Landing component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Landing} />

          {/* This route is for Login component 
          with exact path "/Login", in component props 
          we passes the imported component*/}
          <Route exact path="/landing" component={Login} />
          {/* If any route mismatches the upper route endpoints,
         then redirect triggers and redirects app to landing component*/}
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
    // <div className="App">
    //   <Login />
    //   <Landing />
    // </div>
  );
}

export default App;

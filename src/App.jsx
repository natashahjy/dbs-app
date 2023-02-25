
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./globalStates/userState";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import ViewClaim from "./components/ViewClaim";

//Styles

import "./styles/ViewClaim.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const { userState } = useSelector((state) => state.userState.user);
  const dispatch = useDispatch(login());
  //to use the reducer functions, call dispatch(reducerfunction(userObject))
  //EXAMPLE USE:
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="viewclaim" element={<ViewClaim />} />
      </Routes>
    </div>
  );
};

export default App;

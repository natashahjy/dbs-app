
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./globalStates/userState";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import ViewClaim from "./components/ViewClaim";

import SideBarNav from "./components/SideBar.tsx";


import CreateClaimForm from "./components/CreateClaimForm"

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
        <Route path="/" element={<SideBarNav page={<Dashboard/>}></SideBarNav>}/>
        <Route path="viewclaim" element={<SideBarNav page={<ViewClaim/>}></SideBarNav>} />
        <Route path="CreateClaimForm" element={<SideBarNav page={<CreateClaimForm/>}></SideBarNav>} />
      </Routes>
    </div>
  );
};

export default App;

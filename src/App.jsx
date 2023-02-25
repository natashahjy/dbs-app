import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import ViewClaim from "./components/ViewClaim";
import { login, logout } from "./globalStates/userState";

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
    return(
        <div>
            <Dashboard />
        </div>
    );
}

export default App;
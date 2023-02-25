import { useDispatch, useSelector } from "react-redux";
import ViewClaim from "./components/ViewClaim";
import { login, logout } from "./globalStates/userState";

import "./styles/ViewClaim.css";

const App = () => {
    const { userState } = useSelector((state) => state.userState.user);
    const dispatch = useDispatch(login());
    //to use the reducer functions, call dispatch(reducerfunction(userObject))
    //EXAMPLE USE: 
    return(
        <div>
            <ViewClaim />
        </div>
    );
}

export default App;
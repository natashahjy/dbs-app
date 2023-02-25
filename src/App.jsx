import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./globalStates/userState";

const App = () => {
    const { userState } = useSelector((state) => state.userState.user);
    const dispatch = useDispatch(login());
    //to use the reducer functions, call dispatch(reducerfunction(userObject))
    //EXAMPLE USE: 
    return(
        <div>
        </div>
    );
}

export default App;
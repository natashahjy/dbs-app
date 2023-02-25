import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./globalStates/count";


const App = () => {
    const { userState } = useSelector((state) => state.userState.user);
    const dispatch = useDispatch(login());
    //to use the reducer functions, call dispatch(reducerfunction(userObject))
    //EXAMPLE USE: 
    return(
        <div>Hi</div>
    );
}

export default App;
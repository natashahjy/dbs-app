// import { useDispatch, useSelector } from "react-redux";
import TemporaryDrawer from "./components/SideBar.tsx";
import Card from '@mui/material/Card';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


import SideBarNav from "./components/SideBar.tsx";
// import { login, logout } from "./globalStates/userState";
const test = () => {
    return(
        <Typography>
            page props
        </Typography>
    )
}
const App = () => {
  // const { userState } = useSelector((state) => state.userState.user);
  // const dispatch = useDispatch(login());
  //to use the reducer functions, call dispatch(reducerfunction(userObject))
  //EXAMPLE USE:
  return (
    
    <SideBarNav page ={test()}/>
    
  );
};

export default App;

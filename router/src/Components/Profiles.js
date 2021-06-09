import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react"
import AppContext from "../AppContext";
import Profile from './Profile'

function Profiles(props) {
    const {data} = useContext(AppContext)

    const output = data.contactProfiles.map(contact => {
        return (
        <div> 
            <div>
                <li>
                <Link to={"/profiles/" + contact.firstName + contact.lastName}>
                {contact.firstName} {contact.lastName}
                </Link>
                </li>
            </div>
                <Route path="/profiles/:user" component={Profile}/>
        </div>
        )
    })
    
    //<Profile firstName={contact} />
    // push profile component

    return output
}
export default Profiles;

// contactProfiles: [
//   {
//       firstName: "Willie",
//       lastName: "Dustice",
//       birthday: "01/01/1978 00:00:00",
//       profileImage: "https://randomuser.me/api/portraits/lego/1.jpg"
//   },
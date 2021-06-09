  import { useContext } from "react"
  import AppContext from "../AppContext";
  
  function Profile(props) {
      const {data} = useContext(AppContext)
      console.log(props.match.params.user)
      if(props.match.params.user){
          const profile = data.contactProfiles.filter( user =>  (user.firstName+user.lastName) === (props.match.params.user))
          // push profile component
          const output = (
              <div>
                  <h1>{profile.firstName + profile.lastName}</h1>
                  <p>Birthday: {profile.birthday}</p>
                  <img src={profile.profileImage} alt="a user pic"></img>
              </div>
          )
      
          return output
      }
      return <><p>hi</p></>
  }
  export default Profile;
  
  // contactProfiles: [
  //   {
  //       firstName: "Willie",
  //       lastName: "Dustice",
  //       birthday: "01/01/1978 00:00:00",
  //       profileImage: "https://randomuser.me/api/portraits/lego/1.jpg"
  //   },
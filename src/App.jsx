import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

function App() {
  console.log(userData.location)
  return (
    <>
       <Profile
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />  
    </>
  );
}

export default App;

import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./FriendListItem.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;

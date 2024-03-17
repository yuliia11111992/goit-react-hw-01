import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.statusOnline}>Online</p>
      ) : (
        <p className={styles.statusOFline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;

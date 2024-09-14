import "./App.css";
import { useState } from "react";
import data from "./data.json";
function App() {
  const [notifications, setNotifications] = useState(data);
  const [counter, setCounter] = useState(
    notifications.filter((notification) => !notification.isRead).length
  );

  const read = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
    const clickedNotification = notifications.find(
      (notification) => notification.id === id
    );
    if (!clickedNotification.isRead) {
      setCounter(counter - 1);
    }
  };
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setNotifications(updatedNotifications);
    setCounter(0);
  };

  return (
    <>
      <section>
        <h2>notifications {counter}</h2>
        <p onClick={markAllAsRead} style={{ cursor: "pointer" }}>
          Mark all as read
        </p>
      </section>

      <main>
        {notifications.map((notification) => {
          return (
            <div
              key={notification.id}
              className="notification"
              style={!notification.isRead ? { backgroundColor: "green" } : {}}
              onClick={() => read(notification.id)}
            >
              <img src={notification.profilebic} />
              <span>{notification.userName}</span>
              <span>{notification.action}</span>
              {notification.post ? <span>{notification.post}</span> : null}
              {notification.groupName ? (
                <span>{notification.groupName}</span>
              ) : null}
              {notification.userPicture ? (
                <img src={notification.userPicture} />
              ) : null}
              {notification.text ? (
                <span className="text">{notification.text}</span>
              ) : null}
              {!notification.isRead ? <div className="circle"></div> : null}
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;

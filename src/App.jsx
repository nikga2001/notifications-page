import "./App.css";
import { useState } from "react";
import data from "./data.json";
function App() {
  const [notifications, setNotifications] = useState(data);

  const read = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };
  return (
    <>
      <section>
        <h2>nitifications 3</h2>
        <p>Mark all as read</p>
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

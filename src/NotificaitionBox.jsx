import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
    import { useGlobal } from './hooks/useGlobal';
import { useAuth } from './hooks/useAuth';

const NotificationBox = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const {user:userData} = useAuth();
  console.log(userData);
  useEffect(() => {
    const socket = io('http://localhost:8001'); // Replace with your backend URL

    // Notify server that the user is online
    socket.emit('userOnline', userData.id);

    // Listen for incoming notifications
    socket.on('notification', (notification) => {
      setNotifications((prev) => [notification, ...prev]);
      setUnreadCount((prev) => prev + 1); // Increment unread count
    });

    return () => {
      socket.disconnect();
    };
  }, [userData]);

  // Mark notifications as read
  const markAllAsRead = () => {
    setUnreadCount(0);
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  return (
    <div className="notification-box">
      <div className="header">
        <h3>Notifications</h3>
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
        <button onClick={markAllAsRead} className="mark-read-btn">
          Mark All as Read
        </button>
      </div>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={index}
              className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
            >
              <p>{notification.message}</p>
              <small>{notification.type}</small>
            </div>
          ))
        ) : (
          <p className="no-notifications">No notifications yet.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationBox;

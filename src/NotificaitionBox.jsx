import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useGlobal } from './hooks/useGlobal';
import { useAuth } from './hooks/useAuth';
import apiService from './services/api';
import {
  Badge,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Box,
  Divider,
  CircularProgress
} from '@mui/material';
import {
  NotificationsOutlined,
  Circle as CircleIcon,
  CheckCircleOutline,
  ErrorOutline,
  InfoOutlined,
  Close as CloseIcon
} from '@mui/icons-material';
import { toast } from 'react-hot-toast';

const NotificationBox = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const { notifications, setNotifications } = useGlobal();
  const { user: userData } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load initial notifications
  useEffect(() => {
    const loadNotifications = async () => {
      if (!userData?.id) return;
      
      setLoading(true);
      try {
        const response = await apiService.GetUserNotifications(userData.id);
        setNotifications(response.data);
        const unreadCount = response.data.filter(n => !n.isRead).length;
        setUnreadCount(unreadCount);
      } catch (error) {
        console.error('Error loading notifications:', error);
        toast.error('Failed to load notifications');
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [userData]);

  // Socket connection for real-time notifications
  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_BASE_URL);

    socket.emit('userOnline', userData.id);

    socket.on('notification', (notification) => {
      setNotifications((prev) => [{
        ...notification,
        isRead: false,
        timestamp: new Date(),
      }, ...prev]);
      setUnreadCount((prev) => prev + 1);
    });

    return () => {
      socket.disconnect();
    };
  }, [userData]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const markAllAsRead = async () => {
    try {
      await apiService.MarkAllNotificationsAsRead(userData.id);
      setNotifications(prev => 
        prev.map(notification => ({ ...notification, isRead: true }))
      );
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all as read:', error);
      toast.error('Failed to mark notifications as read');
    }
  };

  const handleNotificationClick = async (notification) => {
    if (!notification.isRead) {
      try {
        await apiService.MarkNotificationAsRead(notification._id);
        setNotifications(prev =>
          prev.map(n =>
            n._id === notification._id ? { ...n, isRead: true } : n
          )
        );
        setUnreadCount(prev => prev - 1);
      } catch (error) {
        console.error('Error marking notification as read:', error);
      }
    }
    // Handle notification click action here (e.g., navigation)
  };

  const getNotificationIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'success':
        return <CheckCircleOutline className="text-green-500" />;
      case 'error':
        return <ErrorOutline className="text-red-500" />;
      case 'warning':
        return <InfoOutlined className="text-yellow-500" />;
      default:
        return <InfoOutlined className="text-blue-500" />;
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return date.toLocaleDateString();
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton onClick={handleClick} color="inherit">
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsOutlined />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          className: 'w-80 max-h-[500px]'
        }}
      >
        <Box className="p-2">
          <div className="flex justify-between items-center mb-2 px-2">
            <Typography variant="h6" className="font-semibold">
              Notifications
            </Typography>
            {unreadCount > 0 && (
              <Button
                size="small"
                onClick={markAllAsRead}
                className="text-blue-500 hover:bg-blue-50"
              >
                Mark all as read
              </Button>
            )}
          </div>
          <Divider />
          
          <List className="p-0">
            {loading ? (
              <ListItem>
                <CircularProgress size={20} className="mx-auto" />
              </ListItem>
            ) : notifications.length > 0 ? (
              notifications.map((notification) => (
                <ListItem
                  key={notification._id}
                  className={`hover:bg-gray-50 cursor-pointer ${
                    !notification.isRead ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start space-x-2">
                    {getNotificationIcon(notification.type)}
                    <ListItemText
                      primary={
                        <Typography variant="body2" className="font-medium">
                          {notification.message}
                        </Typography>
                      }
                      secondary={
                        <div className="flex justify-between items-center">
                          <Typography variant="caption" color="textSecondary">
                            {notification.type}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {formatTimestamp(notification.createdAt)}
                          </Typography>
                        </div>
                      }
                    />
                  </div>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="text-center py-4"
                    >
                      No notifications yet
                    </Typography>
                  }
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Popover>
    </div>
  );
};

export default NotificationBox;

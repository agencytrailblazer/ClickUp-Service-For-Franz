"use strict";

module.exports = (Franz) => {
  const getMessages = () => {
    const unreadNotifications = document.querySelectorAll('.cu-notification-alert__dot');
    Franz.setBadge(0, (unreadNotifications.length >= 1) ? 1 : 0);
  }
  Franz.loop(getMessages);
}
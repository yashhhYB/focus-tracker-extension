chrome.alarms.create("focusReminder", { periodInMinutes: 5 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "focusReminder") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Focus Reminder",
      message: "Are you on task?"
    });
  }
});

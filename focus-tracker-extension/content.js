const distractingSites = ["youtube.com", "twitter.com", "instagram.com"];

const checkDistraction = () => {
  const url = window.location.href;
  for (let site of distractingSites) {
    if (url.includes(site)) {
      alert("Stay focused! This site is distracting.");
    }
  }
};

setInterval(checkDistraction, 5000);

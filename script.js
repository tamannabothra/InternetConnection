const getApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function CheckOnlineStatus() {
  let status = document.getElementById("status");
  let condition = navigator.onLine ? "ONLINE" : "OFFLINE";
  let state = document.getElementById("state");
  state.classList.add(condition);
  state.innerHTML = condition;
  let providerName = document.getElementById("providerName"); // Change to "providerName"
  let providerInfo = document.querySelector(".provider-info");

  if (condition === "ONLINE") {
    let { org } = await getApi("http://ip-api.com/json/");
    console.log(org);
    providerName.innerHTML = org;
  } else {
    providerInfo.style.display = "none";
  }

  // Update the image source and alt text based on online status
  
}

function Pageloaded() {
  CheckOnlineStatus();
}

// Add event listeners for online and offline events
window.addEventListener("online", CheckOnlineStatus);
window.addEventListener("offline", CheckOnlineStatus);

// Call CheckOnlineStatus on page load and when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  Pageloaded();
  CheckOnlineStatus();
});

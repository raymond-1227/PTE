const toggleStorageState = JSON.parse(
  localStorage.getItem("toggleStorageState")
);
const check = document.getElementById("toggle");
let currentToggleState = false;

if (toggleStorageState) {
  currentToggleState = toggleStorageState;
  check.checked = currentToggleState;
}

function setText() {
  if (currentToggleState == true) {
    document.getElementById("toggleText").textContent = "ENABLED";
  } else {
    document.getElementById("toggleText").textContent = "DISABLED";
  }
}

setText();

check.onclick = function () {
  if (this.checked) {
    currentToggleState = true;
    chrome.browserAction.setIcon({ path: "/icons/pte-32.png" });
    chrome.browserAction.setBadgeText({ text: "on" });
    chrome.browserAction.setBadgeTextColor({ color: "white" });
    chrome.browserAction.setBadgeBackgroundColor({ color: "#61b157" });
    chrome.tabs.executeScript({
      code: `document.designMode = "on"`,
    });
  } else {
    currentToggleState = false;
    chrome.browserAction.setIcon({ path: "/icons/pte-inactive-32.png" });
    chrome.browserAction.setBadgeText({ text: "off" });
    chrome.browserAction.setBadgeTextColor({ color: "white" });
    chrome.browserAction.setBadgeBackgroundColor({ color: "#db574f" });
    chrome.tabs.executeScript({
      code: `document.designMode = "off"`,
    });
  }

  setText();

  localStorage.setItem(
    "toggleStorageState",
    JSON.stringify(currentToggleState)
  );
};

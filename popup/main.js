const toggleStorageState = JSON.parse(
  localStorage.getItem("toggleStorageState")
);
const check = document.getElementById("toggle");
let currentToggleState = false;

if (toggleStorageState) {
  currentToggleState = toggleStorageState;
  check.checked = currentToggleState;
}

if (currentToggleState == true) {
  document.getElementById("toggleText").textContent = "ENABLED";
} else {
  document.getElementById("toggleText").textContent = "DISABLED";
}

check.onclick = function () {
  if (this.checked) {
    currentToggleState = true;
    browser.browserAction.setIcon({ path: "/icons/pte-32.png" });
    browser.tabs.executeScript({
      code: `document.designMode = "on"`,
    });
  } else {
    currentToggleState = false;
    browser.browserAction.setIcon({ path: "/icons/pte-inactive-32.png" });
    browser.tabs.executeScript({
      code: `document.designMode = "off"`,
    });
  }
  
  if (currentToggleState == true) {
    document.getElementById("toggleText").textContent = "ENABLED";
  } else {
    document.getElementById("toggleText").textContent = "DISABLED";
  }

  localStorage.setItem(
    "toggleStorageState",
    JSON.stringify(currentToggleState)
  );
};

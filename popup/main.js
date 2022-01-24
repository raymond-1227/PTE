document.getElementById("toggle").onclick = function () {
  if (this.checked == true) {
    document.getElementById("toggleText").textContent = "ENABLED";
    browser.browserAction.setIcon({ path: "/icons/pte-32.png" });
    browser.tabs.executeScript({
      code: `document.designMode = "on"`,
    });
  } else {
    document.getElementById("toggleText").textContent = "DISABLED";
    browser.browserAction.setIcon({ path: "/icons/pte-inactive-32.png" });
    browser.tabs.executeScript({
      code: `document.designMode = "off"`,
    });
  }
};

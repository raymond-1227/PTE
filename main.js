var nextButtonState;
browser.browserAction.onClicked.addListener(function (tab) {
  switch (nextButtonState) {
    case "turn-on":
      enable();
      break;
    case "turn-off":
    default:
      disable();
      break;
  }
});
function enable() {
  browser.tabs.executeScript({
    code: `document.designMode = "on"`,
  });
  nextButtonState = "turn-off";
}
function disable() {
  browser.tabs.executeScript({
    code: `document.designMode = "off"`,
  });
  nextButtonState = "turn-on";
}
disable(); // enable or disable by default

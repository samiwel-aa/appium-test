exports.config = {
  host: "127.0.0.1",
  port: 4723,
  services: ["appium"],
  appium: {
    command: "appium",
    args: {
      address: "127.0.0.1",
      port: 4723,
      chromedriverExecutable: "/Users/thomass3/Downloads/chromedriver"
    }
  },
  capabilities: [
    {
      platformName: "Android",
      platformVersion: "10",
      deviceName: "Android Emulator",
      automationName: "UiAutomator2",
      newCommandTimeout: 0,
      browserName: "Chrome"
    }
  ],
  specs: ["test/spec/**"],
  before: function() {
    const chai = require("chai");
    global.expect = chai.expect;
    chai.Should();
  }
};

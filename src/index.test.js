const wd = require("wd");

const opts = {
  platformName: "Android",
  platformVersion: "10",
  deviceName: "Android Emulator",
  // appActivity: ".view.TextFields",
  automationName: "UiAutomator2",
  newCommandTimeout: 0,
  browserName: "Chrome"
};

describe("BSM", () => {
  beforeAll(() => {
    jest.setTimeout(60000);
  });

  it("should launch the website", async () => {
    const driver = await wd.promiseChainRemote({
      host: "localhost",
      port: 4723
    });
    return driver
      .init(opts)
      .get("http://10.0.2.2:3001")
      .done();
  });
});

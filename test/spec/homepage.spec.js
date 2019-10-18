const { getBaseUrl } = require("../utils");

describe("BSM", () => {
  it("should launch the website", async () => {
    await browser.url(getBaseUrl(browser.capabilities.platformName));
    const pTag = await $("<p>");
    const text = await pTag.getText();
    expect(text).to.be.equal("Appium test");
  });
});

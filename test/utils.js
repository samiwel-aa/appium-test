const getBaseUrl = platformName =>
  platformName === "Android" ? "http://10.0.2.2:3001" : "http://localhost:3001";

module.exports = {
  getBaseUrl
};

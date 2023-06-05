module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);
  // Uncomment if the site uses basic authentication
  // await page.authenticate({username: "username", password: "password"});

  // disable image lazy load
  await require("./lazyImages")(page, scenario);

  // Uncomment to replace all images with a default placeholder image
  // require('./interceptImages')(page, scenario);
};

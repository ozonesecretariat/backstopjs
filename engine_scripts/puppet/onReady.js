module.exports = async (page, scenario, vp) => {
  console.log("Running scenario " + scenario.label);

  await require("./clickAndHoverHelper")(page, scenario);

  // add more ready handlers here...
};

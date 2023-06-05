// see https://www.metaltoad.com/blog/backstopjs-part-deux-javascript-config-and-makefile

const baseUrlReference = process.env.npm_package_config_baseUrl;
const baseUrlTest = process.env.npm_config_url || baseUrlReference;

const args = process.argv.slice(2);
switch (args[0]) {
  case "test":
    console.log(
      `✅ Comparing ${baseUrlTest} with reference images from ${baseUrlReference}`
    );
    break;
  case "reference":
    console.log(`✅ Saving reference images from ${baseUrlReference}`);
    break;
}

var scenarios = [];
var paths = [
  "/",
  "/ozone-timeline",
  "/resources",
  "/treaties/montreal-protocol",
  "/treaties/vienna-convention/decisions/by-meeting",
  "/news",
  "/all-ratifications",
  "/countries",
  "/countries/profile/aus",
  "/meetings",
  "/meetings/thirty-fourth-meeting-parties",
  "/meetings/fifth-extraordinary-meeting-parties-montreal-protocol/post-session-documents",
  "/science/assessment/teap",
  "/science/assessment/teap/teap-members",
  "/fund-contributions",
  "/countries/data-table",
  "/countries/data?q=countries/data-table",
];

for (var k = 0; k < paths.length; k++) {
  scenarios.push({
    label: paths[k],
    // "cookiePath": "engine_scripts/cookies.json",
    referenceUrl: baseUrlReference + paths[k],
    url: baseUrlTest + paths[k],
    readyEvent: "",
    readySelector: "",
    delay: 500,
    hideSelectors: [],
    removeSelectors: [
      "div.media--image.is-b-loading",
      "canvas.particles-js-canvas-el",
      "div.meeting-map",
    ],
    hoverSelector: "",
    //"clickSelectors": [".cookie-compliance-agree-button"],
    //"postInteractionWait": 1000,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.2,
    requireSameDimensions: true,
  });
}

module.exports = {
  id: "ozone",
  viewports: [
    {
      label: "phone",
      width: 390,
      height: 844,
    },
    {
      label: "laptop",
      width: 1280,
      height: 720,
    },
    {
      label: "desktop",
      width: 2560,
      height: 1440,
    },
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios: scenarios,
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
    headless: "new",
  },
  asyncCaptureLimit: 3,
  asyncCompareLimit: 10,
  debug: true,
  debugWindow: true,
};

const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "e2e-test-reports/cucumber_report.json",
  output: "e2e-test-reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  storeScreenshots: true,
  screenshotsDirectory: "e2e-test-reports/screenshots/",
  metadata: {
    "App Version": "2020.02.22",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);

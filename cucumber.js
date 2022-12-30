const common = [
  "e2e/features/**/login.feature",
  "--require e2e/step-definitions/**/*.js",
  "--format progress-bar",
  "--publish-quiet",
].join(" ");

module.exports = {
  default: common,
};

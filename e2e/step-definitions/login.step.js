const { After, Before, Given, Then, When } = require("cucumber");
const { Action, Config } = require("automationsy");

Before(() => {
  Config.setHeadless(true);
  Config.setDefaultTimeout(5000);
});

Given(/^O usuário visita a página "([^"]*)"$/, async (args1) => {
  await Action.navigate(args1);
});

When(/^O usuário digita o username "([^"]*)"$/, async (args1) => {
  await Action.type("#username", args1);
});

When(/^O usuário digita a senha "([^"]*)"$/, async (args1) => {
  await Action.type("#password", args1);
});

Then(/^O sistema deve retornar uma mensagem "([^"]*)"$/, async (args1) => {
  await Action.click("button");
  await Action.waitForLocator(`//div[contains(text(), '${args1}')]`);
});

After(async () => {
  await Action.closeBrowser();
});

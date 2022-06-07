const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const welcomeMessage = () => {
  return `Welcome to ${fileName()}!`;
};

/* eslint-env mocha */

const wish = require("wish");
describe("the file", () => {
  it("sets welcome message", () => {
    wish(welcomeMessage() === "Welcome to test.js!");
  });
});

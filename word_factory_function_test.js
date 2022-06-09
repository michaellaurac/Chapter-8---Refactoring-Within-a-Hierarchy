const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

const welcomeMessage = () => {
  return `Welcome to ${fileName()}!`;
};

/* eslint-env mocha */

const wish = require("wish");
// const deepEqual = require("deep-equal");
const { japaneseWordFactory, englishWordFactory } = require("./word_factory_function.js");

describe("the file", () => {
  // setup test
  it("sets welcome message", () => {
    wish(welcomeMessage() === "Welcome to word_factory_function_test.js!");
  });

  const englishWord = englishWordFactory("dog");
  const japaneseWord = japaneseWordFactory("犬");

  // interfaces tests
  it("creates a japanese word", () => {
    wish(japaneseWord.word === "犬");
    wish(japaneseWord.language === "Japanese");
    wish(japaneseWord.count() === 1);
    wish(japaneseWord.reportLanguage() === "The language is Japanese");
  });

  it("creates an english word", () => {
    wish(englishWord.word === "dog");
    wish(englishWord.language === "English");
    wish(englishWord.count() === 3);
    wish(englishWord.reportLanguage() === "The language is English");
  });

  // internals tests
  it("uses the appropriate word prototype for the japanese word", () => {
    wish(typeof japaneseWord === "object");
    console.log(Object.getPrototypeOf(japaneseWord));
  });

  it("uses the appropriate word prototype for the english word", () => {
    wish(typeof englishWord === "object");
    console.log(Object.getPrototypeOf(englishWord));
  });
});

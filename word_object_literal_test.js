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
const { japaneseWord, englishWord } = require("./word_object_literal.js");

describe("the file", () => {
  // setup test
  it("sets welcome message", () => {
    wish(welcomeMessage() === "Welcome to word_object_literal_test.js!");
  });

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
    // wish(typeof JapaneseWord === "function");
    // wish(japaneseWord instanceof JapaneseWord);
    // wish(japaneseWord instanceof Word);
    // wish(!(JapaneseWord instanceof Word));

    // wish(japaneseWord.constructor === JapaneseWord);
    // wish(Object.getPrototypeOf(JapaneseWord) === Word);
    // console.log(Object.getPrototypeOf(JapaneseWord));

    // wish(deepEqual(Object.getPrototypeOf(japaneseWord), {}));
    console.log(Object.getPrototypeOf(japaneseWord));
  });

  it("uses the appropriate word prototype for the english word", () => {
    wish(typeof englishWord === "object");
    // wish(typeof EnglishWord === "function");
    // wish(englishWord instanceof EnglishWord);
    // wish(englishWord instanceof Word);
    // wish(!(EnglishWord instanceof Word));

    // wish(englishWord.constructor === EnglishWord);
    // wish(Object.getPrototypeOf(EnglishWord) === Word);
    // console.log(Object.getPrototypeOf(EnglishWord));

    // wish(deepEqual(Object.getPrototypeOf(englishWord), {}));
    console.log(Object.getPrototypeOf(englishWord));
  });
});

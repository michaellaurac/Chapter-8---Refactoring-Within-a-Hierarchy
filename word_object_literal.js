const word = {
  count () {
    return this.word.length;
  },
  lookUp () {
    return this.lookUpUrl + this.word;
  }
};

const englishWord = Object.assign(Object.create(word), {
  word: "dog",
  language: "English",
  lookUpUrl: "http://en.wiktionary.org/wiki/"
});

const japaneseWord = Object.assign(Object.create(word), {
  word: "犬",
  language: "Japanese",
  lookUpUrl: "http://jisho.org/search/"
});

japaneseWord.prototype = word;
englishWord.prototype = word;

word.reportLanguage = function () {
  return `The language is ${this.language}`;
};

module.exports = { japaneseWord, englishWord };

const word = {
  count () {
    return this.word.length;
  },
  lookUp () {
    return this.lookUpUrl + this.word;
  }
};

const englishWordFactory = (theWord) => {
  return Object.assign(Object.create(word), {
    word: theWord,
    language: "English",
    lookUpUrl: "http://en.wiktionary.org/wiki/"
  });
};

const japaneseWordFactory = (theWord) => {
  return Object.assign(Object.create(word), {
    word: theWord,
    language: "Japanese",
    lookUpUrl: "http://jisho.org/search/"
  });
};

module.exports = { japaneseWordFactory, englishWordFactory };

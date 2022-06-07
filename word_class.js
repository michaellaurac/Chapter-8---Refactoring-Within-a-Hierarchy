class Word {
  constructor (word, language, lookUpUrl) {
    this.word = word;
    this.language = language;
    this.lookUpUrl = lookUpUrl;
  };

  count () {
    return this.word.length;
  };

  lookUp () {
    return this.lookUpUrl + this.word;
  }
};
class EnglishWord extends Word {
  constructor (word) {
    super(word, "English", "http://en.wiktionary.org/wiki/");
  };
};
class JapaneseWord extends Word {
  constructor (word) {
    super(word, "Japanese", "http://jisho.org/search/");
  };
};

module.exports = { Word, JapaneseWord, EnglishWord };

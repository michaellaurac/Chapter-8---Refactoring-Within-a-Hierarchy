const word = {
  count () {
    return this.word.length;
  },
  lookUp () {
    return this.lookUpUrl + this.word;
  }
};

const englishWord = Object.create(word);
englishWord.word = "dog";
englishWord.language = "English";
englishWord.lookUpUrl = "http://en.wiktionary.org/wiki/";

const japaneseWord = Object.create(word);
japaneseWord.word = "犬";
japaneseWord.language = "Japanese";
japaneseWord.lookUpUrl = "http://jisho.org/search/";

module.exports = { japaneseWord, englishWord };

function Word (word, language, loopUpUrl) {
  this.word = word;
  this.language = language;
  this.loopUpUrl = loopUpUrl;
  this.count = function () {
    return this.word.length;
  };
  this.lookUp = function () {
    return this.loopUpUrl + this.word;
  };
};

function EnglishWord (word) {
  Word.call(this, word, "English", "http://en.wiktionary.org/wiki/");
}

function JapaneseWord (word) {
  Word.call(this, word, "Japanese", "http://jisho.org/search/");
}

JapaneseWord.prototype = Object.create(Word.prototype);
JapaneseWord.prototype.constructor = JapaneseWord;
EnglishWord.prototype = Object.create(Word.prototype);
EnglishWord.prototype.constructor = EnglishWord;

module.exports = { Word, JapaneseWord, EnglishWord };

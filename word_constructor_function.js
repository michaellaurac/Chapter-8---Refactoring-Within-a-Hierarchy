function Word (word, language, loopUpUrl) {
  this.count = function () {
    return this.word.length;
  };
  this.lookUp = function () {
    return this.loopUpUrl + this.word;
  };
};

function EnglishWord (word) {
  Word.call(this);
  this.word = word;
  this.language = "English";
  this.loopUpUrl = "http://en.wiktionary.ord/wiki/";
}

function JapaneseWord (word) {
  Word.call(this, word, "Japanese", "http://jisho.org/search/");
  this.word = word;
  this.language = "Japanese";
  this.loopUpUrl = "http://jisho.org/search/";
}

JapaneseWord.prototype = Object.create(Word.prototype);
JapaneseWord.prototype.constructor = JapaneseWord;
EnglishWord.prototype = Object.create(Word.prototype);
EnglishWord.prototype.constructor = EnglishWord;

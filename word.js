class Word {
  constructor (word, language = "English") {
    this.word = word;
    this.language = language;
  };

  count () {
    return this.word.length;
  };
};

class EnglishWord extends Word {
  constructor (word) {
    super(word, "English");
  };

  lookUp () {
    return `http://jisho.org/search/${this.word}`;
  };
};
class JapaneseWord extends Word {
  constructor (word) {
    super(word, "Japanese");
  };

  lookUp () {
    return `http://en.wiktionary.org/wiki/${this.word}`;
  };
};

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(japaneseWord.lookUp());
console.log(englishWord.word);
console.log(englishWord.count());
console.log(englishWord.lookUp());

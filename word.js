class Word {
  constructor (word, language = "English") {
    this.word = word;
    this.language = language;
  };

  count () {
    return this.word.length;
  };

  lookUp () {
    if (this.language === "Japanese") {
      return `http://jisho.org/search/${this.word}`;
    } else {
      return `http://en.wiktionary.org/wiki/${this.word}`;
    }
  };
};

class EnglishWord extends Word {
  constructor (word) {
    super(word, "English");
  }
};
class JapaneseWord extends Word {
  constructor (word) {
    super(word, "Japanese");
  }
};

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(japaneseWord.lookUp());
console.log(englishWord.word);
console.log(englishWord.count());
console.log(englishWord.lookUp());

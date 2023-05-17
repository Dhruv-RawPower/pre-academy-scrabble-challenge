class Scrabble {
  constructor(word) {
    //As the test uses a parameter to initialize the object of Scrabble, a parameterised constructor has been provided.
    this.word = word ? word.toUpperCase() : "";
  }

  score() {
    let score = 0;
    
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i];
      
      if ('AEIOULNRST'.includes(letter)) {
        score += 1;
      } else if ('DG'.includes(letter)) {
        score += 2;
      } else if ('BCMP'.includes(letter)) {
        score += 3;
      } else if ('FHVWY'.includes(letter)) {
        score += 4;
      } else if (letter === 'K') {
        score += 5;
      } else if ('JX'.includes(letter)) {
        score += 8;
      } else if ('QZ'.includes(letter)) {
        score += 10;
      }
    }
    
    return score;
  }
}

export default Scrabble;

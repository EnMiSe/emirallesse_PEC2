function allEven(input) {
  return input.every(num => num % 2 === 0);
}

function allSameType(input) {
  return input.every((elem, _, array) => typeof elem === typeof array[0]);
}

function positiveMatrix(input) {
  return input.every(row => Array.isArray(row) && row.every(num => num > 0));
}

function allSameVowels(input) {
  const extractVowels = str => {
    const vowels = 'aeiou';
    let uniqueVowels = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (vowels.includes(char) && !uniqueVowels.includes(char)) {
        uniqueVowels += char;
      }
    }
    return uniqueVowels;
  };
  const referenceVowels = extractVowels(input[0]);
  return input.every(str => extractVowels(str) === referenceVowels);
}


module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};


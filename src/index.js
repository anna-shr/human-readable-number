module.exports = function toReadable (number) {
number = number.toString();

  let wordA;
  let wordB;
  let wordC;

  if (number == 0) {
    wordA = 'zero'
}
  if (number[number.length - 1] == 1) {
      wordA = 'one'
  }
if (number[number.length - 1] == 2) {
    wordA = 'two'
}
if (number[number.length - 1] == 3) {
    wordA = 'three'
}
if (number[number.length - 1] == 4) {
    wordA = 'four'
}
if (number[number.length - 1] == 5) {
    wordA = 'five'
}
if (number[number.length - 1] == 6) {
    wordA = 'six'
}
if (number[number.length - 1] == 7) {
    wordA = 'seven'
}
if (number[number.length - 1] == 8) {
    wordA = 'eight'
}
if (number[number.length - 1] == 9) {
    wordA = 'nine'
}
if (number == 10) {
    wordA = 'ten'
}
if (number.length === 2 && number[0] == 1 && number[1] == 1) {
    wordA = 'eleven' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 2) {
    wordA = 'twelve' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 3) {
    wordA = 'thirteen' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 4) {
    wordA = 'fourteen' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 5) {
    wordA = 'fifteen' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 6) {
    wordA = 'sixteen' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 7) {
    wordA = 'seventeen' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 8) {
    wordA = 'eighteen' 
}
if (number.length === 2 && number[0] == 1 && number[1] == 9) {
    wordA = 'nineteen' 
}
if (number.length === 2 && number[0] == 2) {
    wordB = 'twenty ' 
}
if (number == 20) {
    wordB = 'twenty'
}
if (number.length === 2 && number[0] == 3) {
    wordB = 'thirty ' 
}
if (number == 30) {
    wordB = 'thirty'
}
if (number.length === 2 && number[0] == 4) {
    wordB = 'forty ' 
}
if (number == 40) {
    wordB = 'forty'
}
if (number.length === 2 && number[0] == 5) {
    wordB = 'fifty ' 
}
if (number == 50) {
    wordB = 'fifty'
}
if (number.length === 2 && number[0] == 6) {
    wordB = 'sixty ' 
}
if (number == 60) {
    wordB = 'sixty'
}
if (number.length === 2 && number[0] == 7) {
    wordB = 'seventy ' 
}
if (number == 70) {
    wordB = 'seventy'
}
if (number.length === 2 && number[0] == 8) {
    wordB = 'eighty ' 
}
if (number == 80) {
    wordB = 'eighty'
}
if (number.length === 2 && number[0] == 9) {
    wordB = 'ninety ' 
}
if (number == 90) {
    wordB = 'ninety'
}
if (number === 100) {
    wordA = 'one hundred'
}




if (number.length === 3 && number[0] == 1) {
    wordC = 'one hundred ' 
}
if (number.length === 3 && number[0] == 2) {
    wordC = 'two hundred ' 
}
if (number.length === 3 && number[0] == 3) {
    wordC = 'three hundred ' 
}
if (number.length === 3 && number[0] == 4) {
    wordC = 'four hundred ' 
}
if (number.length === 3 && number[0] == 5) {
    wordC = 'five hundred ' 
}
if (number.length === 3 && number[0] == 6) {
    wordC = 'six hundred ' 
}
if (number.length === 3 && number[0] == 7) {
    wordC = 'seven hundred ' 
}
if (number.length === 3 && number[0] == 8) {
    wordC = 'eight hundred ' 
}
if (number.length === 3 && number[0] == 9) {
    wordC = 'nine hundred ' 
}


if (number.length === 3 && number[1] == 2) {
    wordB = 'twenty ' 
}
if (number.length === 3 && number[1] == 3) {
    wordB = 'thirty ' 
}
if (number.length === 3 && number[1] == 4) {
    wordB = 'forty ' 
}
if (number.length === 3 && number[1] == 5) {
    wordB = 'fifty ' 
}
if (number.length === 3 && number[1] == 6) {
    wordB = 'sixty ' 
}
if (number.length === 3 && number[1] == 7) {
    wordB = 'seventy ' 
}
if (number.length === 3 && number[1] == 8) {
    wordB = 'eighty ' 
}
if (number.length === 3 && number[1] == 9) {
    wordB = 'ninety ' 
}


if (number.length === 3 && number[2] == 0 && number[1] == 9) {
    wordB = 'ninety';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 8) {
    wordB = 'eighty';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 7) {
    wordB = 'seventy';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 6) {
    wordB = 'sixty';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 5) {
    wordB = 'fifty';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 4) {
    wordB = 'forty';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 3) {
    wordB = 'thirty';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 2) {
    wordB = 'twenty';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 0 && number[1] == 1) {
    wordB = 'ten';
    wordA = undefined;
}



if (number.length === 3 && number[2] == 1 && number[1] == 1) {
    wordB = 'eleven';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 2 && number[1] == 1) {
    wordB = 'twelve';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 3 && number[1] == 1) {
    wordB = 'thirteen';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 4 && number[1] == 1) {
    wordB = 'fourteen';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 5 && number[1] == 1) {
    wordB = 'fifteen';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 6 && number[1] == 1) {
    wordB = 'sixteen';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 7 && number[1] == 1) {
    wordB = 'seventeen';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 8 && number[1] == 1) {
    wordB = 'eighteen';
    wordA = undefined;
}
if (number.length === 3 && number[2] == 9 && number[1] == 1) {
    wordB = 'nineteen';
    wordA = undefined;
}


if (number.length === 3 && number[1] == 0) {
    wordB = undefined;
}


if (number.length === 3 && number[1] == 0 && number[2] == 0) {
    wordB = undefined;
    wordA = undefined;
}



if (wordB == undefined && wordC == undefined) {
    return wordA;
}
if (wordA == undefined && wordC == undefined) {
    return wordB;
}
if (wordA == undefined && wordB == undefined) {
    return wordC.trim();
}
if (wordC == undefined && wordA != undefined && wordB != undefined) {
    return wordB + wordA;
}
if (wordC != undefined && wordA == undefined && wordB != undefined) {
    return wordC + wordB;
}
if (wordC != undefined && wordB == undefined && wordA != undefined) {
    return wordC + wordA;
}

else {
return wordC + wordB + wordA;
}
}

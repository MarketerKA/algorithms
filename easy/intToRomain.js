var romanToInt = function (s) {

  let dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i] + s[i + 1]]) {
      result += dict[s[i] + s[i + 1]];
      i++;
    } else {
      result += dict[s[i]];
    }
  }
  return result;
};

console.log(romanToInt("I"));
module.exports = romanToInt;

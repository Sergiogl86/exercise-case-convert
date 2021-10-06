const kebabCase = function (frase) {
  const outFrase = [];

  outFrase.push(frase[0]);

  if (typeof frase !== "string" || frase.length === 0 || frase[0] === " ") {
    return "You must provide some text";
  }

  for (let i = 1; i < frase.length; i++) {
    if (frase[i] === frase[i].toUpperCase) {
      return "The text contains capital letters";
    }
    if (frase[i] === "_") {
      return "The text contains capital letters";
    }
    if (frase[i] !== "-") {
      outFrase.push(frase[i]);
    } else {
      i += 1;
      outFrase.push(frase[i].toUpperCase());
    }
  }

  return outFrase.join("");
};

console.log(kebabCase("el-pedo-de-mi-casa"));

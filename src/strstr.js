const strstr = (str, substring) => {
  if (str === '' || substring === '') {
    return -1;
  }

  if (str.length < substring.length) {
    return -1;
  }

  if (str.length === 0 || substring.length === 0) {
    return -1;
  }

  str = str.trim().toLowerCase();
  substring = substring.trim().toLowerCase();

  let matchedAt = -1;
  let matchCount = 0;
  let j = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === substring[j]) {
      if (matchedAt === -1) {
        matchedAt = i;
      }

      j += 1;

      if (j === substring.length) {
        break;
      }
    } else {
      j = 0;
      matchedAt = -1;
    }
  }

  return matchedAt;
}

console.log(strstr('California is not the Catskylls', 'Cat'));
console.log(strstr('Live in Catalonia because it is nice.', 'Cat'));
console.log(strstr('cat is not dog', 'cat'));

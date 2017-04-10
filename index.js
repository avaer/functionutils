function sum(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i];
  }
  return result;
}

function avg(a) {
  if (a.length > 0) {
    return sum(a) / a.length;
  } else {
    return 0;
  }
}

module.exports = {
  sum,
  avg,
};

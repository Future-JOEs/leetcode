function luckArr(n, staffIds) {
  let res = [];
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * staffIds.length);
    res.push(staffIds.slice(random, 1));
  }
  return res;
}

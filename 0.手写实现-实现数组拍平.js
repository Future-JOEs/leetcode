const flatten = (list, level = +Infinity) => {
  let res = list;
  for (let i = 0; i < level; i++) {
    res = [].concat(...res);
    if (!res.some(item => Array.isArray(item))) break;
  }
};

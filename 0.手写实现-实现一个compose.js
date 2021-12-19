// 实现一个compose

function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 3;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);

// 解答
function compose() {
  const argFnList = [...arguments];

  return num => {
    return argFnList.reduce((total, cur) => cur(total), num);
  };
}

const res = a(1);
console.log(res);

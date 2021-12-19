Function.prototype.myCall = function(context, ...args) {
  const context = context || window;
  args = args ? args : [];

  const key = Symbol();
  context[key] = this;
  const result = context[key];
  context[key](...args);
  //删除添加的属性
  delete context[key];
  //返回函数调用的返回值
  return result;
};

Function.prototype.myApply = function(context, args) {
  const context = context || window;
  if (!Array.isArray(args)) {
    console.warn('args is not a array');
  }
  const key = Symbol();
  context[key] = this;
  context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  args = args ? args : [];
  return function newFn(...newFnArgs) {
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs);
    }
    return fn.apply(context, [...args, ...newFnArgs]);
  };
};

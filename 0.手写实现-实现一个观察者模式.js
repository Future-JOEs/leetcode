class TargetObj {
  constructor(age, name) {
    this.name = name;
    this.age = age;
  }
}

let targetObj = new TargetObj(1, 'Martin');

let observerProxy = new Proxy(targetObj, {
  set(target, property, value, reciever) {
    if (property === 'name') {
      observer(target[property], value);
    }

    Reflect.set(target, property, value, reciever);
  },
});
// 定义值改变时的处理函数
function observer(oldVal, newVal) {
  // 其他处理逻辑...
  console.info(`name属性的值从 ${oldVal} 改变为 ${newVal}`);
}

observerProxy.name = 'Lucas';
console.info(targetObj);

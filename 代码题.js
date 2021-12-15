// 实现一个compose

const { address } = require('@umijs/utils');

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

// 实现柯里化

function currying(fn, ...args) {
  const originFnArgumentLength = fn.length;
  let allArgs = [...args];

  const resFn = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs];
    if (allArgs.length === originFnArgumentLength) {
      return fn(...allArgs);
    } else {
      return resFn;
    }
  };

  return resFn;
}

const add = (a, b, c) => a + b + c;

const a1 = currying(add, 1);
const a2 = a1(2);
console.log(a2(3)); //6

// 题目需求 koa -> 洋葱模型
let middleware = [];
middleware.push(next => {
  console.log(1);
  next();
  console.log(1.1);
});

middleware.push(next => {
  console.log(2);
  next();
  console.log(2.1);
});

middleware.push(next => {
  console.log(3);
  next();
  console.log(3.1);
});

let fn = compose(middleware);
fn();

function compose(middlewares) {
  const copyMiddlewares = [...middlewares];
  let index = 0;

  const fn = () => {
    if (index >= copyMiddlewares.length) {
      return;
    }
    const middleware = copyMiddlewares[index];
    index++;
    return middleware(fn);
  };

  return fn;
}

// 实现Event-bus

class EventEmitter {
  constructor(maxListenters) {
    this.events = {};
    this.maxListenters = maxListenters || Infinity;
  }

  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.warn(`${event} event is not registered`);
      return this;
    }
    cbs.foreach(cb => cb.apply(this, args));
    return this;
  }
  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    if (
      this.maxListenters !== Infinity &&
      this.events[event].length >= this.maxListenters
    ) {
      console.warn('add has reached maxListeners');
    }

    this.events[event].push(cb);
    return this;
  }
  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.apply(this, ...args);
    };

    this.on(event, func);
    return this;
  }
  off(event, cb) {
    if (!cb) {
      this.events[event] = null;
    } else {
      this.events[event] = this.events[event].filter(item => item !== cb);
    }
    return this;
  }
}

const event = new EventEmitter();
const add = (a, b) => console.log(a, b);
const log = (...args) => console.log(...args);
event('add', add);
event('log', log);
event.emit('add', 1, 2);
event.emit('log', 'hi');
event.off('add');
event.once('once', 1, 2);
event.once('once', 1, 2);

// 实现一个promise.all
const pro1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('1');
  }, 1000);
});

Promise.prototype.myAll = function() {
  // 错误
  // 静态方法不是挂载在原型上的
  // 实例方法是通过new出来的实例调用的
};

// 1. Promise.all 上声明
Promise.myAll = function(promiseArray) {
  //2.return promise
  return new Promise(function(resolve, reject) {
    //3. 参数类型判断
    if (!Array.isArray(promiseArray)) {
      return reject(new TypeError('arguments must be array'));
    }

    const promiseNum = promiseArray.length;
    const resArr = [];
    const counter = 0;

    for (let i = 0; i < promiseNum; i++) {
      //4. 数组元素类型
      Promise.resolve(promiseArray[i])
        .then(value => {
          //5. 不能用push 会造成返回数据的混乱
          res[i] = value;
          if (counter === promiseNum) {
            resolve(res);
          }
        })
        .catch(e => {});
    }
  });
};


class PromiseQueue {
  constructor(options={}){
    this.concurrency = options.concurrency ||1；
    this.currentCount = 0;
    this.pendingList = [];
  }

  add(task){
    this.pendingList.push(task);
    this.run()
  }

  run(){
    if(this.pendingList.length===0){
      return;
    }
    if(this.concurrency === this.currentCount){
      return;
    }
    this.currentCount++;
    const { fn } = this.pendingList.sort((a,b)=>b.priotity - a.proiority).shift();
    const promise = fn();
    promise(this.completeOne.bind(this)).catch(this.completeOne.bind(this))
  }

  completeOne(){
    this.currentCount--;
    this.run()
  }

}

const q = new PromiseQueue({
  concurrency:3
})

const highPriotity = [{info:'link1',priotity:3}];



// 原型链式继承
// 将父类的实例作为子类的原型
function SuperType(){
  this.name = 'superType'
}

function SubType(){
  this.name = 'subType'
}

SubType.prototype = new SuperType();

// 构造函数继承
// 在子类型的构造函数内部调用父类型的构造函数
// 父类
function SuperType (name) {
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType () {
  // 调用 SuperType 构造函数
  SuperType.call(this, 'SuperType'); // 在子类构造函数中，向父类构造函数传参
  // 为了保证子父类的构造函数不会重写子类的属性，需要在调用父类构造函数后，定义子类的属性
  this.subName = "SubType"; // 子类属性
};
// 子类实例
let instance = new SubType(); // 运行子类构造函数，并在子类构造函数中运行父类构造函数，this绑定到子类

// 组合继承
// 使用原型链继承对原型属性和方法的继承，通过构造函数继承来实现对实例属性的继承
// 父类
function SuperType (name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};


// 子类
function SubType (name, subName) {
  // 调用 SuperType 构造函数
  SuperType.call(this, name); // ----第二次调用 SuperType----
  this.subName = subName;
};


SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;// 组合继承需要修复构造函数指向

// 寄生组合式继承
// 借用 构造函数 继承 属性 ，通过 原型链的混成形式 来继承 方法
// 父类
function SuperType (name) {
  this.colors = ["red", "blue", "green"];
  this.name = name; // 父类属性
}
SuperType.prototype.sayName = function () { // 父类原型方法
  return this.name;
};

// 子类
function SubType (name, subName) {
  // 调用 SuperType 构造函数
  SuperType.call(this, name); // ----第二次调用 SuperType，继承实例属性----
  this.subName = subName;
};

// ----第一次调用 SuperType，继承原型属性----
SubType.prototype = Object.create(SuperType.prototype)

SubType.prototype.constructor = SubType; // 注意：增强对象

let instance = new SubType('An', 'sisterAn')

// 实现ob watch

var targetObj = {
  age:1
}

// 定义值改变时的处理函数
function observer(oldVal,newVal){
  console.log(oldVal,newVal)
}

function listenObj(targetObj){
  Object.keys().forEach(i=>Object.defineProperty(targetObj,i,{
    enumerable:true,
    configurable:true,
    set: function(val){
      observer(obj[i],val);
      obj[i]=val
    }
  }))
}
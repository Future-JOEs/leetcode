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

function debounce(fn, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    let args = arguments;
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let timer = null;
  return function() {
    let args = arguments;
    if (!timer) {
      timer = setTimeout(()=>{
        fn.apply(this,args)
      }, delay);
    }
  };
}

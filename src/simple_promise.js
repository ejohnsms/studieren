function SimplePromise(callback) {
  let impl = callback;

  function then(resolve, reject) {
    var re = resolve,
        rj = reject;
    impl.call(impl, re, rj);

    return resolve();
  }
  return {
    then: then
  }
}

const threeSecondTask = (msg) => {
    return new SimplePromise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${msg} and everything looks good.`);
//             reject(`${msg} and the oven was too hot. :-/`);
        }, 3000);
    })
}

threeSecondTask('the cookies are done').then((result) => {
    console.log(result);
}, (reason) => {
    console.log(reason);
})

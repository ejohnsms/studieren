function SimplePromise(callback) {
  // the callback is the anonymous function
  // wraps the timeout
  function then(resolve, reject) {
    // resolve and reject are anonymous
    // functions that are passed as artguments
    // to the original anonymous function that
    // wraps the timeout
    callback.call(callback, resolve, reject);
    // then is saying, "call resolve or reject
    // where the action is taking place
    // the result and reason are arguments
    // passed to their respective functions
  }

  // then is returned
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

const threeSecondTask = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${msg} and everything looks good.`);
            // reject(`${msg} and the oven was too hot. :-/`);
        }, 3000);
    })
}

threeSecondTask('the cookies are done').then((result) => {
    console.log(result);
}, (reason) => {
    console.log(reason);
})

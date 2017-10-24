const oneSecondTask = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success: ' + msg);
            // reject('failure' + msg);
        }, 1000);
    })
}

oneSecondTask('the cookies are done').then((result) => {
    console.log(result);
}, (reason) => {
    console.log(reason);
})

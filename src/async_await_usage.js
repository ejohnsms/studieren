const oneSecondTask = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success: ' + msg);
            // reject('failure' + msg);
        }, 1000);
    })
}

const getAsyncMsg = async () => {
    const theResult = await oneSecondTask('the cake is done!');

    console.log(theResult);
}

getAsyncMsg()

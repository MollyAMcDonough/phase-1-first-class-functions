function receivesAFunction (cb) {
    cb();
}

function returnsANamedFunction () {
    return function named () {
        console.log('printed some more stuff');
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log('printed some stuff');
    }
}
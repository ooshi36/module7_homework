function keys(objTest) {
    for (let key in objTest) {
        if (objTest.hasOwnProperty(key)) {
            console.log(key);
            console.log(objTest[key]);
        }
    }
}
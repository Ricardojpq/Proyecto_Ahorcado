function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
}

function getById(idStr){
    if(isString(idStr)){
        return document.getElementById(idStr);
    }
}

function getRandomNumber(numMin,numMax){
    const amplitude = numMax - numMin;
    const randomNumber = Math.floor(Math.random() * amplitude)+numMin;
    return randomNumber;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(stringArray, eventName) {
    const msgArray = [];
    for (i=0; i<stringArray.length; i++) {
        msgArray[i]=`Thank you, ${stringArray[i]}, for the awesome ${eventName} gift!`;
    }
    return msgArray;
}

console.log(writeCards(gifts, 'birthday'));

function countDown(n) {
    while(n>=0) {
        console.log(n);
        n--;
    }
}
countDown(4);
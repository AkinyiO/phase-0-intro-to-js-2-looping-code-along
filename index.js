// //const names = (["Guadalupe","Ollie","Aki"], "surprise");

function writeCards(names, event){
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
} 
writeCards(cards);

let count = 10

function countDown(count) {
    while(count >= 0) {
        console.log(count--)
    }
}

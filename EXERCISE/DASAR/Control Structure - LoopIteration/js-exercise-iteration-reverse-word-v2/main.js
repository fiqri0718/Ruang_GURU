function reverseUnique(word) {

    let hasilrbh="";

    for(let i= word.length-1;i>=0;i--){

        if(word[i]!==word[i-1]){
            hasilrbh=hasilrbh+word[i];
        }
    }

    return hasilrbh;
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
function checkPresenceCharInWord(word, lstCharExclude){
    let isCheck = false;
    for(const key in lstCharExclude){
        isCheck = word.includes(lstCharExclude[key]);
        if(isCheck) break;
    }
    return isCheck;
}
let lstCharExclude = "ÊÎÌÐÃÍ".toUpperCase().split('');
console.info(lstCharExclude);
let lstWordItems = document.getElementsByClassName('word-item');
Array.prototype.forEach.call(lstWordItems, wordItem => {
    let word = wordItem.innerText.split(' ')[1].trim();
    let isPresenceChar = checkPresenceCharInWord(word.toUpperCase(), lstCharExclude);
    if(isPresenceChar){
        wordItem.style.textDecoration = "line-through";
        wordItem.style.visibility='hidden';
    }
    //console.info(`${word}: ${isPresenceChar}`);
});
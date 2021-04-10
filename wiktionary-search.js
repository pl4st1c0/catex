const fetch = require('node-fetch');
const randomWords = require('random-spanish-words');

const word = randomWords();
console.log(word);

(async () => {
  try {
    const res = await fetch('https://es.wiktionary.org/w/api.php?titles='+word+'&action=query&prop=extracts&format=json&explaintext=true');
    const parsedRes = await res.json();
    for(var page in parsedRes.query.pages) {
        var eList = parsedRes.query.pages[page].extract.split("\n");
        var theWord = false;
        var extract = '';
        
        for(var i=0 ; i < eList.length ; i++ ) {
            if(eList[i].substring(0,1) == "1") {
                theWord = true;
                
                if(eList[i].length > 1) extract += eList[i].substring(2) + "\n"
            } else if(theWord) {
                if(eList[i].substring(0,3) == "===" || !eList[i].trim().length) break;
                
                extract += eList[i] + "\n"
            }
        }
        
        console.log(extract)
    }
  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();
const googleDictionaryApi = require("google-dictionary-api")
const randomWords = require('random-words');


googleDictionaryApi.search(randomWords()).then((results) => {
    (async () => { 
        //no entiendo porqué siempre me tira undefined phonetic :(
        //hice validaciones también y blah
        console.log(results[0].phonetic);
        console.log(results[0].meaning.noun[0].definition)
    
    })();
    
}).catch(error=>{
    console.log(error)
  });
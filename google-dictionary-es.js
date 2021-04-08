const fetch = require('node-fetch');
const randomWordsEsp = require('random-spanish-words');

fetch(`https://api.dictionaryapi.dev/api/v2/entries/es/${randomWordsEsp()}`)
    .then(res => res.json())
    .then(json => console.log(`${json[0].word}: ${json[0].meanings[0].definitions[0].definition}`))
    .catch(err =>  console.log(err));
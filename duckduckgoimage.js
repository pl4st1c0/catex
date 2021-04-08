'use strict';

const { image_search , image_search_generator } = require('duckduckgo-images-api')
const terminalImage = require('terminal-image');
const got = require('got');
//const randomWords = require('random-words');
const randomWordsEsp = require('random-spanish-words');

console.log('buscando "' + randomWordsEsp() + '"...')
image_search({ query: randomWordsEsp() }).then((results) => {
    (async () => {
        //'https://sindresorhus.com/unicorn'
    	const body = await got(results[0]['image']).buffer();
    	console.log(await terminalImage.buffer(body));
        console.log(results[0]['image']);
    })();
    
});
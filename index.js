'use strict';
const Catex = require('./catex.js');

var word = Catex.randomWord();

var image = Catex.searchDuck(word);

var text = Catex.searchWiktionary(word);

Catex.printTextOnImage(text, image);

Catex.displayImage(image);
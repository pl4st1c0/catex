const terminalImage = require('terminal-image');
var Jimp = require("jimp");
const randomWords = require('random-spanish-words');

var imageCaption = randomWords() + "\n" + randomWords() + "\n" + randomWords();

var fileName = 'test.png';
var loadedImage;

Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    })
    .then(function (font) {
        imageCaption = imageCaption.split("\n");
        for(var i=0 ; i < imageCaption.length ; i++) {
            loadedImage.print(font, 10, 35*i, imageCaption[i]).write("test-with-text.png");
        }
                   
       (async () => {
            console.log(await terminalImage.file('test-with-text.png', {width: '50%', height: '50%'}));
       })();
    })
    .catch(function (err) {
        console.error(err);
    });

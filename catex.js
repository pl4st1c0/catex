'use strict';

exports.randomWord = function() {
  console.log("produciendo palabra random...");
  return "falso";
}

exports.searchDuck = function(word) {
  console.log("buscando '"+word+"' en duckduckgo images...");
  return "imagen falsa";
}

exports.searchWiktionary = function(word) {
  console.log("buscando '"+word+"' en wiktionary...");
  return "texto falso";
}

exports.printTextOnImage = function(text, image) {
  console.log("imprimendo '"+text+"' en imagen '"+image+"'...");
}

exports.displayImage = function(image) {
  console.log("mostrando imagen '"+image+"' en pantalla...");
}


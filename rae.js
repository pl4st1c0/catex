
const RaeClient = require('./node_modules/rae/build/lib.js');

RaeClient.create()
  .search('casa')
  .then((result) => {
    console.log(result);
  });
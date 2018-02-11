// The path module is used for building a path from
// the compile.js to the Inbox.sol file
// NOTE: Using 'path' module enables cross platform compatibility
const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Path to the .sol file
// NOTE: __dirname is a variable which points to the current workind directory
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// Read in the contents of the file
const source = fs.readFileSync(inboxPath, 'utf8');

// Export compile contract to make it available
// NOTE: The 2nd argument is the number of contracts being compiled
//console.log(solc.compile(source, 1));
module.export = solc.compile(source, 1).contracts[':Inbox'];

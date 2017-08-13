// const util = require('util')
// require('child_process').spawn('clip').stdin.end(util.inspect("content_for_the_clipboard")); // for Windows
// check os for clipboard?

const unicodeConverter = (direction, arr) => {
  direction = direction.toLowerCase()
  if (direction === 's' || direction === 'string') {
    // copy to clipboard
    console.log('Your string is:', arr.map(code => String.fromCharCode(code)).join(''))
  } else if (direction === 'u' || direction === 'unicode') {
    // copy to clipboard
    console.log('Your unicode values are:', arr.join(' ').split('').map(char => char.charCodeAt(0)).join(' '))
  } else {
    console.log("Invalid parameter - please choose 's' for unicode -> string conversion and c for string -> unicode conversion.")
  }
}

unicodeConverter(process.argv[2], process.argv.slice(3))

module.exports = unicodeConverter // available externally for testing and profit

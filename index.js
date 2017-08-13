// const util = require('util')
// require('child_process').spawn('clip').stdin.end(util.inspect("content_for_the_clipboard")); // for Windows
// check os for clipboard?

const unicodeConverter = (direction, arr) => {
  console.log({direction, arr});
  str = arr.join(' ').split('') // makes the sliced remainder of the process.argv array into a string where array entries are space-separated, then splits this string into individual array entries.
  if (direction.toLowerCase() === 's') {
    // copy to clipboard
    console.log('Your string is:', str.map(code => String.fromCharCode(code)).join(''))
  } else if (direction.toLowerCase() === 'c') {
    // copy to clipboard
    console.log('Your unicode values are', str.map(char => char.charCodeAt(0)).join(' '))
  } else {
    console.log("Invalid parameter - please choose 's' for unicode -> string conversion and c for string -> unicode conversion.")
  }
}

unicodeConverter(process.argv[2], process.argv.slice(3))

module.exports = unicodeConverter // available externally

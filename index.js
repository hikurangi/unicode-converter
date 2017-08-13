// const util = require('util')
// require('child_process').spawn('clip').stdin.end(util.inspect("content_for_the_clipboard")); // for Windows
// check os for clipboard?

const unicodeConverter = (direction, arr) => {
  direction = direction.toLowerCase()
  if (direction === 's' || direction === 'string') {
    // copy to clipboard
    let outputString = arr.map(code => String.fromCharCode(code)).join('')
    console.log('Your string is: "' + outputString + '"\nIt\'s now on your clipboard!')
  } else if (direction === 'u' || direction === 'unicode') {
    // copy to clipboard
    let outputUnicode = arr.join(' ').split('').map(char => char.charCodeAt(0)).join(' ')
    console.log('Your unicode values are:\n' + outputUnicode + '\nThey\'re now on your clipboard!')
  } else {
    console.log("Invalid parameter - please choose 's'/'string' for unicode -> string conversion and 'u'/'unicode' for string -> unicode conversion.")
  }
}

unicodeConverter(process.argv[2], process.argv.slice(3))

module.exports = unicodeConverter // available externally for testing and profit

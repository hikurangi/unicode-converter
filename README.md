# unicode-converter
### *a super minimal bidirectional CLI unicode converter made with Node.js.*

1. Clone and cd: `git clone https://github.com/hikurangi/unicode-converter.git && cd unicode-converter`

2. Queries are made using a) your package manager of choice (npm or yarn), b) a command line argument specifying the *output* you'd like: `s`, `string`, or `u`, `unicode` depending on whether you want to convert from unicode values to a string or vice versa.

Examples are:
```bash
yarn start unicode My String # => Your unicode values are: 77 121 32 83 116 114 105 110 103
```
or
```bash
npm start s 77 121 32 83 116 114 105 110 103 # => Your string is: My String
```
As you can see, quotes and escapes are unnecessary if you're using spaces. We handle that. Anything after the first parameter is

3. See the conversion result before your very eyes!

4. _**in progress**_: Your result is on your clipboard in macOS, Windows or Linux!

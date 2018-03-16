# Stringme

This is a wrapper of JSON stringify that converts also undefined and null to string.

<br/>
<a href="https://travis-ci.org/fabioricali/stringme" target="_blank"><img src="https://travis-ci.org/fabioricali/stringme.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<br/><br/><br/>

## Installation
```
npm install --save stringme
```

## Usage
```javascript

const stringme = require('stringme');

stringme(undefined); // "undefined"
stringme(null); // "null"
stringme({a:1}); // {"a":1}
stringme(new Date()); // "2018-03-11T12:48:46.252Z"

// Remove quotes
stringme(null, {quotes: false}); // null

// JSON stringify params see https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
stringme({an:'object'}, {replace: null, space: 2});
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/stringme/blob/master/CHANGELOG.md">here</a>

## License
Stringme is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>
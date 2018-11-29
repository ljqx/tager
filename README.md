# Tager
A bunch of helpful tags for [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Install
```
npm install tager
```
## API

### crlf => string

```js
crlf`multi
line
string
`
// => 'multi\r\nline\r\nstring\r\n'
```
### identity => string

```js
identity`${1} template string`
// => 1 template string
// same as `${1} template string`
```
### lf => string

```js
lf`multi
line
string
`
// => 'multi\nline\nstring\n'
```
### lines => string[]

```js
lines`multi
line
string
`;
// => ['multi', 'line', 'string', '']
```
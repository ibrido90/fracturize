#Fracturize
![Fracturize Logo](fracturize.png)
##Installing
        npm install https://github.com/ibrido90/fracturize.git
        npm install fracturize
##Test
        npm test
##Usage
```js
var Fraction = require('fracturize')

var a = new Fraction(1,2)
console.log(a) //prints 1/2
var b = new Fraction(5,2)
console.log(b) //prints 5/2
var c = new Fraction(b,a)
console.log(c) //prints 5/1
var c = new Fraction(a,b)
console.log(c) //prints 1/5
var one = new Fraction()
console.log(one) //prints 1/1

var wrong = new Fraction(1,0) -> Error
```
*Fraction* accept 0,1(just numerator) or 2(numerator,denominator) arguments. This could be at their times Fraction objects or numbers

**Note:** Fraction objects *always* simplify on creation:
```js
new Fraction(10,5) // 2/1
```
###Operations

####Sum
```js
a.sum(b) // a + b -> 3/1
```
####Subtraction
```js
a.sub(b)) // a - b -> -2/1
```
####Multiply
```js
a.mul(b) // a * b -> 5/4
```
####Division
```js
a.div(b) // a / b -> 1/5
```
###Conversion
You can convert a Fraction object to its relative value by executing it
```js
console.log(a.exec()) // num / den -> prints 0.5
```
or to its string rappresentation with
```js
a.toString() // -> "1/2"
```
###Utilities
####Maximum
```js
Fraction.max(a,b).toString() // MAX(a,b) -> prints 5/2
```
####Minimum
```js
Fraction.min(a,b).toString() // MAX(a,b) -> prints 1/2
```
####isBetween
```js
c.isBetween(a,b)// a < c < b  -> false
one.isBetween(a,b)// a < one < b  -> true
```

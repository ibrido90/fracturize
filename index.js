function Fraction(num, den) {
    if (typeof num === "undefined" && typeof den === "undefined") {
        this.num = 1
        this.den = 1
    }
    else if (typeof den === "undefined") {
        this.num = num
        this.den = 1
    }
    else {
        this.num = num,
        this.den = den
    }

    if (typeof num == "object" && typeof den == "number") {
        //(5/2)/4 -> 5/2 * 1/4 -> 5/8
        this.num = num.num
        this.den = num.den * this.den
    }
    else if (typeof num == "number" && typeof den == "object") {
        //5/(3/2) -> 5 * 2/3 -> 10/3
        this.num = this.num * den.den
        this.den = den.num
    }
    else if (typeof num == "object" && typeof den == "object") {
        //(5/3)/(3/2) -> 5/3 * 2/3 -> 10/9
        this.num = num.num * den.den
        this.den = num.den * den.num
    }

    if (this.den < 0 && this.num >= 0) {
        this.den *= -1
        this.num *= -1
    }
    else if (this.den < 0 && this.num < 0) {
        this.den *= -1
        this.num *= -1
    }

    this.simplyfy()

}
Fraction.prototype.simplyfy = function () {
    var a = this.num
    var b = this.den
    if (a < 0)
        a = a * (-1)
    if (b < 0)
        b = b * (-1)
    var max = a
    var min = b
    if (a < b) {
        max = b
        min = a
    }
    while (min != 0) {
        var t = min
        min = max % min
        max = t
    }
    if (max > 1) {
        this.num /= max
        this.den /= max
    }
}
Fraction.prototype.toString = function () {
    return this.num + "/" + this.den
}

Fraction.prototype.sum= function (second) {
    var x = new Fraction((this.num * second.den) + (second.num * this.den), this.den * second.den)
    x.simplyfy()
    return x
}
Fraction.prototype.sub = function (second) {
    var x = new Fraction((this.num * second.den) - (second.num * this.den), this.den * second.den)
    x.simplyfy()
    return x
}
Fraction.prototype.mul = function (second) {
    var x = new Fraction((this.num * second.num), (this.den * second.den))
    x.simplyfy()
    return x
}
Fraction.prototype.div = function (second) {
    var x = new Fraction(this, second)
    x.simplyfy()
    return x
}
Fraction.prototype.isBetween = function (a, b) {
    // a < x < b
    var first = false
    var second = false
    var left = a.num * this.den
    var right = this.num * a.den
    if (left < right)
        first = true
    left = this.num * b.den
    right = b.num * this.den
    if (left < right)
        second = true
    return first && second
}

Fraction.prototype.exec = function () {
    return (this.num / this.den)
}
function max(a, b) {
    var max = a
    var left = a.num * b.den
    var right = b.num * a.den
    if (left < right)
        max = b
    else
        max = a
    return max
}
function min(a, b) {
    var max = a
    var left = a.num * b.den
    var right = b.num * a.den
    if (left > right)
        max = b
    else
        max = a
    return max
}

function equal(a, b) {
    var result = false
    if (a.num == b.num && b.den == a.den)
        result = true
    return result
}
module.exports = Fraction

module.exports.max = max
module.exports.min = min
module.exports.equal = equal
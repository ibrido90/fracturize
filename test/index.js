var should = require('chai').should()

var Fraction = require('../index')

describe('new Fraction(num,den,[force])',function(){
	it('with both num and den creates a fraction num/den', function(){
		new Fraction(5,3).toString().should.equal('5/3')
	})
	it('with num creates a fraction num/1', function(){
		new Fraction(5).toString().should.equal('5/1')
	})
	it('with no arguments creates a fraction 1/1', function(){
		new Fraction(1).toString().should.equal('1/1')
	})
	it('with 0 as den throw a Error', function(){
		var z = false
		try{
			var g = new Fraction(1,0)
		}
		catch(err){
			z = true
		}
		z.should.equal(true)
	})
	it('if #force is not passed or is passed as false the fraction simplifies',function(){
		new Fraction(5,10).toString().should.equal(new Fraction(1,2).toString())
		new Fraction(5,10,false).toString().should.equal(new Fraction(1,2).toString())
	})
	it('if #force is passed as true the fraction will be not simplified',function(){
		new Fraction(5,10,true).toString().should.equal("5/10")
	})
})

describe('toString()',function(){
	it('convert a Fraction object to its string rappresentation', function(){
		var fr = new Fraction(5,3).toString()
		fr.should.be.a('string')
	})
})

describe('simplify()',function(){
	it('if possible simplify the fraction', function(){
		var a = new Fraction(6,3)
		var b = new Fraction(2,1)
		a.toString().should.equal(b.toString())
	})
})

describe('sum(b) ',function(){
	it('return the sum between the calling instance and the argument', function(){
		var a = new Fraction(6,3)
		var b = new Fraction(2,1)

		a.sum(b).toString().should.equal(new Fraction(4,1).toString())
	})
})

describe('sub(b) ',function(){
	it('return the difference between the calling instance and the argument', function(){
		var a = new Fraction(10,9)
		var b = new Fraction(4,9)

		a.sub(b).toString().should.equal(new Fraction(2,3).toString())
	})
})

describe('mul(b) ',function(){
	it('return the moltiplication between the calling instance and the argument', function(){
		var a = new Fraction(10,9)
		var b = new Fraction(3,5)

		a.mul(b).toString().should.equal(new Fraction(2,3).toString())
	})
})

describe('div(b) ',function(){
	it('return the division of the calling instance by the argument', function(){
		var a = new Fraction(10,9)
		var b = new Fraction(5,3)

		a.div(b).toString().should.equal(new Fraction(2,3).toString())
	})
})

describe('isBetween(l,h) ',function(){
	it('return if the calling instance is between the lower and upper bound', function(){
		var a = new Fraction(1,9)
		var b = new Fraction(3,9)
		var c = new Fraction(2,9)

		c.isBetween(a,b).should.equal(true)
	})
})

describe('exec ',function(){
	it('return the result of num/den', function(){
		var a = new Fraction(1,2)
		
		a.exec().should.equal(0.5)
	})
})

describe('max(a,b) ',function(){
	it('return the maximum between a and b', function(){
		var a = new Fraction(1,2)
		var b = new Fraction(2,2)
		Fraction.max(a,b).toString().should.equal(b.toString())
	})
})

describe('min(a,b) ',function(){
	it('return the maximum between a and b', function(){
		var a = new Fraction(1,2)
		var b = new Fraction(2,2)
		Fraction.min(a,b).toString().should.equal(a.toString())
	})
})

describe('equal(a,b) ',function(){
	it('return if a is equal to b', function(){
		var a = new Fraction(2,2)
		var b = new Fraction(2,2)
		Fraction.equal(a,b).should.equal(true)
	})
})

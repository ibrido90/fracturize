var should = require('chai').should()
var Fraction = require('../index')

describe('new Fraction(num,den)',function(){
	it('with both num and den creates a fraction num/den', function(){
		new Fraction(5,3).toString().should.equal('5/3')
	})
	it('with num creates a fraction num/1', function(){
		new Fraction(5).toString().should.equal('5/1')
	})
	it('with no arguments creates a fraction 1/1', function(){
		new Fraction(1).toString().should.equal('1/1')
	})
})

describe('fraction.toString()',function(){
	it('convert a Fraction object to its string rappresentation', function(){
		var fr = new Fraction(5,3).toString()
		fr.should.be.a('string')
	})
})
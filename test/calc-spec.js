var calc = require('../src/calc')

describe('String calculator add() method', function () {
    it('should return zero if string is empty', function () {
        expect(calc.add()).toBe(0)
    })

    it('should return zero if string is "" ', function () {
        expect(calc.add('')).toBe(0)
    })

    it('should return 1 if string is 1', function () {
        expect(calc.add('1')).toBe(1)
    })

    it('should return 3 if string is 1,2', function () {
        expect(calc.add('1,2')).toBe(3)
    })

    it('should return 6 if string is 1,2,3', function () {
        expect(calc.add('1,2,3')).toBe(6)
    })

    it('should return 10 if string is 1\n2,3,4', function () {
        expect(calc.add('1\n2,3,4')).toBe(10)
    })

    it('should return 15 if string is //;\n1;2;3;4;5', function () {
        expect(calc.add('//;\n1;2;3;4;5')).toBe(15)
    })

    it('should throw an error when string is 1,-2', function () {
        expect(function () {
            calc.add('1,-2')
        }).toThrow(new Error('Negatives not allowed: -2'))
    })

    it('should return 2 if string is 2,1002', function () {
        expect(calc.add('2,1002')).toBe(2)
    })
})

/*

 6. Numbers bigger than 1000 should be ignored.
 a. Example: “1001,2” returns 2
 7. Delimiters can be of any length, using this syntax: “//[***]\n1***2***3” returns 6.
 8. Allow multiple delimiters, using this syntax: “//[*][%]\n1*2%3” returns 6.
 9. Handle multiple delimiters of any length.





 */
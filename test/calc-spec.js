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
})


/*
 4. Allow the Add method to handle a different delimiter:
 a. To change the delimiter, the beginning of the string will contain a separate line that looks like
 this: “//[delimiter]\n[numbers]”
 b. Example: “//;\n1;2” should return 3 (the delimiter is ;)
 c. This first line is optional; all existing scenarios (using , or \n) should work as before.
 5. Calling Add with a negative number will throw an exception “Negatives not allowed: “ listing all
 negative numbers that were in the list of numbers.
 a. Example “-1,2” throws “Negatives not allowed: -1”
 b. Example “2,-4,3,-5” throws “Negatives not allowed: -4,-5”
 6. Numbers bigger than 1000 should be ignored.
 a. Example: “1001,2” returns 2
 7. Delimiters can be of any length, using this syntax: “//[***]\n1***2***3” returns 6.
 8. Allow multiple delimiters, using this syntax: “//[*][%]\n1*2%3” returns 6.
 9. Handle multiple delimiters of any length.





 */
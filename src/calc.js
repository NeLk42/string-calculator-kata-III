var calc = {
    getNumbers: function (text) {
        var delim = text.indexOf('//'),
            array
        if (delim >= 0) {
            var subtext = text.substring(2).split('\n')
            array = subtext[1].split(subtext[0])
        } else {
            array = text.replace('\n', ',').split(',')
        }
        return array
    },
    getSum: function (numsArray) {
        var res = 0,
            negativeValue = false,
            err = 'Negatives not allowed:'
        for (var i = 0; i < numsArray.length; i++) {
            if (numsArray[i] < 0) {
                negativeValue = true
                err = err + ' ' + numsArray[i]
            } else {
                res += parseInt(numsArray[i])
            }

        }

        if (negativeValue) {
            throw new Error(err)
        }
        return res
    },
    add: function (text) {
        var res = text ? text : 0
        if (res != 0) {
            var numsArray = this.getNumbers(res)
            res = this.getSum(numsArray);
        }
        return res
    }
}

module.exports = calc;



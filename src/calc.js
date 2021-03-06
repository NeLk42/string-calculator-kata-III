var calc = {
    getNumbers: function (text) {
        var delim = text.indexOf('//'),
            array
        if (delim >= 0) {
            delim = text.indexOf('//[')
            if (delim >= 0) {
                ////[       **          ]\n1**2**3**4**5
                //[         **][%       ]\n1%2**3%4**5**6%7
                var subtext = text.substring(3).split(']\n')
                var delim = subtext[0].substring(-1)
                if (delim.indexOf('][') > 0) {
                    var delims = subtext[0].split('][')
                    var aux = subtext[1]
                    for (var i = 0; i < delims.length; i++) {
                        while (aux.indexOf(delims[i]) > 0) {
                            aux = aux.replace(delims[i], '][')
                        }
                    }
                    array = aux.split('][')
                } else {
                    array = subtext[1].split(delim)
                }
            } else {
                var subtext = text.substring(2).split('\n')
                array = subtext[1].split(subtext[0])
            }
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
            } else if (numsArray[i] <= 1000) {
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



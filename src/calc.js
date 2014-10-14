var calc = {
    getNumbers: function (text) {
        var array = text.split(',')
        return array
    },
    add: function (text) {
        var res = text ? text : 0
        if (res != 0) {
            var numsArray = this.getNumbers(text)
            res = 0
            for (var i = 0; i < numsArray.length; i++) {
                res += parseInt(numsArray[i])
            }
        }
        return res
    }
}

module.exports = calc;

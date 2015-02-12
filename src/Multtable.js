function Multtable() {
}

Application.prototype.multTable = function (n) {

    if (!window.console) console = {log: function() {}}; // for IE
    n = typeof n !== 'undefined' ? n : 12;
    var outStr = "";
    for (var x = 1; x <= n; x++) {
        for (var y = 1; y <= n; y++) {
            var thisStr = (x * y).toString();
            thisStr = Array(5 - thisStr.length).join(' ') + thisStr;
            outStr += thisStr;
        }
        outStr += '\n';
    }
    console.log('Multiplication table:\n' + outStr);
    return outStr;
};
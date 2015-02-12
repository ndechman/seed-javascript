function Fibonacci() {
}

Application.prototype.fibData = '';

Application.prototype.getFibNum = function (n) {
    switch (n) {
        case 0:
            return 0;
            break;
        case 1:
            return 1;
            break;
        default:
            return Application.prototype.getFibNum(n-1) + Application.prototype.getFibNum(n-2);
            break;
    }
}

Application.prototype.fibonaccize = function (fileName) {

    if (!window.console) console = {log: function() {}}; // for IE
    var strData = '';
    var inFile = new XMLHttpRequest(); // Does not work in Chrome or IE if loaded as file://.  This can be fixed by hosting the file on a webserver instead of on the filesystem.
    inFile.open("GET", fileName, true);
    if (inFile.overrideMimeType) // for IE
        inFile.overrideMimeType('text/plain');
    inFile.onreadystatechange = function () {
        if (inFile.readyState === 4) {
            if (inFile.status === 200 || inFile.status == 0) {
                var arrData = inFile.responseText.split('\r\n');
                arrData.forEach(function (line) {
                    strData += Application.prototype.getFibNum(line) + '\n'
                });

                console.log('Fibonacci Numbers:\n' + strData);
                Application.prototype.fibData = strData;
            }
        }
    }
    inFile.send(null);
    return '';
}
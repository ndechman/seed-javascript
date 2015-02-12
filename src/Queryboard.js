function Queryboard() {
}

Application.prototype.outData = '';
Application.prototype.mtxData = [];

Application.prototype.runCommand = function (strCommand) {
    var arrCommand = strCommand.split(' ');
    var tokenOne = arrCommand[1];
    var tokenTwo = 0;
    if (arrCommand.length > 2) {
        tokenTwo = arrCommand[2];
    }
    switch (arrCommand[0]) {
        case 'SetCol':
            for (var i = 0; i < 256; i++) {
                Application.prototype.mtxData[tokenOne][i] = tokenTwo;
            }
            return '';
            break;
        case 'SetRow':
            for (var i = 0; i < 256; i++) {
                Application.prototype.mtxData[i][tokenOne] = tokenTwo;
            }
            return '';
            break;
        case 'QueryCol':
            var retVal = 0;
            for (var i = 0; i < 256; i++) {
                retVal += parseInt(Application.prototype.mtxData[tokenOne][i]);
            }
            return retVal + '\n';
            break;
        case 'QueryRow':
            var retVal = 0;
            for (var i = 0; i < 256; i++) {
                retVal += parseInt(Application.prototype.mtxData[i][tokenOne]);
            }
            return retVal + '\n';
            break;
        default:
            return '';
            break;
    }
}

Application.prototype.runMatrix = function (fileName) {

    if (!window.console) console = {log: function() {}}; // for IE
    var strData = '';
    for (var i = 0; i < 256; i++) {
        Application.prototype.mtxData[i] = [];
        for (var j = 0; j < 256; j++) {
            Application.prototype.mtxData[i][j] = 0;
        }
    }
    var inFile = new XMLHttpRequest(); // Does not work in Chrome or IE if loaded as file://.  This can be fixed by hosting the file on a webserver instead of on the filesystem.
    inFile.open("GET", fileName, true);
    if (inFile.overrideMimeType) // for IE
        inFile.overrideMimeType('text/plain');
    inFile.onreadystatechange = function () {
        if (inFile.readyState === 4) {
            if (inFile.status === 200 || inFile.status == 0) {
                var arrData = inFile.responseText.split('\r\n');
                arrData.forEach(function (line) {
                    strData += Application.prototype.runCommand(line);
                });

                console.log('Queryboard command results:\n' + strData);
                Application.prototype.outData += strData;
            }
        }
    }
    inFile.send(null);
    return '';
}
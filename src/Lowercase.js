function Lowercase() {
}

Application.prototype.strData = '';

Application.prototype.lowercase = function (fileName) {

    if (!window.console) console = {log: function() {}}; // for IE
    var strData;
    var inFile = new XMLHttpRequest(); // Does not work in Chrome or IE if loaded as file://.  This can be fixed by hosting the file on a webserver instead of on the filesystem.
    inFile.open("GET", fileName, true);
    if (inFile.overrideMimeType) // for IE
        inFile.overrideMimeType('text/plain');
    inFile.onreadystatechange = function () {
        if (inFile.readyState === 4) {
            if (inFile.status === 200 || inFile.status == 0) {
                var strData = inFile.responseText.toLowerCase();
                console.log('File contents in lowercase:\n' + strData);
                Application.prototype.strData = strData ;
            }
        }
    }
    inFile.send(null);
    return '';
}
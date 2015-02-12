function Primepal() {
}

Application.prototype.primePalindrome = function (n) {

    if (!window.console) console = {log: function() {}}; // for IE
    n = typeof n !== 'undefined' ? n : 1000;
    var intRet = 0;
    for (var j = 1; j < n; j++) {
        var isPP = true;
        // first check if the number is a palindrome
        if (j.toString().split("").reverse().join("") != j.toString()) {
            isPP = false;
        }
        // now, if the number is indeed a palindrome, check if it is prime
        if (isPP) {
            for (var i = 2; i <= Math.sqrt(j); i++) {
                if (j % i == 0) {
                    isPP = false;
                }
            }
        }
        // if it's both prime and a palindrome, sock it away so we can return it if we don't find a larger one
        if (isPP) {
            intRet = j;
        }
    }
    console.log('Largest prime palindrome less than 1000: ' + intRet);
    return intRet;
};
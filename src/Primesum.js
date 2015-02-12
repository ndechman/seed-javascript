function Primesum() {
}

Application.prototype.primeSum = function (n) {

    if (!window.console) console = {log: function() {}}; // for IE
    n = typeof n !== 'undefined' ? n : 1000;
    var intRet = 0;
    var numPrimes = 0
    var j = 1; // 1 is not a prime number, by definition, but the simple tests below will incorrectly identify it as such.  We *could* say if j==1 then isPrime=false, but it's simpler to just start j at 2.
    while (numPrimes < n) {
        j++;
        var isPrime = true;
        // check if the number is prime
        for (var i = 2; i <= Math.sqrt(j); i++) {
            if (j % i == 0) {
                isPrime = false;
            }
        }
        // if it's prime, add it to the sum
        if (isPrime) {
            intRet += j;
            numPrimes++;
        }
    }
    console.log('Sum of the first 1000 prime numbers: ' + intRet);
    return intRet;
};
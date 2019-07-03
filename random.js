function fibonociseq() {
    var fib = document.getElementById("fib");
    var i;
    var seq1 = parseInt(document.getElementById("seq1").value, base);
    var seq2 = parseInt(document.getElementById("seq2").value, base);
    var seq3;
    var current = seq1 + ',' + seq2;

    for (i = 0; i < 10; i++) {
        var seq3 = seq1 + seq2;
        var seq2 = seq1;
        var seq3 = seq2;
        var current = current + ',' + seq3;
    }
    
    fib.innerHTML = current;
}
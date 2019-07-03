function fibonociseq() {
    var fib = document.getElementById("fib");
    var i;
    var seq1 = document.getElementById("seq1").value;
    var seq2 = document.getElementById("seq2").value;
    var seq3;
    var current = seq1 + ',' + seq2;

    for (i = 0; i < 10; i++) {
        seq1 + seq2 = seq3;
        seq2 = seq1;
        seq3 = seq2;
        current = current + ',' + seq3;
    }
    
    fib = current;
}
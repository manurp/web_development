var msg = 'Global msg'
console.log(msg);

var a = function () {
    var msg = 'Inside a'
    console.log(msg);
    b();
    c();
    function c() {
        console.log(msg);
    }
}

a();

function b() {
    console.log(msg);
}

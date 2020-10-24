var x = 0;
function count(zn) {
    if (zn == 1)
    {
        x = x + 1;
        document.getElementById("number").innerHTML = x;
        console.log(x);
    }
    else {
        if (x > 0)
        {
            x--;
            document.getElementById("number").innerHTML = x;
            console.log(x);
        }
    }
}
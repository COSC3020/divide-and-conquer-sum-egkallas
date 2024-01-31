function divideAndConquerSum(a) {
    a = divNConq(a);
    return a;
}

function divNConq(a) {
    if (a.length == 0)
        return 0;
    else if (a.length <= 1) {
        return a[0];}
    else if (a.length == 2) {
        return a[0] + a[1];}
    else {
        var third = Math.floor(a.length / 3);
        var leftSum = divNConq(a.slice(0, third));
        var midSum = divNConq(a.slice(third, 2 * third));
        var rightSum = divNConq(a.slice(2 * third));
        return leftSum + midSum + rightSum;
    }
}


//Help: https://stackoverflow.com/questions/26344144/divide-and-conquer-algorithm-for-sum-of-integer-array

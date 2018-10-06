module.exports = function longestConsecutiveLength(array) {
  // your solution here
 if (array.length == 0){
return 0;
}

    function uniq(a) {
        return a.sort(function(a, b) {
            return a - b;
        }).filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }
    array = uniq(array);

    var counter = 0;
    var result = 1;
    var current_seq = [array[0]];

    for (var i = 1; i < array.length; i++) {
    if (array [i]  > current_seq [counter] + 1 ){
        if (result < current_seq.length)
            result = current_seq.length;
        counter = 0;
        current_seq = [];
        current_seq [counter] = array [i];
    }
    else{
        counter = counter + 1;
        current_seq[counter] = array[i];
    }
}
return result;
}

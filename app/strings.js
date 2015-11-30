exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = [];
    arr = str.split("");
    var sorted_arr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    var results_2 = results.filter(function(elem, pos) {
        results.indexOf(elem) == pos;
      });
    var new_str = [];
    new_str = results.join("");
    return new_str.repeat(amount);
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var rev_str = ""
    for (var i = 0; i < str.length; i++) {
      rev_str = str[i] + rev_str
    }
    return rev_str
  }
};

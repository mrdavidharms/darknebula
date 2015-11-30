exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (item === arr[i]) {
        arr.splice(i, 2);
      }
    }
  return arr
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1,1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
  var c = arr1.concat(arr2);
  return c;
  },

  insert : function(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
  },

  count : function(arr, item) {
    var count = arr.reduce(function(n, val){
      return n + (val === item);
    }, 0);
    return count;
  },

  duplicates : function(arr) {
    var sorted_arr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    var results_2 = results.filter(function(elem, pos) {
        return results.indexOf(elem) == pos;
      });
    return results_2;  
  },

  square : function(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
      new_arr.push(arr[i] * arr[i])
    }
    return new_arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [], i = -1;
        while ((i = arr.indexOf(target, i+1)) != -1){
            indexes.push(i);
        }
        return indexes;
    }
};

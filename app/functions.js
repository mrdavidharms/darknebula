exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {

    for (var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
      return num > 1;
    },



  arraySum : function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i]
    }
    return total;
  },

  fizzBuzz : function(num) {
    var string = "";
    if (num % 3 === 0 && num % 5 === 0) {
      string = "fizzbuzz";
    }
    else if (num % 3 === 0) {
      string = "fizz";
    }
    else if (num % 5 === 0) {
      string = "buzz";
    }
    else if (isNaN(num) === true) {
      string = false;
    }
    else {
      string = num;
    }
    return string;
  }
};

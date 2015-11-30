exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg = /^\d+$/g;
    var matched_string = str.match(reg);
    debugger;
    if (isNaN(reg)) {
      return false;
    }
    else {
      return true;
    }
  },

  containsRepeatingLetter : function(str) {

  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },

  isUSD : function(str) {

  }
};

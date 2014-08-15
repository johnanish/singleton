/* 
 * this is something we learned back in 
 * during my tenure in an MNC for AB testing
 * on how to wring singleton files that does 
 * the entire job. this was easier to debug 
 * and port over to several different AB tests
 */

// Variation A/B.../N

var wf = wf || {};

wf.exp = {
  
  changeCTA: function(){
    // group together all jQuery functions for a module
    // example: 
    // change the length of the CTA, 
    // change its color
    // change any other attributes
  },

  showAlternateHeader: function(){
    // another function to group jQuery functions together
    // hide the existing top section
    // create an alternate top header
  },

  
  // write as many methods as you want
  // make sure you name the function like a verb as doing something
  // changeHeader, killBanner, showLightBox
  // the standard js naming technique is camel case 
  // keep the first alphabet of the word small,
  // but for every otherword in the function name,
  // capitalize the first letter

  

  // one function to rule them all
  // call all your js functions inside this one main function
  // helps to debug if there is a problem
  // by commenting out specific function modules

  init: function() {
    this.changeCTA();
    this.showAlternateHeader();
    // make sure you prefix function names with "this"
    // example: "this.function_name();""
  }
};

$(document).ready(function() { // check jQuery readiness
  wf.exp.init();
});



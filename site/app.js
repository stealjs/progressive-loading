import $ from "jquery";

$(function(){
  var onhashchange = function(){
      console.log(window.location.hash);

    if(window.location.hash === "#login") {
      System.import("app/login").then(function(){
        $("#main").login();
      });
    } else if(window.location.hash === "#signup" ) {
      System.import("app/signup").then(function(){
        $("#main").signup();
      });
    } else {
      System.import("app/homepage").then(function(){
        $("#main").homepage();
      });
    }
  };
  $(window).bind("hashchange",onhashchange);
  onhashchange();
});

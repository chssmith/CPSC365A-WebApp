$(document).ready(function(){
  var t = window.location.pathname;
  if(t.indexOf("admin") > 0){
    $("#admin").addClass("active");
  }
  else if(t.indexOf("createroom") > 0){
    $("#createroom").addClass("active");
  }
  else if(t.indexOf("showroom") >0){
    $("#showroom").addClass("active");

    else if(t.indexOf("viewclosed") > 0){
      $("#data").addClass("active");
    }
    else if(t.indexOf("viewopen") >0){
      $("#open").addClass("active");
    }
});

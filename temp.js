

function random() {
  return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}
var flag=false;
var i=0;
$('#button').click(function(){
  if(flag){
    $("#container").height($("#container").height()+104);
    $("#container").prepend('<br>');
    i++;
    flag=false;
  }
  $("#container").prepend('<div id="ball'+i+'"></div>');
  $('#ball'+i).css({
    display:"inline-block",
    backgroundColor : random(),
    width:"100px",
    height:"100px",
    marginRight:"10px",
    borderRadius:"50%",
  });
  var ball = document.querySelectorAll('#ball'+i);
  var container = document.querySelector('#container');
  var last=ball[ball.length-1];
  if(container.offsetWidth-(last.offsetLeft+110)<100){
    flag=true;
  }
});

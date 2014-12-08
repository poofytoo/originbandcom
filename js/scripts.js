/* 

Hello young code explorer!

Welcome to my little JavaScript playground. This website was built with:
JQuery
Velocity.JS
2.5 hours of sleep
22 hour of frantic typing
and a whole lot of coffee
If you see me, please say hi.

- Victor

*/

$(function() {

var W = $(window).width();
var H = $(window).height();

// Toggle whether or not it says swipe up or butotn up
if (W > 500) {
  $('#swipe').attr('xlink:href', 'css/scrollup.png');
}

// Blink the Emergency Button
window.setInterval(function() {
  $('.emer-1').show();
  window.setTimeout(function() {
    $('.emer-1').hide();
  }, 600);
}, 1200);

// Hide the swipe element after page is scrolled up
$(window).scroll(function () {
  if ($(window).scrollTop() < 200) {
      $('#swipe').show()
    } else {
      $('#swipe').hide()
    }
});

var oFire = new Firebase("https://poofytoo.firebaseio.com/originemails");
$('.signup').click(function() {
  signup();
});

$('.user-email').bind("keypress", function(event) {
    if(event.which == 13) {
    event.preventDefault();
      signup();
    }
});

var signup = function() {
  oFire.push($('.user-email').val());
  $('.email-added').text('Added ' + $('.user-email').val() + '!');
  $('.user-email').val('');
  $('.email-added').slideDown();
}

$("#cover-circ")
    .velocity({ cx: W/2,
                cy: H/2,
              }, {duration: 0})
$("#circ")
    .velocity({ cx: W/2,
                cy: H/2,
              }, {duration: 100})
    .velocity({ r: 100, 
                strokeWidth: "30px",
                opacity: 1 }, 
              { duration: 700, easing: [.53,.01,.91,.69]}
              );

mW = Math.min(W, 400);
mH = H;

$("#swipe")
    .velocity({ x: W/2 - mW/4,
                y: mH,
                width: mW/2,
                height: (mW/2  / 400 * 73),
              }, {duration: 0})
    .delay(1800)
    .velocity({y: mH - (mW/2  / 400 * 73),
              }, {duration: 500, easing: 'ease-out'})

$("#arrow")
    //.delay(500)
    .velocity({ 
                x: 0,
                y: 0, 
                translateX: W/2,
                translateY: H/2,
                rotateZ: 90,
                //opacity: 0,
                fill: '#121414'
              }, {duration: 0})
    .delay(1000)
    
    .velocity({ rotateZ: 180,
                translateZ: 0,
                fill: '#e91e63'
                }, 
              { duration: 1200, easing: [.6,.01,.42,1]}
              );
    /*
$("#triangle")
    .velocity({ translateX: W/2 - 100 - 87.7,
                translateY: H/2,
                scale: 0.5,
                rotateZ: -45,
                opacity: 0
              }, 
              { duration: 0})
    .delay(1500)
    .velocity({ translateX: [W/2 - 100 - 35, "ease-out"],
                translateY: [H/2 - 100 - 35, "ease-out"],
                rotateZ: [0, "ease-out"],
                opacity: 1
              }, 
              { duration: 800, easing: [.53,.01,.91,.69]}
              );*/
/*

var width = W+500,
    height = H+500;

var vertices = d3.range(100).map(function(d) {
  return [Math.random() * width, Math.random() * height];
});

var svg = d3.select(".intro").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "PiYG")

var path = svg.append("g").selectAll("path");

svg.selectAll("circle")
    .data(vertices.slice(1))
  .enter().append("circle")
    .attr("transform", function(d) { return "translate(" + d + ")"; })
    .attr("r", 2);

redraw();

function redraw() {
  path = path.data(d3.geom.delaunay(vertices).map(function(d) { return "M" + d.join("L") + "Z"; }), String);
  path.exit().remove();
  path.enter().append("path").attr("class", function(d, i) { return "q" + (i % 9) + "-9"; }).attr("d", String);
}
*/
var v1 = window.setInterval(function() {
  $("#ring1").velocity({ 
    r: 50,
    opacity: 0.1}, 
    {duration: 1000, easing: 'ease-out'})
  $("#ring1").velocity({ 
    r: 10,
    opacity: 1}, 
    {duration: 0})

}, 1000);

var colorWheel = ['#FF952C', '#4DE51C', '#1BF8EB', '#E91E63']
var colorWheelCount = 0;
$('.spacer').click(function(){
  colorWheelCount ++;
  $("#arrow")
    .velocity({ 
                fill: colorWheel[colorWheelCount%colorWheel.length]
              }, {duration: 200})

});

window.setTimeout(function() {
    var v2 = window.setInterval(function() {
    $("#ring2").velocity({ 
      r: 50,
      opacity: 0.1}, 
      {duration: 1000, easing: 'ease-out'}) 
    .velocity({ 
      r: 10,
      opacity: 1}, 
    {duration: 0});
    }, 1000)
  }, 500)
gyro.frequency = 100;
  gyro.startTracking(function(o) {
      if (o.alpha) {
        $('.rotate-msg').show();
      } else { 
        $('.rotate-msg').hide();
      }
      
        angle = (o.alpha - 45)/180 * Math.PI;
        x = Math.cos(angle)*50 + 150
        y = Math.sin(angle)*50 + 90

        $("#dw").velocity({ 
          cx: x,
          cy: y}, 
          {duration: 0});

        $('#dw-text').velocity({ 
          x: x-14,
          y: y+10}, 
          {duration: 0});

        $('#north-rect').velocity({ 
          translateX: 150,
          translateY: 90,
          rotateZ: o.alpha-135 }, 
          {duration: 0});

      

        });
})
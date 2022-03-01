/*this whoe fucking code is written by absolutely proscatination thinking and saying 5 fucks bolutely loved this piece of shit*/

var b=0;
var arr=0;


$(".green").click(function () {
  yo(1);
  m.push(1);
  sibl();
});
$(".red").click(function () {
   yo(1);
    m.push(2);
    sibl();
});
$(".blue").click(function () {
    yo(1);
    m.push(3);
    sibl();
});
$(".yellow").click(function () {
    yo(1);
    m.push(4);
    sibl();
});




function yo(a)
{
switch(a)
{
  case 1:
    $(".green").addClass("pressed");
    setTimeout(function () {
      $(".green").removeClass("pressed");
    },40);
    var b1=new Audio("sounds/green.mp3");
    b1.play();
    return 1;
    break;


  case 2:
    $(".red").addClass("pressed");
    setTimeout(function () {
      $(".red").removeClass("pressed");
    },40);
    var b2=new Audio("sounds/red.mp3");
    b2.play();
    return 2;
    break;

  case 3:
    $(".blue").addClass("pressed");
    setTimeout(function () {
      $(".blue").removeClass("pressed");
    },40);
    var b3=new Audio("sounds/blue.mp3");
    b3.play();
    return 3;
    break;

  case 4:
    $(".yellow").addClass("pressed");
    setTimeout(function () {
      $(".yellow").removeClass("pressed");
    },40);
    var b4=new Audio("sounds/yellow.mp3");
    b4.play();
    return 4;
    break;
  default:
    alert("error!!!!!!! occured");
    break;

}
}

$("h1").click(function () {
jiiii();
});



function jiiii()
{
  b=b+1;
  var a=Math.round((Math.random()*10))%4+1;
  yo(a);
  arr.push(a);
  $("h1").text("Level"+" "+ b);

}


function sibl()
{
  for(var  i=0; i<m.length; i++)
  {
  if(arr[i]!=m[i])
  {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    },200);
    var b5=new Audio("sounds/wrong.mp3");
    b5.play();
    $("h1").text("Game ove bitches now go fuck yourselves click to play again");
   });
  }
  }
  if(m.length==arr.length)
  {
    setTimeout(function () {
      m.length=0;
      jiiii();
    },1000);

  };
}

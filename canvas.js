var canvas = document.querySelector('canvas')
;
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;
var c = canvas.getContext('2d') ;
//c.fillStyle = ' red '
//c.fillRect(100,100,100,100);
//c.fillStyle = ' blue '
//c.fillRect(400,100,100,100);
//c.fillStyle = ' green'
// c.fillRect(300,300,100,100);

//console.log(canvas);



//c.beginPath();
//c.moveTo(20,100);
//c.lineTo(300, 100);
//c.lineTo (400 , 300) ;
//c.strokeStyle = "gold" ;
//c.stroke();


//arc/ circle
//c.beginPath();
//c.arc(300 , 300 , 30, 0,  Math.PI * 2, false);
//c.strokeStyle = ' purple' ;
//c.stroke();

//for(var i = 0 ; i < 8 ; i++ )
//{
  //var x = Math.random() * window.innerWidth;
  //var y = Math.random() * window.innerHeight;
  //c.arc(x ,y , 30, 0,  Math.PI * 2, false);
  //c.strokeStyle = ' purple' ;
  //c.stroke();
//}


var x = 200 ;
var dx = 8 ;
var radius = 30
function animate () {
  requestAnimationFrame(animate);
c.clearRect(0,0 , innerWidth , innerHeight);
  c.beginPath();
  c.arc(x , 200 , 30, 0,  Math.PI * 2, false);
  c.strokeStyle = ' purple' ;
  c.stroke();
if (x + radius > innerWidth || x - radius < 0 ) {
  dx=-dx ;
}

  x +=dx ;

}
animate();

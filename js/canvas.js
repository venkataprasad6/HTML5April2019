var canvasRef = document.getElementById("mycanvas")

//set context
var context = canvasRef.getContext("2d")
//ready to draw
//draw line
context.moveTo(0,0)
context.lineTo(400, 400)
context.stroke()


context.fillStyle = 'green';
context.fillRect(10, 10, 150, 100);

context.font = "44px serif"
context.strokeText("Hello Canvas", 150, 100)

//draw the smiley
context.beginPath()
context.arc(150, 250, 50, 0, Math.PI * 2, true )
context.moveTo(125,235)
context.arc(125, 235, 10, 0, Math.PI*2 , true)
context.moveTo(175,235)
context.arc(175, 235, 10, 0, Math.PI*2 , true)
context.moveTo(125, 255)
context.arc(150, 255, 30, 0, Math.PI , false)
context.stroke()
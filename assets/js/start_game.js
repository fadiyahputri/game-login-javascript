 //Mulai Game
 var myGamePiece;

 function startGame() {

     document.getElementById("game").style.display="block"
     document.getElementById("kotak").style.display="none"
     document.getElementById("gambar").style.display="none"
     var userr = document.getElementById("username").value
     document.getElementById("name").innerHTML = "Username : " + userr;
     myGameArea.start();
     myGamePiece = new component(30, 30, "red", 20, 250);
 }
 
 var myGameArea = {
     canvas : document.createElement("canvas"),
     start : function() {
         this.canvas.width = 900;
         this.canvas.height = 600;
         this.context = this.canvas.getContext("2d");
         document.getElementById("myCanvas").insertBefore(this.canvas, document.getElementById("myCanvas").childNodes[0]);
         this.interval = setInterval(updateGameArea, 20);
         window.addEventListener('keydown', function (e) {
             myGameArea.keys = (myGameArea.keys || []);
             myGameArea.keys[e.keyCode] = (e.type == "keydown");
     })
     window.addEventListener('keyup', function (e) {
         myGameArea.keys[e.keyCode] = (e.type == "keydown");            
         })
     }, 
     clear : function(){
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }
 }

 function component(width, height, color, x, y) {
 this.gamearea = myGameArea;
 this.width = width;
 this.height = height;
 this.speedX = 0;
 this.speedY = 0;    
 this.x = x;
 this.y = y;    
 this.update = function() {
     ctx = myGameArea.context;
     ctx.fillStyle = color;
     ctx.fillRect(this.x, this.y, this.width, this.height);
 }
 this.newPos = function() {
     this.x += this.speedX;
     this.y += this.speedY;        
     }    
 }

 function updateGameArea() {
 myGameArea.clear();
 myGamePiece.speedX = 0;
 myGamePiece.speedY = 0;    
 if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -2; }
 if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 2; }
 if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -2; }
 if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 2; }
 myGamePiece.newPos();    
 myGamePiece.update();
 }

 //reset
 function reset() {
     location.reload();
 }

const Button1 = document.getElementById("Button1");
Button1.addEventListener("click",()=>{
  let sound = new Audio('./Sonidos/CovertoCovert.mp3');
  sound.play();
  sound.addEventListener('ended', function() {
    sound.currentTime = 0;
    sound.play();
}, false);
Button1.remove();
var JugadorY = 50;
var JugadorX = 50;
var Puntaje = 0;
var BalaX=0;
var BalaY=0;
var ZombieStep = 1;
var ZombieY = 350;
var ZombieX = 700;
var ZombieDer = 0;
var ZombieIzq = 0;
var ZombiePermitidoX = 0;
var ZombiePermitidoY = 0;
var Zombie2Y = 250;
var Zombie2X = 700;
var Zombie2Der = 0;
var Zombie2Izq = 0;
var Zombie2PermitidoX = 0;
var Zombie2PermitidoY = 0;
var Zombie3Y = 50;
var Zombie3X = 700;
var Zombie3Der = 0;
var Zombie3Izq = 0;
var Zombie3PermitidoX = 0;
var Zombie3PermitidoY = 0;
var Zombie4Y = 150;
var Zombie4X = 700;
var Zombie4Der = 0;
var Zombie4Izq = 0;
var Zombie4PermitidoX = 0;
var Zombie4PermitidoY = 0;
var CargadorBalas = 1;

const ContadorBalas = document.getElementById("ContadorDeBalas");
const Puntos = document.querySelector("p");
const Zombie1 = document.getElementById("Zombie1");
const Zombie2 = document.getElementById("Zombie2");
const Zombie3 = document.getElementById("Zombie3");
const Zombie4 = document.getElementById("Zombie4");
const Vida = document.getElementById("Vida");
var VidaJugador = 200;

const JugadorMoverBrusco = document.getElementById("Jugador1");

function Perder (){
  if (VidaJugador <= 0) {
    clearInterval(PuntosEnAccion);
    sound.pause();
    clearInterval(MovimientoX);
    window.alert("Has Perdido ¿Quieres reiniciar?");
    Button1.click();
    Vida.style.width="400px";
    }
}

PuntosEnAccion = setInterval(() => {
  console.log(sound.currentTime);
  if(VidaJugador<=0){
    Vida.style.width = "0px";
    Perder();
  }
  Puntaje = Puntaje +=1;
  Puntos.innerText = "Puntos: " + Puntaje;
  var JugadorYTrucho = JugadorY ;
  JugadorMoverBrusco.style.top=JugadorY+"px";
  JugadorMoverBrusco.style.left=JugadorX+"px";
  //Derecha
if (Zombie4X < JugadorX) {
  Zombie4X = Zombie4X + ZombieStep;
  Zombie4.style.backgroundColor = "orange";
  Zombie4.style.left = Zombie4X + "px";
  if(Zombie4PermitidoY==0){
    Zombie4PermitidoX = 1;
    Zombie4Izq=0;
    Zombie4Der=1;
    Zombie4.style.rotate = "270deg";
  }
}
//Izquierda
if (Zombie4X > JugadorX) {
  Zombie4X = Zombie4X - ZombieStep;
  Zombie4.style.left = Zombie4X + "px";
  Zombie4.style.rotate = "90deg";
  if(Zombie4PermitidoY==0){
    Zombie4PermitidoX = 1;
  Zombie4Izq=1;
  Zombie4Der=0;
  }
}
//Nada
if (Zombie4X == JugadorX){
  Zombie4PermitidoX=0;
  Zombie4Izq=0;
  Zombie4Der=0;
}
//Arriba
if (Zombie4Y > JugadorYTrucho) {
  Zombie4Y = Zombie4Y - ZombieStep;
  Zombie4.style.top = Zombie4Y + "px";
  if(Zombie4PermitidoX == 0){
    Zombie4Izq=0;
    Zombie4Der=0;
    Zombie4.style.rotate = "180deg";
  }
  else if(Zombie4PermitidoX == 1){
  if(Zombie4Der==1){
    Zombie4.style.rotate = "225deg";
  }
  else if(Zombie4Izq==1){
    Zombie4.style.rotate = "135deg";
  }
}
}
//Abajo
if (Zombie4Y < JugadorYTrucho) {
  Zombie4Y = Zombie4Y + ZombieStep;
  Zombie4.style.top = Zombie4Y + "px";
  if(Zombie4PermitidoX == 0){
    Zombie4Izq=0;
    Zombie4Der=0;
    Zombie4.style.rotate = "0deg";
  }
  else  if(Zombie4PermitidoX == 1){ 
  if(Zombie4Der==1){
    Zombie4.style.rotate = "315deg";
  }
  else if(Zombie4Izq==1){
    Zombie4.style.rotate = "45deg";
  }
}
}
  //Derecha
if (Zombie3X < JugadorX) {
  Zombie3X = Zombie3X + ZombieStep;
  Zombie3.style.backgroundColor = "orange";
  Zombie3.style.left = Zombie3X + "px";
  if(Zombie3PermitidoY==0){
    Zombie3PermitidoX = 1;
    Zombie3Izq=0;
    Zombie3Der=1;
    Zombie3.style.rotate = "270deg";
  }
}
//Izquierda
if (Zombie3X > JugadorX) {
  Zombie3X = Zombie3X - ZombieStep;
  Zombie3.style.left = Zombie3X + "px";
  Zombie3.style.rotate = "90deg";
  if(Zombie3PermitidoY==0){
    Zombie3PermitidoX = 1;
  Zombie3Izq=1;
  Zombie3Der=0;
  }
}
//Nada
if (Zombie3X == JugadorX){
  Zombie3PermitidoX=0;
  Zombie3Izq=0;
  Zombie3Der=0;
}
//Arriba
if (Zombie3Y > JugadorYTrucho) {
  Zombie3Y = Zombie3Y - ZombieStep;
  Zombie3.style.top = Zombie3Y + "px";
  if(Zombie3PermitidoX == 0){
    Zombie3Izq=0;
    Zombie3Der=0;
    Zombie3.style.rotate = "180deg";
  }
  else if(Zombie3PermitidoX == 1){
  if(Zombie3Der==1){
    Zombie3.style.rotate = "225deg";
  }
  else if(Zombie3Izq==1){
    Zombie3.style.rotate = "135deg";
  }
}
}
//Abajo
if (Zombie3Y < JugadorYTrucho) {
  Zombie3Y = Zombie3Y + ZombieStep;
  Zombie3.style.top = Zombie3Y + "px";
  if(Zombie3PermitidoX == 0){
    Zombie3Izq=0;
    Zombie3Der=0;
    Zombie3.style.rotate = "0deg";
  }
  else  if(Zombie3PermitidoX == 1){ 
  if(Zombie3Der==1){
    Zombie3.style.rotate = "315deg";
  }
  else if(Zombie3Izq==1){
    Zombie3.style.rotate = "45deg";
  }
}
}
  //Derecha
if (Zombie2X < JugadorX) {
  Zombie2X = Zombie2X + ZombieStep;
  Zombie2.style.backgroundColor = "orange";
  Zombie2.style.left = Zombie2X + "px";
  if(Zombie2PermitidoY==0){
    Zombie2PermitidoX = 1;
    Zombie2Izq=0;
    Zombie2Der=1;
    Zombie2.style.rotate = "270deg";
  }
}
//Izquierda
if (Zombie2X > JugadorX) {
  Zombie2X = Zombie2X - ZombieStep;
  Zombie2.style.left = Zombie2X + "px";
  Zombie2.style.rotate = "90deg";
  if(Zombie2PermitidoY==0){
    Zombie2PermitidoX = 1;
  Zombie2Izq=1;
  Zombie2Der=0;
  }
}
//Nada
if (Zombie2X == JugadorX){
  Zombie2PermitidoX=0;
  Zombie2Izq=0;
  Zombie2Der=0;
}
//Arriba
if (Zombie2Y > JugadorYTrucho) {
  Zombie2Y = Zombie2Y - ZombieStep;
  Zombie2.style.top = Zombie2Y + "px";
  if(Zombie2PermitidoX == 0){
    Zombie2Izq=0;
    Zombie2Der=0;
    Zombie2.style.rotate = "180deg";
  }
  else if(Zombie2PermitidoX == 1){
  if(Zombie2Der==1){
    Zombie2.style.rotate = "225deg";
  }
  else if(Zombie2Izq==1){
    Zombie2.style.rotate = "135deg";
  }
}
}
//Abajo
if (Zombie2Y < JugadorYTrucho) {
  Zombie2Y = Zombie2Y + ZombieStep;
  Zombie2.style.top = Zombie2Y + "px";
  if(Zombie2PermitidoX == 0){
    Zombie2Izq=0;
    Zombie2Der=0;
    Zombie2.style.rotate = "0deg";
  }
  else  if(Zombie2PermitidoX == 1){ 
  if(Zombie2Der==1){
    Zombie2.style.rotate = "315deg";
  }
  else if(Zombie2Izq==1){
    Zombie2.style.rotate = "45deg";
  }
}
}
   //Derecha
   if (ZombieX < JugadorX) {
    ZombieX = ZombieX + ZombieStep;
    Zombie1.style.backgroundColor = "orange";
    Zombie1.style.left = ZombieX + "px";
    if(ZombiePermitidoY==0){
      ZombiePermitidoX = 1;
      ZombieIzq=0;
      ZombieDer=1;
      Zombie1.style.rotate = "270deg";
    }
  }
  //Izquierda
  if (ZombieX > JugadorX) {
    ZombieX = ZombieX - ZombieStep;
    Zombie1.style.left = ZombieX + "px";
    Zombie1.style.rotate = "90deg";
    if(ZombiePermitidoY==0){
      ZombiePermitidoX = 1;
    ZombieIzq=1;
    ZombieDer=0;
    }
  }
  //Nada
  if (ZombieX == JugadorX){
    ZombiePermitidoX=0;
    ZombieIzq=0;
    ZombieDer=0;
  }
  //Arriba
  if (ZombieY > JugadorYTrucho) {
    ZombieY = ZombieY - ZombieStep;
    Zombie1.style.top = ZombieY + "px";
    if(ZombiePermitidoX == 0){
      ZombieIzq=0;
      ZombieDer=0;
      Zombie1.style.rotate = "180deg";
    }
    else if(ZombiePermitidoX == 1){
    if(ZombieDer==1){
      Zombie1.style.rotate = "225deg";
    }
    else if(ZombieIzq==1){
      Zombie1.style.rotate = "135deg";
    }
  }
 }
 //Abajo
  if (ZombieY < JugadorYTrucho) {
    ZombieY = ZombieY + ZombieStep;
    Zombie1.style.top = ZombieY + "px";
    if(ZombiePermitidoX == 0){
      ZombieIzq=0;
      ZombieDer=0;
      Zombie1.style.rotate = "0deg";
    }
    else  if(ZombiePermitidoX == 1){ 
    if(ZombieDer==1){
      Zombie1.style.rotate = "315deg";
    }
    else if(ZombieIzq==1){
      Zombie1.style.rotate = "45deg";
    }
  }
  }

  //aaaaaaaaaaaaaaaaaaaaaaa

  if (
    (ZombieY >= JugadorYTrucho-50) &
    (ZombieY <= JugadorYTrucho+50) &
    (ZombieX <= JugadorX+50) &
    (ZombieX >= JugadorX-50)
  ) {
    if (VidaJugador > 0) {
      VidaJugador -= 2;
      Vida.style.width = VidaJugador*2  + "px";
    } 
  }
  if (
    (Zombie2Y >= JugadorYTrucho-50) &
    (Zombie2Y <= JugadorYTrucho+50) &
    (Zombie2X <= JugadorX+50) &
    (Zombie2X >= JugadorX-50)
  ) {
    if (VidaJugador > 0) {
      VidaJugador -= 2;
      Vida.style.width = VidaJugador*2  + "px";
    } 
  }
  if (
    (Zombie3Y >= JugadorYTrucho-50) &
    (Zombie3Y <= JugadorYTrucho+50) &
    (Zombie3X <= JugadorX+50) &
    (Zombie3X >= JugadorX-50)
  ) {
    if (VidaJugador > 0) {
      VidaJugador -= 2;
      Vida.style.width = VidaJugador*2  + "px";
    } 
}
  if (
    (Zombie4Y >= JugadorYTrucho-50) &
    (Zombie4Y <= JugadorYTrucho+50) &
    (Zombie4X <= JugadorX+50) &
    (Zombie4X >= JugadorX-50)
  ) {
    if (VidaJugador > 0) {
      VidaJugador -= 2;
      Vida.style.width = VidaJugador*2  + "px";
    } 
  }
}, 16);

/*Funcion para El Movimiento del jugador */
const Jugador = {
  Element: document.getElementById("Jugador1"),
  MovimientoY: 0,
  PermitirY: 0,
  PermitirX: 0,
  ActivoIzq: 0,
  ActivoDer: 0,
  MovimientoX: 0,
  ActivoArr: 0,
  ActivoAba: 1,
  step: 1,

  /*Funcion para KeyDown */
  move: function (direccion) {
    switch (direccion) {
      case "ArrowUp":
        if (this.PermitirY == 0) {
          MovimientoY = setInterval(() => {
            if (JugadorY > 0) {
              this.ActivoAba=0,
              this.ActivoArr=1,
              this.PermitirY = 1;
              JugadorY = JugadorY - this.step;
              this.Element.style.top = JugadorY + "px";
              if (this.PermitirX==0){
                this.ActivoIzq=0,
              this.ActivoDer=0,
                this.Element.style.rotate= "180deg";
              }
              else if(this.PermitirX==1){
                if(this.ActivoIzq==1){
                  this.Element.style.rotate="135deg";
                }
                if(this.ActivoDer==1){
                this.Element.style.rotate="225deg";
              }
            }
            }
          }, 6);
        }
        break;

      case "ArrowDown":
        if (this.PermitirY == 0) {
          MovimientoY = setInterval(() => {
            if (JugadorY < 450) {
              this.ActivoAba=1,
              this.ActivoArr=0,
              this.PermitirY = 1;
              JugadorY = JugadorY + this.step;
              this.Element.style.top = JugadorY + "px";
              if (this.PermitirX==0){
                this.ActivoIzq=0,
              this.ActivoDer=0,
                this.Element.style.rotate= "0deg";
              }else if(this.PermitirX==1){
                if(this.ActivoIzq==1){
                  this.Element.style.rotate="45deg";
                }
                if(this.ActivoDer==1){
                this.Element.style.rotate="315deg";
              }
            }
            }
          }, 6);
        }
        break;

      case "ArrowLeft":
        if (this.PermitirX == 0) {
          MovimientoX = setInterval(() => {
            if (JugadorX > 50) {
              this.ActivoIzq=1,
              this.ActivoDer=0,
              this.PermitirX = 1;
              JugadorX = JugadorX - this.step;
              this.Element.style.left = JugadorX + "px";
              if (this.PermitirY==0){
                this.Element.style.rotate= "90deg";
              }
            }
          }, 6);
        }

        break;

      case "ArrowRight":
        if (this.PermitirX == 0) {
          MovimientoX = setInterval(() => {
            if (JugadorX < 750) {
              this.ActivoIzq=0,
              this.ActivoDer=1,
              this.PermitirX = 1;
              JugadorX = JugadorX + this.step;
              this.Element.style.left = JugadorX + "px";
              if (this.PermitirY==0){
                this.Element.style.rotate= "270deg";
              }
            }
          }, 6);
        }

        break;

        case "KeyW":
          if (this.PermitirY == 0) {
            MovimientoY = setInterval(() => {
              if (JugadorY > 0) {
                this.ActivoAba=0,
                this.ActivoArr=1,
                this.PermitirY = 1;
                JugadorY = JugadorY - this.step;
                this.Element.style.top = JugadorY + "px";
                if (this.PermitirX==0){
                  this.ActivoIzq=0,
                this.ActivoDer=0,
                  this.Element.style.rotate= "180deg";
                }
                else if(this.PermitirX==1){
                  if(this.ActivoIzq==1){
                    this.Element.style.rotate="135deg";
                  }
                  if(this.ActivoDer==1){
                  this.Element.style.rotate="225deg";
                }
              }
              }
            }, 6);
          }
          break;
  
        case "KeyS":
          if (this.PermitirY == 0) {
            MovimientoY = setInterval(() => {
              if (JugadorY < 450) {
                this.ActivoAba=1,
                this.ActivoArr=0,
                this.PermitirY = 1;
                JugadorY = JugadorY + this.step;
                this.Element.style.top = JugadorY + "px";
                if (this.PermitirX==0){
                  this.ActivoIzq=0,
                this.ActivoDer=0,
                  this.Element.style.rotate= "0deg";
                }else if(this.PermitirX==1){
                  if(this.ActivoIzq==1){
                    this.Element.style.rotate="45deg";
                  }
                  if(this.ActivoDer==1){
                  this.Element.style.rotate="315deg";
                }
              }
              }
            }, 6);
          }
          break;
  
        case "KeyA":
          if (this.PermitirX == 0) {
            MovimientoX = setInterval(() => {
              if (JugadorX > 50) {
                this.ActivoIzq=1,
                this.ActivoDer=0,
                this.PermitirX = 1;
                JugadorX = JugadorX - this.step;
                this.Element.style.left = JugadorX + "px";
                if (this.PermitirY==0){
                  this.Element.style.rotate= "90deg";
                }
              }
            }, 6);
          }
  
          break;
  
        case "KeyD":
          if (this.PermitirX == 0) {
            MovimientoX = setInterval(() => {
              if (JugadorX < 750) {
                this.ActivoIzq=0,
                this.ActivoDer=1,
                this.PermitirX = 1;
                JugadorX = JugadorX + this.step;
                this.Element.style.left = JugadorX + "px";
                if (this.PermitirY==0){
                  this.Element.style.rotate= "270deg";
                }
              }
            }, 6);
          }
  
          break;

   case "Space":
    //|| this.PermitirX==1 & this.PermitirY==0 || this.PermitirX==0 & this.PermitirY==0 
    if(this.PermitirX==0 & this.PermitirY==1|| this.PermitirX==1 & this.PermitirY==0 || this.PermitirX==0 & this.PermitirY==0 ){
      if (CargadorBalas>=1){
        let sound2 = new Audio('./Sonidos/Glock1.wav');
        sound2.play();
        sound2.remove();
      let Bala= document.createElement("div");
      Bala.innerHTML="";
      Bala.id= "Plomo";
      document.getElementById("Contenedor").appendChild(Bala);
      BalaMovimiento1=0;
      BalaX = JugadorX +20;
      BalaY = JugadorY +20;
      BalaSteps = 3;
      if(this.ActivoDer==1){
        CargadorBalas-=1;
        ContadorBalas.innerText="Balas: "+CargadorBalas;
        Bala.style.left=BalaX+20+"px";
        Bala.style.top=BalaY+"px";
        BalaMovimiento= setInterval(() =>{
          BalaX+=BalaSteps;
          Bala.style.left=BalaX+"px";
          if(BalaX>=ZombieX & BalaX<=ZombieX+50 & BalaY>=ZombieY& BalaY<=ZombieY+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            ZombieX=PosRandX;
            ZombieY=500;
                        
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie2X & BalaX<=Zombie2X+50 & BalaY>=Zombie2Y& BalaY<=Zombie2Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            Zombie2X=PosRandX;
            Zombie2Y=-50;
            Zombie2.style.left=Zombie2X+"px";
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie3X & BalaX<=Zombie3X+50 & BalaY>=Zombie3Y& BalaY<=Zombie3Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie3Y=PosRandX;
            Zombie3X=0;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie4X & BalaX<=Zombie4X+50 & BalaY>=Zombie4Y& BalaY<=Zombie4Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie4Y=PosRandX;
            Zombie4X=800;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=790){
            clearInterval(BalaMovimiento)
            Bala.remove();
            CargadorBalas+=1;
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
        },5)
      
      }
      else if(this.ActivoIzq==1){
        CargadorBalas-=1;
        ContadorBalas.innerText="Balas: "+CargadorBalas;
        Bala.style.left=BalaX-20+"px";
        Bala.style.top=BalaY+"px";
        BalaMovimiento= setInterval(() =>{
          BalaX-=BalaSteps;
          Bala.style.left=BalaX+"px";
          if(BalaX>=ZombieX & BalaX<=ZombieX+50 & BalaY>=ZombieY& BalaY<=ZombieY+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            ZombieX=PosRandX;
            ZombieY=500;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie2X & BalaX<=Zombie2X+50 & BalaY>=Zombie2Y& BalaY<=Zombie2Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            Zombie2X=PosRandX;
            Zombie2Y=-50;
            Zombie2.style.left=Zombie2X+"px";
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie3X & BalaX<=Zombie3X+50 & BalaY>=Zombie3Y& BalaY<=Zombie3Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie3Y=PosRandX;
            Zombie3X=0;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie4X & BalaX<=Zombie4X+50 & BalaY>=Zombie4Y& BalaY<=Zombie4Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie4Y=PosRandX;
            Zombie4X=800;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX<=0){
            clearInterval(BalaMovimiento)
            Bala.remove();
            CargadorBalas+=1;
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
        },5)
      }
      else if(this.ActivoArr==1){
        CargadorBalas-=1;
        ContadorBalas.innerText="Balas: "+CargadorBalas;
        Bala.style.left=BalaX+"px";
        Bala.style.top=BalaY-20+"px";
        BalaMovimiento= setInterval(() =>{
          BalaY-=BalaSteps;
          Bala.style.top=BalaY+"px";
          if(BalaX>=ZombieX & BalaX<=ZombieX+50 & BalaY>=ZombieY& BalaY<=ZombieY+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            ZombieX=PosRandX;
            ZombieY=500;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie2X & BalaX<=Zombie2X+50 & BalaY>=Zombie2Y& BalaY<=Zombie2Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            Zombie2X=PosRandX;
            Zombie2Y=-50;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie3X & BalaX<=Zombie3X+50 & BalaY>=Zombie3Y& BalaY<=Zombie3Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie3Y=PosRandX;
            Zombie3X=0;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie4X & BalaX<=Zombie4X+50 & BalaY>=Zombie4Y& BalaY<=Zombie4Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie4Y=PosRandX;
            Zombie4X=800;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaY<=0){
            clearInterval(BalaMovimiento)
            Bala.remove();
            CargadorBalas+=1;
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
        },5)
      }
      else if(this.ActivoAba==1){
        CargadorBalas-=1;
        ContadorBalas.innerText="Balas: "+CargadorBalas;
        Bala.style.left=BalaX+"px";
        Bala.style.top=BalaY+20+"px";
        BalaMovimiento= setInterval(() =>{
          BalaY+=BalaSteps;
          Bala.style.top=BalaY+"px";
          if(BalaX>=ZombieX & BalaX<=ZombieX+50 & BalaY>=ZombieY& BalaY<=ZombieY+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            ZombieX=PosRandX;
            ZombieY=500;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie2X & BalaX<=Zombie2X+50 & BalaY>=Zombie2Y& BalaY<=Zombie2Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (800 -1 +1))+1;
            Zombie2X=PosRandX;
            Zombie2Y=-50;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie3X & BalaX<=Zombie3X+50 & BalaY>=Zombie3Y& BalaY<=Zombie3Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie3Y=PosRandX;
            Zombie3X=0;
            
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaX>=Zombie4X & BalaX<=Zombie4X+50 & BalaY>=Zombie4Y& BalaY<=Zombie4Y+50){
            Puntaje = Puntaje +=500;
            Puntos.innerText = "Puntos: " + Puntaje;
            PosRandX=Math.floor(Math.random() * (500 -1 +1))+1;
            Zombie4Y=PosRandX;
            Zombie4X=800;
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
          else if(BalaY>=500){
            clearInterval(BalaMovimiento)
            Bala.remove();
            CargadorBalas+=1;
            ContadorBalas.innerText="Balas: "+CargadorBalas;
          }
        },5)
      }
    }
  }
      default:
        break;

  
    }
  },
  /*Funcion para KeyUp */
  Stop: function (direccion) {
    switch (direccion) {
      case "ArrowUp":
        clearInterval(MovimientoY);
        this.PermitirY = 0;
       break;
      case "ArrowDown":
        clearInterval(MovimientoY);
        this.PermitirY = 0;
        break;
      case "ArrowLeft":
        clearInterval(MovimientoX);
        this.PermitirX = 0;
        break;
      case "ArrowRight":
        clearInterval(MovimientoX);
        this.PermitirX = 0;
        break;
      case "KeyW":
        clearInterval(MovimientoY);
        this.PermitirY = 0;
        break;
      case "KeyS":
        clearInterval(MovimientoY);
        this.PermitirY = 0;
        break;
      case "KeyA":
        clearInterval(MovimientoX);
        this.PermitirX = 0;
        break;
      case "KeyD":
        clearInterval(MovimientoX);
        this.PermitirX = 0;
        break;

      default:
        break;
    }
  },
};

/*Funciones de key Press y Up*/
onkeydown = (key) => {
  Jugador.move(key.code);
};
onkeyup = (key) => {
  Jugador.Stop(key.code);
};
})
//crear FUERZAS
var loadSpriteSheets;


//Creating animations from sprite sheets
//Menu
var background_Menu;
//como jugar
var como_jugar;
// instrucciones
var instruc;

//_______________________________________________

//ANIMACIONES

//luz
var sprite_sheet_luz;
var sprite_sheet_l;
var luz_animation;

//cara isa expresiones
var sprite_sheet_expresiones;
var sprite_sheet_i;
var isa_animation;

function preload() {
  
  // load home
  background_Menu = loadImage('Home/home_818_593.png');
  //como jugar
  como_jugar = loadImage('Home/como_jugar_110_53.png');
  // instrucciones
  instruc = loadImage('Home/instrucciones_484_463.png')
  
  //ANIMACIONES
    //luz
  sprite_sheet_luz = loadSpriteSheet('Home/luz_indicadora_home_103-329_105-672.png', 103.329, 105.672, 15);
  luz_animation = loadAnimation(sprite_sheet_luz);
  
    //isa expresiones
  sprite_sheet_expresiones = loadSpriteSheet('Home/expreciones_home_78_835.png', 78, 78, 24);
  isa_animation = loadAnimation(sprite_sheet_expresiones);
  
  //_________________________________________________________________________________


}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //1275,750
  instruc.onMousePressed = function() {
    var n = instruc;
    n.visible = true;
  }

}

function draw() {
  clear();


  //show background
  image(background_Menu, 0, 0, 818, 593);
  
   //como jugar
  image(como_jugar, 595, 220, 110, 53);
  
  // instrucciones
  
  
  
  luz_animation.play();
  isa_animation.play();
  
  
  //luz parpadeante
  animation(luz_animation, 140, 430, 15);

 //isa expresiones
  animation(isa_animation, 120, 70, 24);
  
//  if(como_jugar.IsPressed){
//    image(instruc, 160,70, 484,463);
//  }
//    como_jugar.onMousePressed =function() {
//    instruc.visible = true;//  }

 drawSprites();
}

//function mousePressed() {

//}











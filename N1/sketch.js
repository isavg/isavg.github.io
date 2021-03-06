//srpite Viento
 var viento;

//<<< PARA PRIMER CLICK
var estado = -1;

//crear FUERZAS
var loadSpriteSheets;
var GRAVITY;
var JUMP = 17;

//<<COELTIBLES
var collectibles;

//Creating animations from sprite sheets
var background_N1;
// load tigera con cuerda
var tigera_cuerda;
//pin tomate
var pin_tomate;
//pin amarillo
var pin_amarillo;
//focos
var foco;
//ventilador hacia derecha
var ventilador_hacia_derecha;
//ventilador hacia izkierda
var ventilador_hacia_izkierda;
//ventilador hacia abajo
var ventilador_hacia_abajo;
//pinchos
var pinchos;
//// maletin
//var maletin;
// cuerda amarilla
var cuerda_amarilla;
//linea de corte
var linea_corte;
//mano señalador
var dedo_desliz;
//txt cortar
var txt_cortar;
//txt activar aire
var txt_aire;

//SPRITES FIJOS sin SPRITESHEETS

////maletin
//var sprite_sheet_maletin;

//focos
var sprite_sheet_focos;

//ventilador hacia abajo
var sprite_sheet_vent_hacia_abajo;

//ventilador hacia derecha
var sprite_sheet_vent_hacia_der;

//ventilador hacia izquierda
var sprite_sheet_vent_izk;

var sprite_sheet_cuerda_amarilla;
//ANIMACIONES

//_________
//MALETIN
var m;
var m1;
var sprite_sheet_maletin;
var maletin;

//BURBUJA
var b;
var b1;
var sprite_sheet_burbuja;
var burbuja_normal;
//_________

//TIJERAS
var t;
var t1;
var sprite_sheet_tijera;
var animation_tijera;

//burbuja explotar
var burbuja_explode;
//burbuja explotar
var burbuja_acoger;

var burbuja_normal = [
  {"name": "burbuja_normal_00", "frame": {"x": 0,"y": 0,"width": 176,"height": 175}}
    
  ]

//burbuja explotar
var explode_frames = [
  // X y Y es la ubicacion  en el spriteSheet y width y heigth son el tamaño de los frames por eso son iguales
  {"name": "burbuja_explotar01","frame": {"x": 0,"y": 0,"width": 176,"height": 175}},
  {"name": "burbuja_explotar02","frame": {"x": 177,"y": 0,"width": 176,"height": 175}}, 
  {"name": "burbuja_explotar03","frame": {"x": 354,"y": 0,"width": 176,"height": 175}}, 
  {"name": "burbuja_explotar04","frame": {"x": 531,"y": 0,"width": 176,"height": 175}}, 
  {"name": "burbuja_explotar05","frame": {"x": 708,"y": 0,"width": 176,"height": 175}}, 
  {"name": "burbuja_explotar06","frame": {"x": 885,"y": 0,"width": 176,"height": 175}}, 
  {"name": "burbuja_explotar07","frame": {"x": 1062,"y": 0,"width": 176,"height": 175}},
  {"name": "burbuja_explotar08","frame": {"x": 1239,"y": 0,"width": 176,"height": 175}
  }

];

//burbuja acoger
var embrace_frames = [{"name": "burbuja_embrace01","frame": {"x": 0,"y": 176,"width": 176,"height": 175}}, 
{"name": "burbuja_embrace02","frame": {"x": 177,"y": 176,"width": 176,"height": 175}}, 
{"name": "burbuja_embrace03","frame": {"x": 354,"y": 176,"width": 176,"height": 175}}, 
{"name": "burbuja_embrace04","frame": {"x": 531,"y": 176,"width": 176,"height": 175}}, 
{"name": "burbuja_embrace05","frame": { "x": 708,"y": 176,"width": 176,"height": 175}}

];



function preload() {
  //specify width and height of each frame and number of frames, width,height, numero de frames
  //burbuja explotar
  explode = loadSpriteSheet('1erN/burbujas_anim_176_175.png', explode_frames);
  //burbuja acoger
  embrace = loadSpriteSheet('1erN/burbujas_anim_176_175.png', embrace_frames);

  //tigeras

  sprite_sheet_tijera = loadSpriteSheet('1erN/tigeras_68-67_77-666.png', 69, 78.2, 9);
  animation_tijera = loadAnimation(sprite_sheet_tijera);
  //______

  //pasar al SpriteSheet
  burbuja_explode = loadAnimation(explode);
  burbuja_acoger = loadAnimation(embrace);

  //____________________________
  //<<//create Sprite foco1
  //<<sprite_sheet_focos = createSprite(270, 85, 51, 51);
  //<<sprite_sheet_focos.addImage('foco1', loadImage('1erN/foco_idea_51.png'));

  //<<//create Sprite foco2
  //<<sprite_sheet_focos = createSprite(510, 205, 51, 51);
  //<<sprite_sheet_focos.addImage('foco1', loadImage('1erN/foco_idea_51.png'));

 //<< //create Sprite foco3
  //<<sprite_sheet_focos = createSprite(665, 110, 51, 51);
  //<<sprite_sheet_focos.addImage('foco1', loadImage('1erN/foco_idea_51.png'));

  //_____
  
  
  
  
  ////create Sprite tijera cuerda
  //sprite_sheet_tijera_cuerda = createSprite(603, 165, 73, 224.67);
  //sprite_sheet_tijera_cuerda.addImage('tijera_cuerda', loadImage('1erN/tigera_soga_73_224-67.png'));

  //create Sprite pin tomate1
  sprite_pin_tomate = createSprite(615, 60, 43, 5);
  sprite_pin_tomate.addImage('pin_tomate', loadImage('1erN/pin_tomate_43_55.png'));

  //create Sprite pin tomate2
  sprite_pin_tomate = createSprite(645, 360, 43, 5);
  sprite_pin_tomate.addImage('pin_tomate', loadImage('1erN/pin_tomate_43_55.png'));

  //create Sprite pin amarillo
  sprite_sheet_pin_amarillo = createSprite(270, 200, 56, 57);
  sprite_sheet_pin_amarillo.addImage('pin_amarillo', loadImage('1erN/pin_amarillo_56_57.png'));

  //create Sprite ventilador hacia izkierda
  sprite_sheet_ventilador_hacia_izkierda = createSprite(735, 260, 167, 15);
  sprite_sheet_ventilador_hacia_izkierda.addImage('ventilador_hacia_izkierda', loadImage('1erN/ventilador_a_izkierda_167_151.png'));

  //create Sprite ventilador hacia abajo
  sprite_sheet_ventilador_hacia_abajo = createSprite(470, 85, 109, 170);
  sprite_sheet_ventilador_hacia_abajo.addImage('ventilador_hacia_abajo', loadImage('1erN/ventilador_a_abajo_109_170.png'));
  //sprite_sheet_ventilador_hacia_abajo.colliderType = "image";
  //sprite_sheet_ventilador_hacia_abajo.rotation = 30;

  //sprite_sheet_ventilador_hacia_abajo.debug = true;

  //create Sprite pinchos
  sprite_sheet_pinchos = createSprite(390, 120, 35, 197);
  sprite_sheet_pinchos.addImage('pinchos', loadImage('1erN/pinchos_35_197.png'));

  ////create Sprite maletin
  //sprite_sheet_maletin = createSprite(mouseX, mouseY, 117, 111);
  //sprite_sheet_maletin = createSprite(600, 510, 117, 111);
  //sprite_sheet_maletin.addImage('maletin', loadImage('1erN/maletin_117_111.png'));



  //create Sprite linea corte
  sprite_sheet_linea_corte = createSprite(635, 165, 210, 1);
  sprite_sheet_linea_corte.addImage('linea de corte', loadImage('1erN/linea_corte_210_10.png'));

  //create Sprite dedo desliz
  sprite_sheet_dedo_desliz = createSprite(660, 190, 71, 74);
  sprite_sheet_dedo_desliz.addImage('fdedo_desliz', loadImage('1erN/dedo_indicador_71_74.png'));

  //create Sprite txt cortar
  sprite_sheet_txt_cortar = createSprite(720, 102, 171, 183);
  sprite_sheet_txt_cortar.addImage('txt_cortar', loadImage('1erN/txt_deslizar_dedo_171_183.png'));

  //create Sprite tkt aire
  sprite_sheet_txt_aire = createSprite(280, 360, 188, 167);
  sprite_sheet_txt_aire.addImage('txt_aire', loadImage('1erN/txt_activar_aire_188_167.png'));

//_________________________________________
//>> AKI BURBUJA
  sprite_sheet_burbuja = loadSpriteSheet('1erN/burbujas_anim_176_175.png', burbuja_normal);
  burbuja_normal = loadAnimation(sprite_sheet_burbuja);


  //create Sprite tijera cuerda
  sprite_sheet_tijera_cuerda = createSprite(603, 165, 73, 224.67);
  sprite_sheet_tijera_cuerda.addImage('tijera_cuerda', loadImage('1erN/tigera_soga_73_224-67.png'));


  //create Sprite ventilador hacia derecha
  sprite_sheet_ventilador_hacia_derecha = createSprite(250, 495, 167, 151);
  sprite_sheet_ventilador_hacia_derecha.addImage('ventilador_hacia_derecha', loadImage('1erN/ventilador_a_derecha_167_151.png'));


  //create Sprite cuerda amarilla
  sprite_sheet_cuerda_amarilla = createSprite(460, 294, 396.67, 147.333);
  sprite_sheet_cuerda_amarilla.addImage('cuerda_amarilla', loadImage('1erN/cuerda_amarilla_396-67_147-333.png'));
  sprite_sheet_cuerda_amarilla.setCollider("rectangle", 150, 60, 30, 30);
 // sprite_sheet_cuerda_amarilla.debug = true;
//___________________________________________________

  //_____  solo imagenes
  // load home
  background_N1 = loadImage('1erN/fondo_nivel1.png');


}

function setup() {
  createCanvas(810, 600);
  GRAVITY = 0.4;
  viento = new Group();
  aviento = new Group();
  iviento = new Group();
  // displayWidth, displayHeight

  //focos para recoger



//MALETIN

m = createSprite(600,510,117,111);
m.addImage('maletin', loadImage('1erN/maletin_117_111.png'));
m.setCollider('rectangle',0,0,57);
m.debug = true;


  //TIGERAS ANIM Abajo
  t = createSprite(600, 240, 70, 77);
  t.addAnimation('cortar', animation_tijera);
  t.setCollider('rectangle', 0, 0, 70, 77);
  t.visible = false;
  //t.debug = true;

  //BURBUJA ANIM
  
    b = createSprite(410, 495,176,175);
    b.addAnimation('burbnormal',burbuja_normal);
    b.setCollider("circle", 0, 0, 80);
    b.debug = true;

  //SPRITES PARA EL VENTILADOR HACIA DERECHA
  sprite_sheet_ventilador_hacia_derecha.onMousePressed = function() {
   var v = createSprite(mouseX, mouseY, 30, 30);
    v.setCollider("rectangle", 0, 0, 15, 15);
    v.velocity.x = random(3, 7);
    v.life = 40;
    viento.add(v);
  }

  //SPRITES PARA EL VENTILADOR HACIA ABAJO
  sprite_sheet_ventilador_hacia_izkierda.onMousePressed = function() {
    //ventilador de abajo
    var a = createSprite(mouseX, mouseY, 30, 30);
    a.setCollider("rectangle",0,0,15,15);
    a.velocity.x = random(-3, -5);
    a.life = 40;
    aviento.add(a);

    //s.velocity.y = random(-5,5);
  }

  //SPRITES PARA EL VENTILADOR HACIA IZKIERDA
  sprite_sheet_ventilador_hacia_abajo.onMousePressed = function() {
    var i = createSprite(mouseX, mouseY, 30, 30);
    i.setCollider("rectangle",0,0,15,15);
    i.velocity.y = random(2, 2);
    i.life = 40;
    iviento.add(i);
  }

  //<<<<<<<<<<<<AKIIII>CORTAR LA SOGA: TIGERA CORTAR
  sprite_sheet_tijera_cuerda.onMousePressed = function() {
      t.visible = true;
      t.velocity.y = 2;
    }
    //tigera_animation.velocity.y = (mouseY-tigera.position.y)/10;

  sprite_sheet_tijera_cuerda.onMouseReleased = function() {
    sprite_sheet_tijera_cuerda.visible = !sprite_sheet_tijera_cuerda;
  }
  
  
  //<<COELTIBLES
  collectibles = new Group();
  
  {
  var foco1 = createSprite(270, 85, 51, 51);
  foco1.addImage('foco1', loadImage('1erN/foco_idea_51.png'));
  collectibles.add(foco1);
  
  var foco2 = createSprite(510, 205, 51, 51);
  foco2.addImage('foco1', loadImage('1erN/foco_idea_51.png'));
  collectibles.add(foco2);
  
  var foco3 = createSprite(665, 110, 51, 51);
  foco3.addImage('foco1', loadImage('1erN/foco_idea_51.png'));
  collectibles.add(foco3);
  }

  //sprite_sheet_ventilador_hacia_abajo.onMousePressed = function() {
  //print("collide");
  //}
}

function draw() {
  clear();




  //show background
  image(background_N1, 0, 0, 818, 595);
  
     b.overlap(viento, collect2);

 //>> BURBUJA PARA ARRIBA

  if(b.position.x > m.position.x){
    b.velocity.x = 0;
     b.velocity.y = -2-GRAVITY;
     m.velocity.y = -2-GRAVITY;
   }
  
  //maletin.collide(focos);
  //maletin.overlap(focos, collect);

  //________________________________________

  ////burbuja explotando
  //animation(burbuja_explode, 410, 495, 9);
  //animation(burbuja_acoger, 410, 495, 5);

  //TIJERAS
  // grupo.displace(pelota);

  //COLLIDERS

  //maletin.position.x =100;
  //maletin.position.y =100;
  //cuerdam.position.x = mouseX;
  //cuerdam.position.y = mouseY;

  //maletin.collide(cuerdam);
  //   if (estado === 0){
  //estado == 1;
  //sprite_sheet_txt_cortar.visible = !sprite_sheet_txt_cortar.mouseIsPressed;
  //sprite_sheet_txt_aire.visible = !sprite_sheet_txt_aire.mouseIsPressed;
  //sprite_sheet_dedo_desliz.visible = !sprite_sheet_dedo_desliz.mouseIsPressed;  
  //sprite_sheet_linea_corte.visible = !sprite_sheet_linea_corte.mouseIsPressed;
  //}
  //if (estado === 1){
  // estado == 2;
  //}

  if (t.overlap(sprite_sheet_cuerda_amarilla)) {
    sprite_sheet_cuerda_amarilla.visible = false;
    //print("desaparecer cuerda");
  }

//<<< PARA PRIMER CLICK


  drawSprites();
}

//<<< PARA PRIMER CLICK
function mouseClicked() {
  if(estado = -1){
sprite_sheet_linea_corte.visible= false;
sprite_sheet_dedo_desliz.visible= false;
sprite_sheet_txt_cortar.visible= false;
sprite_sheet_txt_aire.visible= false;
estado=0;
  };
  
  
}

//<< FOCOS COLECCIONABLES
function collect(collector, collected){
  
  collected.remove();
}

//<<MALETIN CON BURBUJA
function collect2(collector, collected)
{
  
  collector.velocity.x += 0.5;
  collected.remove();
}

//function mouseClicked(){
//  if(estado==0){
//    sprite_sheet_txt_cortar
//    sprite_sheet_txt_aire
//    sprite_sheet_dedo_desliz  
//    sprite_sheet_linea_corte
//    estado = 1000;
//  }
//}

//  function coleccionar(collector, collected) {
//    //collector.changeAnimation("");
//    collector.animation.rewind();
//    collected.remove();
//  }





//crear FUERZAS
var loadSpriteSheets;


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
// maletin
var maletin;
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

//maletin
var sprite_sheet_maletin;

//focos
var sprite_sheet_focos;

//ventilador hacia abajo
var sprite_sheet_vent_hacia_abajo;

//ventilador hacia derecha
var sprite_sheet_vent_hacia_der;

//ventilador hacia izquierda
var sprite_sheet_vent_izk;


//ANIMACIONES

//tigeras
var sprite_sheet_tigera;
var sprite_sheet_t;
var tigera_animation;

//burbuja explotar
var burbuja_explode;
//burbuja explotar
var burbuja_acoger;

//burbuja explotar
var explode_frames = [
  // X y Y es la ubicacion  en el spriteSheet y width y heigth son el tamaño de los frames por eso son iguales

  {
    "name": "burbuja_explotar01",
    "frame": {
      "x": 0,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar02",
    "frame": {
      "x": 177,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar03",
    "frame": {
      "x": 354,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar04",
    "frame": {
      "x": 531,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar05",
    "frame": {
      "x": 708,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar06",
    "frame": {
      "x": 885,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar07",
    "frame": {
      "x": 1062,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_explotar08",
    "frame": {
      "x": 1239,
      "y": 0,
      "width": 176,
      "height": 175
    }
  }

];

//burbuja acoger
var embrace_frames = [{
    "name": "burbuja_embrace01",
    "frame": {
      "x": 0,
      "y": 176,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_embrace02",
    "frame": {
      "x": 177,
      "y": 176,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_embrace03",
    "frame": {
      "x": 354,
      "y": 176,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_embrace04",
    "frame": {
      "x": 531,
      "y": 176,
      "width": 176,
      "height": 175
    }
  }, {
    "name": "burbuja_embrace05",
    "frame": {
      "x": 708,
      "y": 176,
      "width": 176,
      "height": 175
    }
  }

];


function preload() {
  //specify width and height of each frame and number of frames, width,height, numero de frames
  //burbuja explotar
  explode = loadSpriteSheet('1erN/burbujas_anim_176_175.png', explode_frames);
  //burbuja acoger
  embrace = loadSpriteSheet('1erN/burbujas_anim_176_175.png', embrace_frames);

  //tigeras
  sprite_sheet_tigera = loadSpriteSheet('1erN/tigeras_68-67_77-666.png', 68.67, 77.666, 9);
  tigera_animation = loadAnimation(sprite_sheet_tigera);

  //pasar al SpriteSheet
  burbuja_explode = loadAnimation(explode);
  burbuja_acoger = loadAnimation(embrace);

  //create Sprite foco
  sprite_sheet_focos = createSprite(280, 175, 51, 51);
  sprite_sheet_focos.addImage('foco1', loadImage('1erN/foco_idea_51.png'));

  //_____
  //create Sprite tijewra cuerda
  sprite_sheet_tijera_cuerda = createSprite(603, 165, 73, 224.67);
  sprite_sheet_tijera_cuerda.addImage('tijera_cuerda', loadImage('1erN/tigera_soga_73_224-67.png'));

  //create Sprite pin tomate1
  sprite_pin_tomate = createSprite(615, 60, 43, 5);
  sprite_pin_tomate.addImage('pin_tomate', loadImage('1erN/pin_tomate_43_55.png'));
  
    //create Sprite pin tomate2
  sprite_pin_tomate = createSprite(645, 360, 43, 5);
  sprite_pin_tomate.addImage('pin_tomate', loadImage('1erN/pin_tomate_43_55.png'));

  //create Sprite pin amarillo
  sprite_sheet_pin_amarillo = createSprite(270, 200, 56, 57);
  sprite_sheet_pin_amarillo.addImage('pin_amarillo', loadImage('1erN/pin_amarillo_56_57.png'));

  //create Sprite ventilador hacia derecha
  sprite_sheet_ventilador_hacia_derecha = createSprite(250, 495 , 167, 151);
  sprite_sheet_ventilador_hacia_derecha.addImage('ventilador_hacia_derecha', loadImage('1erN/ventilador_a_derecha_167_151.png'));

  //create Sprite ventilador hacia izkierda
  sprite_sheet_ventilador_hacia_izkierda = createSprite(735, 260, 167, 15);
  sprite_sheet_ventilador_hacia_izkierda.addImage('ventilador_hacia_izkierda', loadImage('1erN/ventilador_a_izkierda_167_151.png'));

  //create Sprite ventilador hacia abajo
  sprite_sheet_ventilador_hacia_abajo = createSprite(470, 85, 109, 170);
  sprite_sheet_ventilador_hacia_abajo.addImage('ventilador_hacia_abajo', loadImage('1erN/ventilador_a_abajo_109_170.png'));

  //create Sprite pinchos
  sprite_sheet_pinchos = createSprite(390, 120, 35, 197);
  sprite_sheet_pinchos.addImage('pinchos', loadImage('1erN/pinchos_35_197.png'));

  //create Sprite maletin
  sprite_sheet_maletin = createSprite(600, 510, 117, 111);
  sprite_sheet_maletin.addImage('maletin', loadImage('1erN/maletin_117_111.png'));

  //create Sprite cuerda amarilla
  sprite_sheet_cuerda_amarilla = createSprite(460, 294, 396.67, 147.333);
  sprite_sheet_cuerda_amarilla.addImage('cuerda_amarilla', loadImage('1erN/cuerda_amarilla_396-67_147-333.png'));

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






  //_____  solo imagenes
  // load home
  background_N1 = loadImage('1erN/fondo_nivel1.png');
 

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //1275,750

  //focos para recoger

  //Crear la explocion y añadir su animacion
  //explode_sprite.addAnimation('explotar', burbuja_explode);
}

function draw() {
  clear();

  //pausa y play de la animación
  if (mouseIsPressed) {
    tigera_animation.play();
  } else {
    tigera_animation.stop();
  }

  //show background
  image(background_N1, 0, 0, 818, 595);
  //maletin.collide(focos);
  //maletin.overlap(focos, collect);
  //tigera cortando
  animation(tigera_animation, 600, 240, 9);

  //burbuja explotando
  animation(burbuja_explode, 410, 495, 9);
  animation(burbuja_acoger, 410, 495, 5);



  drawSprites();
}

function coleccionar(collector, collected) {
  //collector.changeAnimation("");
  collector.animation.rewind();
  collected.remove();
}

function mousePressed() {
  tigera_animation.rewind();

  //ventilador de abajo
  var d = createSprite(mouseX, mouseY, 30, 30);
  d.velocity.x = random(3, 5);
  //s.velocity.y = random(-5,5);

  //ventilador derecha
  var r = createSprite(mouseX, mouseY, 30, 30);
  //j.velocity.x = random(3, 5);
  r.velocity.y = random(-5, 5);

  //ventilador arriba
  var u = createSprite(mouseX, mouseY, 30, 30);
  //u.velocity.x = random(3, 5);
  u.velocity.y = random(-5, 5);
}
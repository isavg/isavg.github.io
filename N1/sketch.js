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

  // load home
  background_N1 = loadImage('1erN/fondo_nivel1.png');
  // load tigera con cuerda
  tigera_cuerda = loadImage('1erN/tigera_soga_73_224-67.png');
  //load pin tomate
  pin_tomate = loadImage('1erN/pin_tomate_43_55.png');
  //load pin amarillo
  pin_amarillo = loadImage('1erN/pin_amarillo_56_57.png');
  //load foco
  foco = loadImage('1erN/foco_idea_51.png');
  //ventilador hacia derecha
  ventilador_hacia_derecha = loadImage('1erN/ventilador_a_derecha_167_151.png');
  //ventilador hacia derecha
  ventilador_hacia_izkierda = loadImage('1erN/ventilador_a_izkierda_167_151.png');
  //ventilador hacia abajo
  ventilador_hacia_abajo = loadImage('1erN/ventilador_a_abajo_109_170.png');
  //pinchos
  pinchos = loadImage('1erN/pinchos_35_197.png');
  //maletin
  maletin = loadImage('1erN/maletin_117_111.png');
  //cuerda amarilla
  cuerda_amarilla = loadImage('1erN/cuerda_amarilla_396-67_147-333.png');
  //linea de corte
  linea_corte = loadImage('1erN/linea_corte_210_10.png');
  // mano señalador
  dedo_desliz = loadImage('1erN/dedo_indicador_71_74.png');
  //txt cortar
  txt_cortar = loadImage('1erN/txt_deslizar_dedo_171_183.png');
  // txt activar aire
  txt_aire = loadImage('1erN/txt_activar_aire_188_167.png');

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //1275,750

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
  //tigera con soga
  image(tigera_cuerda, 564, 50, 73, 224.67);
  //cuerda amarilla
  image(cuerda_amarilla, 252, 227, 396.67, 147.333);
  //pin tomate1
  image(pin_tomate, 593, 18, 43, 55);
  //pin tomate2
  image(pin_tomate, 630, 330, 43, 55);
  //pin amarillo
  image(pin_amarillo, 222, 189, 56, 57);
  //foco1
  image(foco, 640, 85, 51, 51);
  //foco2
  image(foco, 480, 175, 51, 51);
  //foco3
  image(foco, 235, 60, 51, 51);
  //ventilador hacia derecha
  image(ventilador_hacia_derecha, 170, 420, 167, 151);
  //ventilador hacia derecha
  image(ventilador_hacia_izkierda, 655, 187, 167, 151);
  //ventilador hacia abajo
  image(ventilador_hacia_abajo, 430, 0, 109, 170);
  //pinchos
  image(pinchos, 370, 20, 35, 197);
  //maletin
  image(maletin, 540, 460, 117, 111);
  //linea de corte
  image(linea_corte, 510, 155, 210, 10);
  // mano señalador
  image(dedo_desliz, 640, 150, 71, 74);
  //txt cortar
  image(txt_cortar, 640, 10, 171, 183);
  // txt activar aire
  image(txt_aire, 180, 280, 188, 167);



  //tigera cortando
  animation(tigera_animation, 600, 240, 9);

  //burbuja explotando
  animation(burbuja_explode, 410, 495, 9);
  animation(burbuja_acoger, 410, 495, 5);


 drawSprites();
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





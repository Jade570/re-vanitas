let apple1, apple2, pear, banana, lamp, desk, laptop, skull, keyboard, basket, book, books;
let tx, ty, tz;
let rx, ry, rz;
let rotx, roty, rotz, transz;
let atmosphere, light, shine, colors;
let buttondiv, renderdiv, translatediv, rotatediv, propertydiv, howdiv1, howdiv2, howdiv3;
let txdiv, tydiv, tzdiv, rxdiv, rydiv, rzdiv, atmospherediv, lightdiv, shininessdiv, colordiv;
let renderbutton = [20];
let objectbutton = [20];
let selected;
let buttonmarginx = 65;
let buttonmarginy = 40;

let lightX, lightY;

let buttoni, buttonj;
let object = [20];
let token;
let i;


function preload() {
  apple1 = loadModel('assets/source/apple.obj');
  apple2 = loadModel('assets/source/apple2.obj');
  pear = loadModel('assets/source/Pear_1_19k_finished.obj');
  banana = loadModel('assets/source/banana.obj');
  desk = loadModel('assets/source/Table.obj');
  skull = loadModel('assets/source/skull.obj');
  lamp = loadModel('assets/source/DeskLamp_low.obj');
  laptop = loadModel('assets/source/Laptop.obj');
  keyboard = loadModel('assets/source/keyboard.obj');
  basket = loadModel('assets/source/basket.obj');
  book = loadModel('assets/source/book.obj');
  books = loadModel('assets/source/books.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(20);
  colorMode(HSB, 360, 100, 100);

  lightX = 0;
  lightY = 0;
  rotx=0; roty=0; rotz=0; transz=0;


  howdiv1 = createDiv('s : gui show _ h : gui hide _ space : screen capture');
  howdiv1.position(20,windowHeight-70);
  howdiv2 = createDiv('backspace/delete : delete selected object');
  howdiv2.position(20,windowHeight-50);
  howdiv3 = createDiv('ctrl+drag : light direction _ left/right drag : global rotation');
  howdiv3.position(20,windowHeight-30);

  translatediv = createDiv('translate');
  translatediv.position(10, 165);
  translatediv.id('translate');

  txdiv = createDiv('x');
  txdiv.position(10, 20);
  txdiv.id('tx');
  txdiv.parent('translate');
  tx = createSlider(-1000, 1000, 0);
  tx.position(10, 0);
  tx.parent('tx');
  tx.style('width', 100 + 'px');
  tx.id('txslider');

  tydiv = createDiv('y');
  tydiv.position(140, 20);
  tydiv.id('ty');
  tydiv.parent('translate');
  ty = createSlider(-1000, 1000, 0);
  ty.position(10, 0);
  ty.parent('ty');
  ty.style('width', 100 + 'px');
  ty.id('tyslider');

  tzdiv = createDiv('z');
  tzdiv.position(270, 20);
  tzdiv.id('tz');
  tzdiv.parent('translate');
  tz = createSlider(-1000, 1000, 0);
  tz.position(10, 0);
  tz.parent('tz');
  tz.style('width', 100 + 'px');
  tz.id('tzslider');


  rotatediv = createDiv('rotate');
  rotatediv.position(10, 210);
  rotatediv.id('rotate');

  rxdiv = createDiv('x');
  rxdiv.position(10, 20);
  rxdiv.id('rx');
  rxdiv.parent('rotate');
  rx = createSlider(0, TWO_PI, 0, 0.01);
  rx.position(10, 0);
  rx.parent('rx');
  rx.style('width', 100 + 'px');
  rx.id('rxslider');

  rydiv = createDiv('y');
  rydiv.position(140, 20);
  rydiv.id('ry');
  rydiv.parent('rotate');
  ry = createSlider(0, TWO_PI, 0, 0.01);
  ry.position(10, 0);
  ry.parent('ry');
  ry.style('width', 100 + 'px');
  ry.id('ryslider');

  rzdiv = createDiv('z');
  rzdiv.position(270, 20);
  rzdiv.id('rz');
  rzdiv.parent('rotate');
  rz = createSlider(0, TWO_PI, 0, 0.01);
  rz.position(10, 0);
  rz.parent('rz');
  rz.style('width', 100 + 'px');
  rz.id('rzslider');

  i = 0;

  renderdiv = createDiv('objects');
  renderdiv.id('renderdiv');
  renderdiv.position(10, 10);

  propertydiv = createDiv();
  propertydiv.id('propertydiv');
  propertydiv.position(10,120);

  atmospherediv = createDiv('brightness');
  atmospherediv.position(0,0);
  atmospherediv.id('atmospherediv');
  atmospherediv.parent(propertydiv);
  atmosphere = createSlider(52,100,80);
  atmosphere.position(0,20);
  atmosphere.parent('atmospherediv');
  atmosphere.id('atmosphereslider');
  atmosphere.style('width', 85.25 + 'px');

  lightdiv = createDiv('lightcolor');
  lightdiv.position(98.25,0);
  lightdiv.id('lightdiv');
  lightdiv.parent(propertydiv);
  light = createSlider(0,360,0);
  light.position(0,20);
  light.parent('lightdiv');
  light.id('lightslider');
  light.style('width', 85.25 + 'px');

  shininessdiv = createDiv('shininess');
  shininessdiv.position(196.5,0);
  shininessdiv.id('shininessdiv');
  shininessdiv.parent(propertydiv);
  shine = createSlider(1,1000,1);
  shine.position(0,20);
  shine.parent('shininessdiv');
  shine.id('shininessslider');
  shine.style('width', 85.25 + 'px');

  colordiv = createDiv('objectcolor');
  colordiv.position(294.75,0);
  colordiv.id('colordiv');
  colordiv.parent(propertydiv);
  colors = createSlider(0,360,0);
  colors.position(0,20);
  colors.parent('colordiv');
  colors.id('colorslider');
  colors.style('width', 85.25 + 'px');

  buttondiv = createDiv('rendered');
  buttondiv.id('buttondiv');
  buttondiv.position(10, 265);

}


function resetslider() {
  document.getElementById('txslider').value = 0;
  document.getElementById('tyslider').value = 0;
  document.getElementById('tzslider').value = 0;
  document.getElementById('rxslider').value = 0;
  document.getElementById('ryslider').value = 0;
  document.getElementById('rzslider').value = 0;
  document.getElementById('shininessslider').value = 1;
  document.getElementById('colorslider').value=0;
}

function hidegui(){
  tx.hide(); ty.hide(); tz.hide();
  rx.hide(); ry.hide(); rz.hide();
  atmosphere.hide(); light.hide(); shine.hide(); colors.hide();
  buttondiv.hide(); renderdiv.hide(); translatediv.hide(); rotatediv.hide();// propertydiv.hide();
  txdiv.hide(); tydiv.hide(); tzdiv.hide(); rxdiv.hide(); rydiv.hide(); rzdiv.hide();
  atmospherediv.hide(); lightdiv.hide(); shininessdiv.hide(); colordiv.hide();
  for(let x = 0; x<11; x++){
    renderbutton[x].hide();
  }
  for(let x = 0; x<i; x++){
    objectbutton[x].hide();
  }
}

function showgui(){
  tx.show(); ty.show(); tz.show();
  rx.show(); ry.show(); rz.show();
  atmosphere.show(); light.show(); shine.show(); colors.show();
  buttondiv.show(); renderdiv.show(); translatediv.show(); rotatediv.show(); propertydiv.show();
  txdiv.show(); tydiv.show(); tzdiv.show(); rxdiv.show(); rydiv.show(); rzdiv.show();
  atmospherediv.show(); lightdiv.show(); shininessdiv.show(); colordiv.show();
  for(let x = 0; x<11; x++){
    renderbutton[x].show();
  }
  for(let x = 0; x<i; x++){
    objectbutton[x].show();
  }
}

function draw() {
  background(0);

  /////////////light settings////////////////////
  ambientLight(atmosphere.value()); //La
  specularColor(180+light.value(),100,100); // Ks
  fill(colors.value(),46,75,map(colors.value(),0,360,0.85,1));
  specularMaterial(colors.value(),46,75,map(colors.value(),0,360,0.5,1));

  directionalLight(light.value(),34,53,-lightX,-lightY,-1); // Ld and Ls



  noStroke();
  object[0] = new Desk(0, 0, 0);


  ///////////////////render button////////////////////

  renderbutton[0] = createButton('basket');
  renderbutton[0].position(buttonmarginx * 0, 30);
  renderbutton[0].parent('renderdiv');
  renderbutton[0].class('basket');

  renderbutton[1] = createButton('laptop');
  renderbutton[1].position(buttonmarginx * 1, 30);
  renderbutton[1].parent('renderdiv');
  renderbutton[1].class('laptop');

  renderbutton[2] = createButton('apple1');
  renderbutton[2].position(buttonmarginx * 2, 30);
  renderbutton[2].parent('renderdiv');
  renderbutton[2].class('apple1');

  renderbutton[3] = createButton('apple2');
  renderbutton[3].position(buttonmarginx * 3, 30);
  renderbutton[3].parent('renderdiv');
  renderbutton[3].class('apple2');

  renderbutton[4] = createButton('banana');
  renderbutton[4].position(buttonmarginx * 4, 30);
  renderbutton[4].parent('renderdiv');
  renderbutton[4].class('banana');

  renderbutton[5] = createButton('pear');
  renderbutton[5].position(buttonmarginx * 5, 30);
  renderbutton[5].parent('renderdiv');
  renderbutton[5].class('pear');

  renderbutton[6] = createButton('book');
  renderbutton[6].position(buttonmarginx * 0, 30 + buttonmarginy * 1);
  renderbutton[6].parent('renderdiv');
  renderbutton[6].class('book');

  renderbutton[7] = createButton('books');
  renderbutton[7].position(buttonmarginx * 1, 30 + buttonmarginy * 1);
  renderbutton[7].parent('renderdiv');
  renderbutton[7].class('books');

  renderbutton[8] = createButton('piano');
  renderbutton[8].position(buttonmarginx * 2, 30 + buttonmarginy * 1);
  renderbutton[8].parent('renderdiv');
  renderbutton[8].class('keyboard');

  renderbutton[9] = createButton('lamp');
  renderbutton[9].position(buttonmarginx * 3, 30 + buttonmarginy * 1);
  renderbutton[9].parent('renderdiv');
  renderbutton[9].class('lamp');

  renderbutton[10] = createButton('skull');
  renderbutton[10].position(buttonmarginx * 4, 30 + buttonmarginy * 1);
  renderbutton[10].parent('renderdiv');
  renderbutton[10].class('skull');


if(i<20){
    renderbutton[0].mousePressed(newbasket);
    renderbutton[1].mousePressed(newlaptop);
    renderbutton[2].mousePressed(newapple1);
    renderbutton[3].mousePressed(newapple2);
    renderbutton[4].mousePressed(newbanana);
    renderbutton[5].mousePressed(newpear);
    renderbutton[6].mousePressed(newbook);
    renderbutton[7].mousePressed(newbooks);
    renderbutton[8].mousePressed(newkeyboard);
    renderbutton[9].mousePressed(newlamp);
    renderbutton[10].mousePressed(newskull);
}




  ///////////////////debug translation///////////////
  //translate(200, 0, -1398);
  //rotateX(5.51);



  ///////////////setting translateion///////////////
  translate(100,0,-800+transz);
  rotateX(5.88);
  rotateX(rotx);
  rotateY(roty);
  rotateZ(rotz);

  //translate(tx.value(), ty.value(), slider.value());

  //fill(36,57,65);

  ////////////////////////render/////////////////////////
    for (let x = 0; x <= i; x++) {
      object[x].render(tx.value(), ty.value(), tz.value(), rx.value(), ry.value(), rz.value(), shine.value(), colors.value());

      switch (x) {
        case 1:
          objectbutton[1].mousePressed(objectclick1);
          break;

        case 2:

          objectbutton[2].mousePressed(objectclick2);
          break;
        case 3:

          objectbutton[3].mousePressed(objectclick3);
          break;
        case 4:

          objectbutton[4].mousePressed(objectclick4);
          break;
        case 5:

          objectbutton[5].mousePressed(objectclick5);
          break;
        case 6:

          objectbutton[6].mousePressed(objectclick6);
          break;
        case 7:

          objectbutton[7].mousePressed(objectclick7);
          break;
        case 8:

          objectbutton[8].mousePressed(objectclick8);
          break;
        case 9:

          objectbutton[9].mousePressed(objectclick9);
          break;
        case 10:

          objectbutton[10].mousePressed(objectclick10);
          break;
        case 11:

          objectbutton[11].mousePressed(objectclick11);
          break;
      }
      if (x >= 1) {
        if (object[x].token == true) {
          objectbutton[x].style('opacity', 1.0);
        } else if (object[x].token == false) {
          objectbutton[x].style('opacity', 0.6);
        }
      }
    }

}


function mouseDragged(){
  if (keyIsPressed && keyCode == CONTROL){
    lightX = (mouseX / windowWidth - 0.5) * 2;
    lightY = (mouseY / windowHeight - 0.5) * 2;
  }
  else if(mouseX>420 || mouseY>250){
    if(mouseButton === LEFT){
       rotx = map(mouseY, 0, windowHeight, -PI, PI);
       roty = map(mouseX, 0, windowWidth, -PI, PI);
    }
    if(mouseButton === RIGHT){
      rotz = map(mouseY, 0, windowHeight, -PI, PI);
      roty = map(mouseX, 0, windowWidth, -PI, PI);
    }
  }
}

function mouseWheel(event){
  transz-=event.delta;
}

function keyPressed() {
  if (keyCode === DELETE || keyCode === BACKSPACE) { //erase object
    if (i != 0) {
      objectbutton[selected].remove();

      for (let x = selected + 1; x <= i; x++) {
        buttoni = floor((x - 2) / 2);
        buttonj = (x - 2) % 2;
        objectbutton[x].position(0 + buttonj * 65, 30 + buttoni * 40);
        objectbutton[x - 1] = objectbutton[x];
        object[x - 1] = object[x];
      }

      if (selected == 1 && i == 1) {
        resetslider();
      } else if (selected == i) {
        document.getElementById('txslider').value = object[selected - 1].x;
        document.getElementById('tyslider').value = object[selected - 1].y;
        document.getElementById('tzslider').value = object[selected - 1].z;
        document.getElementById('rxslider').value = object[selected - 1].rx;
        document.getElementById('ryslider').value = object[selected - 1].ry;
        document.getElementById('rzslider').value = object[selected - 1].rz;
        document.getElementById('shininessslider').value = object[selected - 1].sh;
        document.getElementById('colorslider').value = object[selected - 1].colors;
        selected--;
        object[selected].toggle();
      } else if (selected < i) {
        document.getElementById('txslider').value = object[selected + 1].x;
        document.getElementById('tyslider').value = object[selected + 1].y;
        document.getElementById('tzslider').value = object[selected + 1].z;
        document.getElementById('rxslider').value = object[selected + 1].rx;
        document.getElementById('ryslider').value = object[selected + 1].ry;
        document.getElementById('rzslider').value = object[selected + 1].rz;
        document.getElementById('shininessslider').value = object[selected + 1].sh;
        document.getElementById('colorslider').value = object[selected + 1].colors;
        object[selected].toggle();
      }
      i--;
      object[i + 1] = null;
    }
  }

if(key == 's'){
  showgui();
}

else if(key == 'h'){
  hidegui();
}

else if (key == ' '){
  saveCanvas('re-vanitas','jpg');
}


}

/*
book texture: https://sketchfab.com/3d-models/book-texture-53624c51c9634fe9b74a2e5cdd4ffd3c
books: https://sketchfab.com/3d-models/books-71381d62759c46bda2ef9aa8d6d7c23a
table: https://sketchfab.com/3d-models/table-8d8bd092c4294c55ac726666306365d3
draft table lamp: https://sketchfab.com/3d-models/draft-table-lamp-41db8c0c7e0a433a99ae81e494c64676
skull : https://www.turbosquid.com/3d-models/free-c4d-mode-anatomy-body/623330
apple : https://sketchfab.com/3d-models/apple-e2891f3d4db94076ad43b24fef855856#download
pear: https://sketchfab.com/3d-models/pear-4e1534ae68394cdea113679e3271d9e6
banana: https://sketchfab.com/3d-models/banana-ada7c35a1a5742f1b4c528eb3daee35b
cc0 Textures-preview-3d-apple-002 : https://sketchfab.com/3d-models/cc0-textures-preview-3d-apple-002-c43b3cf0d7804b998b8cd3a131f494aa
midi controller keyboard : https://sketchfab.com/3d-models/midi-controller-keyboard-1d5198102a4746c48f68fc30817479ba
wicker basket v1 : https://free3d.com/3d-model/wicker-basket-v1--536042.html
*/

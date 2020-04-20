function newbasket(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  object[i] = new Applebasket();
  objectbutton[i] = createButton('basket');
  objectbutton[i].class('basket');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newlaptop(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Laptop();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('laptop');
  objectbutton[i].class('laptop');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newapple1(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Apple1();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('apple1');
  objectbutton[i].class('apple1');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newapple2(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Apple2();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('apple2');
  objectbutton[i].class('apple2');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newbanana(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Banana();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('banana');
  objectbutton[i].class('banana');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newpear(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Pear();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('pear');
  objectbutton[i].class('pear');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newbook(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Book();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('book');
  objectbutton[i].class('book');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newbooks(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Books();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('books');
  objectbutton[i].class('books');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newkeyboard(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Keyboard();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('piano');
  objectbutton[i].class('keyboard');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newlamp(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }
  resetslider();
  i++;
  selected = i;
  object[i] = new Lamp();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('lamp');
  objectbutton[i].class('lamp');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}

function newskull(){
  for (let x = 1; x<=i; x++){
    if(object[x].token == true){
      object[x].toggle();
    }
  }

  resetslider();
  i++;
  selected = i;
  object[i] = new Skull();
  buttoni = floor((selected-1)/2);
  buttonj = (selected-1) % 2;
  objectbutton[i] = createButton('skull');
  objectbutton[i].class('skull');
  objectbutton[i].id('button'+i);
  objectbutton[i].parent('buttondiv');
  objectbutton[i].position(0+buttonj*65, 30+buttoni*40);
}


//////////////////// object button function////////////////////////

function objectclick(num){
  for(let y = 1; y<num; y++){
    if(object[y].token == true){
      object[y].toggle();
    }
  }
  for(let y = i; y>num; y--){
    if(object[y].token == true){
      object[y].toggle();
    }
  }
  if(object[num].token == false){
      object[num].toggle();
  }
  document.getElementById('txslider').value=object[num].x;
  document.getElementById('tyslider').value=object[num].y;
  document.getElementById('tzslider').value=object[num].z;
  document.getElementById('rxslider').value=object[num].rx;
  document.getElementById('ryslider').value=object[num].ry;
  document.getElementById('rzslider').value=object[num].rz;
  document.getElementById('shininessslider').value = object[num].sh;
  document.getElementById('colorslider').value = object[num].colors;
}



function objectclick1(){
  selected = 1;
  return objectclick(1);
}

function objectclick2(){
  selected = 2;
  return objectclick(2);
}

function objectclick3(){
  selected = 3;
  return objectclick(3);
}

function objectclick4(){
  selected = 4;
  return objectclick(4);
}

function objectclick5(){
  selected = 5;
  return objectclick(5);
}

function objectclick6(){
  selected = 6;
  return objectclick(6);
}

function objectclick7(){
  selected = 7;
  return objectclick(7);
}

function objectclick8(){
  selected = 8;
  return objectclick(8);
}

function objectclick9(){
  selected = 9;
  return objectclick(9);
}

function objectclick10(){
  selected = 10;
  return objectclick(10);
}

function objectclick11(){
  selected = 11;
  return objectclick(11);
}

function objectclick12(){
  selected = 12;
  return objectclick(12);
}

function objectclick13(){
  selected = 13;
  return objectclick(13);
}

function objectclick14(){
  selected = 14;
  return objectclick(14);
}

function objectclick15(){
  selected = 15;
  return objectclick(15);
}

function objectclick16(){
  selected = 16;
  return objectclick(16);
}

function objectclick17(){
  selected = 17;
  return objectclick(17);
}

function objectclick18(){
  selected = 18;
  return objectclick(18);
}

function objectclick19(){
  selected = 19;
  return objectclick(19);
}

function objectclick20(){
  selected = 20;
  return objectclick(20);
}

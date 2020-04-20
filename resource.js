class Desk{
  constructor(x,y,z){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }
  render(){
    push();
    fill(28,47,39,0.9)
    translate(this.x,this.y,this.z);
    translate(0,windowHeight/6*7,0);
    scale(50);
    rotateX(PI);
    model(desk);
    pop();
  }
}

//////////addable objects/////////////////////

class Applebasket{
  constructor(){
    this.token = true;
    this.x=0;
    this.y=0;
    this.z=0;
    this.rx=0;
    this.ry=0;
    this.rz=0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos, ypos, zpos,rx,ry,rz,sh,colors){
      if (this.token == true){
        this.x = xpos;
        this.y = ypos;
        this.z = zpos;
        this.rx = rx;
        this.ry = ry;
        this.rz = rz;
        this.sh = sh;
        this.colors = colors;
      }
      else{
        this.x=this.x;
        this.y=this.y;
        this.z=this.z;
        this.rx = this.rx;
        this.ry = this.ry;
        this.rz = this.rz;
        this.sh = this.sh;
        this.colors = this.colors;
      }

      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
        push();
        translate(-270,-0.7,-200);
        rotateX(HALF_PI);
        rotateZ(HALF_PI*5/4);
        scale(10);
        model(basket);
        pop();
      pop();
    }



}

class Apple1 {
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,85+this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
      scale(1000);
      translate(0,-0.07,-0.24);
      rotateX(-HALF_PI*4/5);
      model(apple1);
      pop();
  }
}

class Apple2 {
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,85+this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    scale(200);
    translate(-0.2,-0.4,0);
    model(apple2);
    pop();
  }
}



class Banana{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    scale(240);
    model(banana);
    pop();
  }
}

class Book{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    translate(500,0,-100);
    model(book);
    pop();
  }

}

class Books{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    scale(25);
    translate(12,-11,-15);
    model(books);
    pop();
  }
}

class Laptop{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    translate(700,500,-700);
    rotateX(PI);
    scale(1000);
    model(laptop);
    pop();
  }
}

class Keyboard{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    translate(250,-30,350);
    scale(130);
    rotateX(PI);
    rotateY(PI);
    model(keyboard);
    pop();
  }
}

class Lamp{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    scale(10);
    rotateX(PI);
    translate(50,0,20);
    rotateY(-HALF_PI);
    model(lamp);
    pop();
  }
}

class Skull{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    translate(0,20,-200);
    rotateZ(PI);
    scale(0.4);
    model(skull);
    pop();
  }
}

class Pear{
  constructor(){
    this.token = true;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.sh=1;
    this.colors=0;
  }

  toggle(){
    if (this.token == true){
      this.token = false;
    }
    else{
      this.token = true;
    }
    return this.token;
  }

  render(xpos,ypos,zpos,rx,ry,rz,sh,colors){
    if (this.token == true){
      this.x = xpos;
      this.y = ypos;
      this.z = zpos;
      this.rx = rx;
      this.ry = ry;
      this.rz = rz;
      this.sh = sh;
      this.colors = colors;
    }
    else{
      this.x=this.x;
      this.y=this.y;
      this.z=this.z;
      this.rx = this.rx;
      this.ry = this.ry;
      this.rz = this.rz;
      this.sh = this.sh;
      this.colors = this.colors;
    }
      push();
      translate(this.x,this.y,this.z);
      rotateX(this.rx);
      rotateY(this.ry);
      rotateZ(this.rz);
      shininess(this.sh);
      fill(this.colors,46,75,map(this.colors,0,360,0.85,1));
      specularMaterial(this.colors,46,75,map(this.colors,0,360,0.5,1));
    scale(100);
    rotateZ(3);
    translate(0.51,0.5,8);
    model(pear);
    pop();
  }
}

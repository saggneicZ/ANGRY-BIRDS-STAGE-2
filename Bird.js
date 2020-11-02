class Bird extends BaseClass{ //bird inherites all the properties of base class
 
  constructor(x,y){ //we need to give x and y position to the bird
    super(x,y,50,50);//we pass x and y and width and height to super(BaseClass)
    this.image=loadImage("sprites/bird.png");// loading the image of the bird
  }
  display(){
    this.body.position.x=mouseX;//move thee bird with the mouse
    this.body.position.y=mouseY;// move with bird with the mouse 
    super.display(); //display the bird using super(BaseClass)

  }
}
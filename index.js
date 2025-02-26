// Add your Circle class here


class Circle {
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return 2 * this.radius
  }
  
    get circumference(){
    return 2 * Math.PI * this.radius

  }
  
    get area(){
    return  Math.PI * Math.pow(this.radius , 2) 

  }
  
  set diameter(circle){
    this.radius = circle / 2
  }
  
    set circumference(circle){
     this.radius = circle / Math.PI / 2
  }
}
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
  
  set diameter(radius){
    return 2 * radius
  }
  
    set circumference(){
     2 * Math.PI * this.radius
  }
}
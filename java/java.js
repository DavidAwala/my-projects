class animal{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}
class rabbit extends animal{
constructor(name,age){
    super(name,age)
}
}    
const rabbits= new rabbit('hawk',15)
console.log(rabbits)

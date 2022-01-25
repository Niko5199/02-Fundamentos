/*
    Recuerda que uno de los problemas de usar la 
    variable Var es que sus variables declaradas 
    se generan en un ambito global, eso no es lo que 
    aveces necesitamos.


    Acuerdate de los 3 posibles scopes que puede 
    existir en JavaScript uno de ellos el el 
    Scope Function 
    Scope Bloque
    Global Scope

    Sabes que let y const respetan todos los scope 
    pero var no  ya que sabemoms que var no respeta eso 

*/
var nombre = 'Wolverine'
console.log(nombre)


if(true) {
    var nombre = 'Magneto'
    var edad = 22;
}
console.log(edad)
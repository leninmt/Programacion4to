import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class HomeService {
hola = [{
    id:1,
    nombre : "josu"
    
},
{
    id:2,
    nombre : "jo "
    
},
{
    id:3,
    nombre : "jos"
    
}]

hol(id){
const res =  this.hola.find(objeto => objeto.id === id)
if(!res){
    throw new NotFoundException("No existe")
}
else{
    return res
}

}

all_items(){
    return this.hola
}



}

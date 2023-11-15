import { Body, Injectable, NotFoundException, Param, Post } from '@nestjs/common';
import { user } from 'src/interfaz/user.interfaz';


@Injectable()
export class UserService {
    usuario: user[] = [
        {
            id: 1,
            nombre: "Lenin",
            carrera: "software"


        },
        {
            id: 2,
            nombre: "Pepe",
            carrera: "software"


        },
        {
            id: 3,
            nombre: "Pipp",
            carrera: "Moda"


        },
        {
            id: 4,
            nombre: "Jose",
            carrera: "marketing"


        },
        {
            id: 5,
            nombre: "Rodrigo",
            carrera: "Arte Culinaria"


        },

    ]


    find_user_by_id(@Param('id')id : number){
       let dato = this.usuario.find(objeto => objeto.id === id)
       if(!dato)
       throw new NotFoundException("No existe");
    return dato;
    }



    all_users() {
        return this.usuario
    }

    create_user(userData: any) {
        const newUser = {
          id: this.usuario.length + 1,
          ...userData,
        };
    
        this.usuario.push(newUser);
    
        return newUser;
    }

}

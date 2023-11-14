import { Injectable, NotFoundException } from '@nestjs/common';
import { user } from 'src/interfaz/user.interfaz';


@Injectable()
export class UserService {
    usuario: user[] = [
        {
            id: 1,
            nombre: "josue",
            carrera: "software"


        },
        {
            id: 2,
            nombre: "jhon",
            carrera: "software"


        },
        {
            id: 3,
            nombre: "tanya",
            carrera: "gastronomia"


        },
        {
            id: 4,
            nombre: "Ramon",
            carrera: "software"


        },
        {
            id: 5,
            nombre: "pepe",
            carrera: "contro_incendiaos"


        },

    ]

    find_user_by_id(id) {
        let res
      
        if(!isNaN(id)){
            const a =  parseInt(id)
            res = this.usuario.find(objeto => objeto.id === a);
        }
        else if (typeof id === "string") {
            res = this.usuario.find(objeto => objeto.nombre === id);


           

        }
        if(!res){
            throw new NotFoundException("No existe")
        }

        return res


    }

    all_users() {
        return this.usuario
    }



}

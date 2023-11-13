import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor (public user:UserService){

    }
@Get(':id')
    find_user_by_id(@Param('id' ) id){
    
return this.user.find_user_by_id(id)

    }
@Get()
all_users(){
    return this.user.all_users()
}

}

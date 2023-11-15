import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/create-user.dto';


@Controller('user')
export class UserController {
    constructor (public user:UserService){

    }
@Get(':id')
    find_user_by_id(@Param('id', ParseIntPipe ) id, ){
    
return this.user.find_user_by_id(id)

    }
@Get()
all_users(){
    return this.user.all_users()
}

@Post()
create_user(@Body() userData: UserDto) {
  return userData;
    //return this.user.create_user(userData);
}

}

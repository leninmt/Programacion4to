import { All, Controller , Get, Param, ParseIntPipe } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
constructor(public  home:HomeService){}
 hora = [ "hola " , "holap"]
 @Get()
 trs(){
     return this.home.all_items()
 }


@Get(':id')
dos(@Param('id' ,ParseIntPipe) dato: string){

   

    return  this.home.hol(dato)
    
}


}

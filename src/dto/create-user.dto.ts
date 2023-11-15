import { IsString } from "class-validator";

export class UserDto{
    @IsString()
    readonly id:Number;
    @IsString()
    readonly nombre:String;
    @IsString()
    readonly carrera :string;

}
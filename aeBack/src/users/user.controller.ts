import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/users.entities';
import { LoginDto } from './dto/login.dto';
import { createUsuarioDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get() //Quando esta sem parametro, pega a rota do coontroller = users
  async getUsuarios(): Promise<User[]> { //Controlador da aplicação
    return this.UserService.getUsuarios();
  }

  @Get(':id')//quando esta com parametro, ele pegara a rota do controller + a do parametro = users/:id
  async getUsuario(@Param('id') id: string): Promise<User>{
    return this.UserService.getUsuario(Number(id));
  }

  @Post('login') // users/login
  async login(@Body() loginDto: LoginDto): Promise<User>{//promise -> "previsão de retorno"  @Body() dto -> padrao ideal
    return this.UserService.login(loginDto.email, loginDto.password);
  }

  @Post() // users
  async createUsuario(@Body() createUserDto: createUsuarioDto): Promise<User>{
    return this.UserService.criarUsuario(createUserDto);
  }
}

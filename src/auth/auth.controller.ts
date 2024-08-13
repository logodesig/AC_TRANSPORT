import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
    Request,
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { Public } from './decorators/public.decorator';
import { AuthUserDto } from './dto/auth-user.dto';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto:AuthUserDto) {
      if (signInDto.email===null) {
        throw new HttpException('Veillez renseigne un email valide', HttpStatus.NOT_ACCEPTABLE)
      }
      if (signInDto.email==="" && !signInDto.email.includes("@") ) {
        throw new HttpException('Veillez renseigne un email valide', HttpStatus.NOT_ACCEPTABLE)
      }
      if (signInDto.password==="") {
        throw new HttpException('Veillez renseigne un password', HttpStatus.NOT_ACCEPTABLE)
      }
      return this.authService.signIn(signInDto.email, signInDto.password);
    }
  
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }
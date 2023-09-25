import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthCreddentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCreddentialsDto: AuthCreddentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCreddentialsDto);
  }
  @Post('/signin')
  async signIp(
    @Body(ValidationPipe) authCreddentialsDto: AuthCreddentialsDto,
  ): Promise<{ accesToken: string }> {
    return this.authService.signIn(authCreddentialsDto);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCreddentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(authCreddentialsDto: AuthCreddentialsDto): Promise<void> {
    return await this.userRepository.signUp(authCreddentialsDto);
  }

  async signIn(
    authCreddentialsDto: AuthCreddentialsDto,
  ): Promise<{ accesToken: string }> {
    const username = await this.userRepository.signIn(authCreddentialsDto);

    if (!username) {
      throw new UnauthorizedException('Invaild Usrname');
    }

    const payload: JwtPayload = { username };
    const accesToken = await this.jwtService.sign(payload);
    return { accesToken };
  }
}

import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCreddentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async signUp(authCreddentialsDto: AuthCreddentialsDto): Promise<void> {
    return await this.userRepository.signUp(authCreddentialsDto);
  }

  async signIn(authCreddentialsDto: AuthCreddentialsDto) {
    return await this.userRepository.signIn(authCreddentialsDto);
  }
}

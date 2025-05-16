import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(user: LoginDto) {

    try {
      // Create a clean payload object
      const payload = {
        email: user.email,
        // Don't include sensitive data like password
      };

      // Try signing with explicit options
      const token = this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN', '1d'),
      });

      return {
        user,
        access_token: token,
        token_type: 'Bearer',
        expires_in: 86400, // 24 hours in seconds
      };
    } catch (error) {
      throw error;
    }
  }
}

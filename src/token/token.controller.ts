import { Controller, Post, Body } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('fetch-and-save')
  async fetchAndSaveToken(@Body() data: { chainId: number; tokenAddress: string }) {
    const { chainId, tokenAddress } = data;
    return this.tokenService.fetchAndSaveToken(chainId, tokenAddress);
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TokenService } from '../token/token.service';

@Controller('token')
export class DemoController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('create')
  async createToken(@Body() data: any) {
    return this.tokenService.createTokenData(data);
  }

  @Get('all')
  async getAllTokens() {
    return this.tokenService.getAllTokens();
  }

  @Get(':id')
  async getTokenById(@Param('id') id: number) {
    return this.tokenService.getTokenById(id);
  }
}

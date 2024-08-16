import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DemoService {
  constructor(private readonly prisma: PrismaService) {}

  async createTokenData(data: any) {
    // Assuming data is an object that matches the Token model schema
    return this.prisma.token.create({
      data,
    });
  }

  async getAllTokens() {
    return this.prisma.token.findMany();
  }

  async getTokenById(id: number) {
    return this.prisma.token.findUnique({
      where: { id },
    });
  }
}

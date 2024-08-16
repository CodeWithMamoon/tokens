import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DemoService {
  constructor(private prisma: PrismaService) {}

  async createDemoData() {
    return this.prisma.demo.create({
      data: {
        name: 'Mamoon',
        value: '1234',
      },
    });
  }

  async getAllDemoData() {
    return this.prisma.demo.findMany();
  }
}

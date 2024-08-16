import { Controller, Get, Post, Body } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post('create')
  async createDemoData(@Body() data: any) {
    return this.demoService.createDemoData(data);
  }

  @Get('all')
  async getAllDemoData() {
    return this.demoService.getAllDemoData();
  }
}

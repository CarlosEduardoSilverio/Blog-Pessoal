import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/Anime')
  getAnime(): string {
    return this.appService.getAnime();
  }
  @Get('/Filme')
  getFilme(): string {
    return this.appService.getFilme();
  }
}

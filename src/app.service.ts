import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Please add this to the url "/api" to visit swagger';
  }
}

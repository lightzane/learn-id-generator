import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidv4 } from 'uuid';
import ObjectID from 'bson-objectid';
import { SwaggerObjectId, SwaggerObjectIdTimestamp, SwaggerUuid } from './shared/decorators/swagger.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @SwaggerUuid()
  @Get('uuid')
  getUuid(): string {
    return uuidv4();
  }

  @SwaggerObjectId()
  @Get('objectid')
  getObjectId(): string {
    return ObjectID().toHexString();
  }

  @SwaggerObjectIdTimestamp()
  @Post('objectid/timestamp')
  getObjectIdTimestamp(@Body('objectId') objectId: string): any {
    return ObjectID(objectId).getTimestamp();
  }
}
